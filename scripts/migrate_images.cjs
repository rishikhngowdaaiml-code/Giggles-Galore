const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/components/GallerySection.jsx',
  'src/components/TeamSection.jsx',
  'src/components/CrewPage.jsx'
];

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

for (const file of filesToProcess) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all /@fs/C:/... paths
  const regex = /\/@fs\/(C:\/[^"]+)/g;
  let match;
  let newContent = content;
  
  while ((match = regex.exec(content)) !== null) {
    const fullMatch = match[0];
    const absolutePath = match[1];
    const filename = path.basename(absolutePath);
    const destPath = path.join(publicImagesDir, filename);
    
    try {
      if (fs.existsSync(absolutePath)) {
        fs.copyFileSync(absolutePath, destPath);
        newContent = newContent.replace(fullMatch, '/images/' + filename);
      }
    } catch (e) {
      console.error('Error copying ' + absolutePath, e);
    }
  }
  
  // Also handle basePath in GallerySection.jsx
  if (file === 'src/components/GallerySection.jsx') {
      const basePathRegex = /const basePath = "\/@fs\/([^"]+)";/g;
      const bpMatch = basePathRegex.exec(content);
      if (bpMatch) {
          const absoluteBasePath = bpMatch[1];
          // Replace basePath with /images/
          newContent = newContent.replace(bpMatch[0], 'const basePath = "/images/";');
          
          // Now copy all gallery images
          const mediaRegex = /basePath \+ "(media__[^"]+)"/g;
          let m;
          while ((m = mediaRegex.exec(content)) !== null) {
              const filename = m[1];
              const sourcePath = path.join(absoluteBasePath, filename);
              const destPath = path.join(publicImagesDir, filename);
              try {
                  if (fs.existsSync(sourcePath)) {
                      fs.copyFileSync(sourcePath, destPath);
                  }
              } catch (e) {
                  console.error('Error copying gallery image ' + sourcePath, e);
              }
          }
      }
  }

  fs.writeFileSync(filePath, newContent);
  console.log('Processed ' + file);
}
