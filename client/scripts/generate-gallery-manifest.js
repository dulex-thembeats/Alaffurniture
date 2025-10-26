// generate-gallery-manifest.js
// Usage: node generate-gallery-manifest.js ids.txt
// ids.txt should contain one Cloudinary public ID per line, e.g.
// my-folder/living-room-01.jpg
// my-folder/kitchen-01.jpg

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = process.argv[2] || path.join(__dirname, 'ids.txt');
const outFile = path.join(__dirname, '..', 'public', 'gallery.json');

if (!fs.existsSync(inputFile)) {
    console.error('Input file not found:', inputFile);
    console.error('Create a newline-separated list of Cloudinary public IDs (e.g. my-folder/img-001.jpg)');
    process.exit(1);
}

const raw = fs.readFileSync(inputFile, 'utf8');
const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

const out = lines.map((publicId, i) => ({
    id: `${i + 1}`,
    title: publicId.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    category: 'Gallery',
    imagePublicId: publicId,
    description: '',
    featured: false
}));

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(out, null, 2), 'utf8');
console.log('Generated', outFile, 'with', out.length, 'entries');