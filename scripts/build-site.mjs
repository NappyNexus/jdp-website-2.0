// Produces a flat `dist/` directory ready to deploy to Cloudflare Pages
// (or any other static host). Run after Tailwind has emitted `src/output.css`.
//
//   1. Wipes and recreates `dist/`
//   2. Copies the compiled CSS, root-level JS, assets/, and fonts/ verbatim
//   3. Copies each HTML file from src/ and rewrites the `../` relative paths
//      so they resolve from the dist root.
//
// The source tree under `src/` is left untouched so `npm run dev` keeps working.

import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

const OUT = 'dist';

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

await cp('src/output.css', `${OUT}/output.css`);
await cp('index.js', `${OUT}/index.js`);
await cp('assets', `${OUT}/assets`, { recursive: true });
await cp('fonts', `${OUT}/fonts`, { recursive: true });

const htmlFiles = ['index.html', 'about_us.html', 'contact.html'];
for (const f of htmlFiles) {
  const src = await readFile(`src/${f}`, 'utf8');
  const dst = src
    .replaceAll('../assets/', './assets/')
    .replaceAll('../fonts/', './fonts/')
    .replaceAll('../index.js', './index.js');
  await writeFile(`${OUT}/${f}`, dst);
}

console.log(`Built ${htmlFiles.length} pages → ${OUT}/`);
