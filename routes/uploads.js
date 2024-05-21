const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer for file upload
const upload = multer({ dest: "uploads/" });

// Route to handle file upload
router.post(
  "/",
  upload.fields([
    { name: "CJIS", maxCount: 1 },
    { name: "Physical Examination", maxCount: 1 },
    { name: "Payroll", maxCount: 1 },
    { name: "Request", maxCount: 1 },
    { name: "Tax Forms", maxCount: 1 },
    { name: "Eligibility Form", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const files = req.files;
      const uploadedFiles = [];

      // Upload each file to Cloudinary
      for (const key in files) {
        const file = files[key][0];
        const result = await cloudinary.uploader.upload(file.path);
        uploadedFiles.push(result.secure_url);
      }

      // Respond with the URLs of the uploaded files
      res.json({ files: uploadedFiles });
    } catch (error) {
      console.error("Error during file upload:", error);
      res
        .status(500)
        .json({ message: "An error occurred during file upload." });
    }
  }
);

module.exports = router;
