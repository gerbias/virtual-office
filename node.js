const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function createIcon() {
  const iconDir = path.join(__dirname, 'build', 'icons');
  
  try {
    // Create icons directory if it doesn't exist
    await fs.mkdir(iconDir, { recursive: true });

    // Convert SVG to PNG
    await sharp('icon.svg')
      .resize(256, 256)
      .png()
      .toFile(path.join(iconDir, '256x256.png'));

    console.log('Icon created successfully');
  } catch (error) {
    console.error('Error creating icon:', error);
  }
}

createIcon();