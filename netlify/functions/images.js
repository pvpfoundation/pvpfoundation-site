const fs = require("fs");
const path = require("path");

exports.handler = async function () {
  const directoryPath = path.join(process.cwd(), "images");

  try {
    const files = fs.readdirSync(directoryPath)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

    return {
      statusCode: 200,
      body: JSON.stringify(files),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to scan directory" }),
    };
  }
};