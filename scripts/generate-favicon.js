const sharp = require('sharp');
const path = require('path');

const logoPath = path.join(__dirname, '../public/logo.png');
const publicPath = path.join(__dirname, '../public');

async function generateFavicons() {
  try {
    console.log('Generating favicons from logo.png...');
    
    // Create favicon.ico (32x32)
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile(path.join(publicPath, 'favicon.ico'));
    console.log('✓ Created favicon.ico');

    // Create favicon-16x16.png
    await sharp(logoPath)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicPath, 'favicon-16x16.png'));
    console.log('✓ Created favicon-16x16.png');

    // Create favicon-32x32.png
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicPath, 'favicon-32x32.png'));
    console.log('✓ Created favicon-32x32.png');

    // Create apple-touch-icon.png (180x180)
    await sharp(logoPath)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicPath, 'apple-touch-icon.png'));
    console.log('✓ Created apple-touch-icon.png');

    console.log('\nFavicon generation complete!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
