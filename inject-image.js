const fs = require('fs');
const imgPath = 'C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778298763533.png';
const componentPath = 'C:/Users/1185r/.gemini/antigravity/scratch/giggles-galore/src/components/CrewPage.jsx';

try {
  const img = fs.readFileSync(imgPath);
  const base64 = 'data:image/png;base64,' + img.toString('base64');
  let content = fs.readFileSync(componentPath, 'utf8');
  content = content.replace('"/crew1.png"', '`' + base64 + '`');
  fs.writeFileSync(componentPath, content);
  console.log('Successfully injected base64 image into CrewPage.jsx');
} catch (e) {
  console.error('Error:', e.message);
}
