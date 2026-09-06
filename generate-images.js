const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "images");
const outputFile = path.join(__dirname, "images.json");

const allowedExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif"
];

if (!fs.existsSync(imagesDir)) {
  console.error("Images folder not found:", imagesDir);
  process.exit(1);
}

const images = fs
  .readdirSync(imagesDir)
  .filter(file => {
    const extension = path.extname(file).toLowerCase();
    return allowedExtensions.includes(extension);
  })
  .sort((a, b) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base"
    })
  );

fs.writeFileSync(
  outputFile,
  JSON.stringify(images, null, 2) + "\n"
);

console.log(`Generated images.json with ${images.length} images.`);
