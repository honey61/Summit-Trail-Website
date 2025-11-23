require("dotenv").config({ path: require("path").resolve(__dirname, "../..", ".env") });

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

console.log("CLOUDINARY CHECK:", process.env.CLOUD_NAME, process.env.CLOUD_API_KEY ? "OK" : "MISSING");

module.exports = cloudinary;
