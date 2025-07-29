const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
    const inputDir = 'public/images/photography';
    const outputDir = 'public/images/photography-optimized';
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Get all image files recursively
    function getAllImages(dir) {
        const files = [];
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                files.push(...getAllImages(fullPath));
            } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
                files.push(fullPath);
            }
        }
        
        return files;
    }
    
    const imageFiles = getAllImages(inputDir);
    
    console.log(`Found ${imageFiles.length} images to optimize...`);
    
    for (const imagePath of imageFiles) {
        try {
            const relativePath = path.relative(inputDir, imagePath);
            const outputPath = path.join(outputDir, relativePath);
            
            // Create output subdirectory if needed
            const outputSubDir = path.dirname(outputPath);
            if (!fs.existsSync(outputSubDir)) {
                fs.mkdirSync(outputSubDir, { recursive: true });
            }
            
            const originalSize = fs.statSync(imagePath).size;
            
            // Optimize image
            await sharp(imagePath)
                .jpeg({ quality: 80, progressive: true })
                .png({ quality: 80 })
                .toFile(outputPath);
            
            const optimizedSize = fs.statSync(outputPath).size;
            const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
            
            console.log(`${relativePath}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
            
        } catch (error) {
            console.error(`Error optimizing ${imagePath}:`, error.message);
        }
    }
    
    console.log('\nOptimized images saved to:', outputDir);
    console.log('You can replace the original images with these optimized versions.');
}

optimizeImages(); 