// Bundles src/main.js (+ three.js) into dist/app.js as one classic script, so index.html works from file:// with no module/CORS issues.
import esbuild from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');
const opts = {
  entryPoints: [path.join(root, 'src/main.js')],
  bundle: true, format: 'iife', target: 'es2020', outfile: path.join(root, 'dist/app.js'),
  sourcemap: false, minify: !process.argv.includes('--dev'), legalComments: 'none', logLevel: 'info',
  loader: { '.glsl': 'text', '.vert': 'text', '.frag': 'text' },
  nodePaths: [path.join(root, 'dev/node_modules')],
  alias: { three: path.join(root, 'dev/node_modules/three') },
};
if (watch) { const ctx = await esbuild.context(opts); await ctx.watch(); console.log('watching…'); } else await esbuild.build(opts);
