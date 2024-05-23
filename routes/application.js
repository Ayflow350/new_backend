const nodemailer = require("nodemailer");
const { renderToStaticMarkup } = require("react-dom/server");
const ApplicationEmailTemplate = require("../lib/applicationEmailTemplate");
const React = require("react");
const base64Img = require("base64-img");
const fs = require("fs");
const path = require("path");

async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    address,
    agree,
    applicationDate,
    applyPosition,
    city,
    collegeAreaOfStudy,
    collegeDateAttended,
    collegeDiploma,
    contactAtWork,
    contactEmployer,
    correspondenceAddress,
    dates,
    eligibleToWork,
    email,
    employer,
    endingSalary,
    firstName,
    fullName,
    highSchoolAreaOfStudy,
    highSchoolDateAttended,
    highSchoolDiploma,
    highSchoolNameAndAddress,
    homeAddress,
    homePhone,
    lastName,
    message,
    mobile,
    mrMrs,
    position,
    professionalTrainings,
    reason,
    signatureImage, // Assume this is a base64 string
    startingSalary,
    state,
    workPermitOrVisa,
    zipCode,
  } = req.body;

  // Convert base64 to image and save it
  const imageFilePath = path.join(__dirname, "signature.jpg");
  base64Img.img(signatureImage, __dirname, "signature", (err, filepath) => {
    if (err) {
      console.error("Error converting base64 to image:", err);
      return res
        .status(500)
        .json({ message: "Failed to process signature image" });
    }

    // Read the image file
    const imageData = fs.readFileSync(filepath);

    // Convert image data to base64 for embedding in email
    const signatureImageBase64 = `data:image/jpeg;base64,${imageData.toString(
      "base64"
    )}`;

    // Generate email content
    const emailContent = renderToStaticMarkup(
      React.createElement(ApplicationEmailTemplate, {
        address,
        agree,
        applicationDate,
        applyPosition,
        city,
        collegeAreaOfStudy,
        collegeDateAttended,
        collegeDiploma,
        contactAtWork,
        contactEmployer,
        correspondenceAddress,
        dates,
        eligibleToWork,
        email,
        employer,
        endingSalary,
        firstName,
        fullName,
        highSchoolAreaOfStudy,
        highSchoolDateAttended,
        highSchoolDiploma,
        highSchoolNameAndAddress,
        homeAddress,
        homePhone,
        lastName,
        message,
        mobile,
        mrMrs,
        position,
        professionalTrainings,
        reason,
        signatureImage: signatureImageBase64, // Use the base64 image data here
        startingSalary,
        state,
        workPermitOrVisa,
        zipCode,
      })
    );

    // Send email
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Use your preferred email service
        auth: {
          user: "soluwatist@gmail.com",
          pass: "meqx zscx istz frcn",
        },
      });

      transporter.sendMail(
        {
          from: process.env.EMAIL_USER, // Sender's email
          to: "adebayofolasade631@gmail.com",
          subject: "New Referral Received",
          html: emailContent,
        },
        (error, info) => {
          if (error) {
            console.error(error);
            return res
              .status(500)
              .json({
                message: `Failed to send referral email: ${error.message}`,
              });
          }

          return res
            .status(200)
            .json({ message: "Referral email sent successfully!" });
        }
      );
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: `Failed to send referral email: ${error.message}` });
    } finally {
      // Clean up the image file
      fs.unlink(filepath, (err) => {
        if (err) console.error("Failed to delete temporary image file:", err);
      });
    }
  });
}

module.exports = sendEmail;
