import puppeteer from 'puppeteer-core';
const exe = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
for (const args of [['--use-angle=metal','--enable-gpu'], ['--use-angle=swiftshader','--enable-unsafe-swiftshader'], []]) {
  const browser = await puppeteer.launch({ executablePath: exe, headless: true, args: [...args, '--no-sandbox', '--ignore-gpu-blocklist', '--enable-webgl'] });
  const page = await browser.newPage();
  const r = await page.evaluate(() => {
    const c = document.createElement('canvas'); const gl = c.getContext('webgl2'); if (!gl) return 'no webgl2';
    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    return { r: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER), maxTex: gl.getParameter(gl.MAX_TEXTURE_SIZE), floatRT: !!gl.getExtension('EXT_color_buffer_float'), halfLinear: !!gl.getExtension('OES_texture_float_linear') };
  });
  console.log(JSON.stringify(args), '=>', JSON.stringify(r));
  await browser.close();
}
