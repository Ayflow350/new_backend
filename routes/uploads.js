const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const nodemailer = require("nodemailer");
const CodepenChallengersEmail = require("../lib/uploadEmailTemplate"); // Adjust the path as necessary

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer for file upload
const upload = multer({ dest: "uploads/" });

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your preferred email service
  auth: {
    user: "soluwatist@gmail.com",
    pass: "meqx zscx istz frcn",
  },
});

// Route to handle file upload and send email
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
      const uploadedFiles = {};

      // Upload each file to Cloudinary
      for (const key in files) {
        const file = files[key][0];
        const result = await cloudinary.uploader.upload(file.path);
        uploadedFiles[key] = result.secure_url;
        console.log(`File uploaded: ${key} - ${result.secure_url}`);
      }

      // Render the email with the URLs of the uploaded files
      const emailHtml = ReactDOMServer.renderToStaticMarkup(
        React.createElement(CodepenChallengersEmail, { urls: uploadedFiles })
      );

      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email
        to: "blessinggrayly@gmail.com",
        subject: "Your Uploaded Files",
        html: emailHtml,
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res
            .status(500)
            .json({ message: "Failed to send email", error });
        } else {
          res.status(200).json({ message: "Email sent successfully", info });
        }
      });
    } catch (error) {
      console.error("Error during file upload:", error);
      res
        .status(500)
        .json({ message: "An error occurred during file upload." });
    }
  }
);

module.exports = router;
