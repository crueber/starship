import { boot } from './app.js';
boot().catch((e) => {
  console.error(e);
  const m = document.getElementById('boot-msg'); if (m) { m.textContent = 'Error: ' + (e && e.message ? e.message : e); m.style.color = '#f88'; }
});
