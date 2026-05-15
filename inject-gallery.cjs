const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1';
const outPath = 'C:/Users/1185r/.gemini/antigravity/scratch/giggles-galore/src/galleryData.js';

const images = [
  'media__1778299876296.jpg',
  'media__1778299876400.jpg',
  'media__1778299876434.jpg',
  'media__1778299876496.jpg',
  'media__1778299876507.jpg',
  'media__1778300041149.jpg',
  'media__1778300041190.jpg',
  'media__1778300041222.jpg',
  'media__1778300041291.jpg',
  'media__1778300041307.jpg'
];

try {
  let jsContent = 'export const galleryImages = [\n';
  
  for (const imgName of images) {
    const fullPath = path.join(brainDir, imgName);
    const imgData = fs.readFileSync(fullPath);
    const base64 = 'data:image/jpeg;base64,' + imgData.toString('base64');
    jsContent += `  "${base64}",\n`;
  }
  
  jsContent += '];\n';
  
  fs.writeFileSync(outPath, jsContent);
  console.log('Successfully created galleryData.js with all 10 base64 images.');
} catch (e) {
  console.error('Error:', e.message);
}
