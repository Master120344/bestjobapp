import { cp, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'dist');
await access(path.join(source, 'index.html'));
await cp(source, root, { recursive: true });
await writeFile(path.join(root, '.nojekyll'), '');
console.log('Exported Goodfolk for GitHub Pages. The original source remains in dist/.');
