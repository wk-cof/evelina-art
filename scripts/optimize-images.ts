import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function processImages() {
  const files = fs.readdirSync(publicDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));

  for (const file of pngFiles) {
    const filePath = path.join(publicDir, file);
    const parsed = path.parse(file);
    const baseName = parsed.name;
    
    console.log(`Processing ${file}...`);
    
    // 1. Generate full webp
    const fullPath = path.join(publicDir, `${baseName}_full.webp`);
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(fullPath);
      
    console.log(` -> Created ${baseName}_full.webp`);

    // 2. Generate thumb webp
    const thumbPath = path.join(publicDir, `${baseName}_thumb.webp`);
    await sharp(filePath)
      .resize(600, 600, {
        fit: 'cover',
        position: sharp.strategy.attention
      })
      .webp({ quality: 80 })
      .toFile(thumbPath);
      
    console.log(` -> Created ${baseName}_thumb.webp`);
    
    // Remove original png to save space
    fs.unlinkSync(filePath);
    console.log(` -> Deleted original ${file}`);
  }
}

processImages().catch(console.error);
