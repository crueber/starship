// Decodes the bundled data-URI textures (assets/textures.js) into GPU textures. No network.
import * as THREE from 'three';

export async function loadTextures(renderer) {
  const src = window.__SIMTEX || {};
  const out = {};
  const maxTex = renderer.capabilities.maxTextureSize;
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const jobs = Object.entries(src).map(([key, uri]) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let source = img;
      if (img.width > maxTex) {              // very old GPUs: downscale to fit
        const c = document.createElement('canvas'); c.width = maxTex; c.height = Math.round(img.height * maxTex / img.width);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); source = c;
      }
      const t = new THREE.Texture(source);
      t.colorSpace = THREE.NoColorSpace;            // sampled raw; shaders linearise
      t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.ClampToEdgeWrapping;
      t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.generateMipmaps = true; t.anisotropy = aniso;
      if (key === 'saturn_ring_alpha') { t.wrapS = THREE.ClampToEdgeWrapping; t.generateMipmaps = true; }
      t.needsUpdate = true;
      out[key] = t; resolve();
    };
    img.onerror = () => { console.warn('texture failed:', key); resolve(); };
    img.src = uri;
  }));
  await Promise.all(jobs);
  return out;
}

export function blankTexture() {
  const t = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, THREE.RGBAFormat); t.needsUpdate = true; return t;
}
