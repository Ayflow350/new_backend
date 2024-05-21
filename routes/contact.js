const nodemailer = require("nodemailer");
const { renderToStaticMarkup } = require("react-dom/server");
const ContactEmailTemplate = require("../lib/contactEmailTemplate");
const React = require("react");

async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, address, email, message } = req.body;

  const emailContent = renderToStaticMarkup(
    React.createElement(ContactEmailTemplate, {
      firstName,
      email,
      message,
      address,
    })
  );

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your preferred email service
      auth: {
        user: "soluwatist@gmail.com",
        pass: "meqx zscx istz frcn",
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender's email
      to: "adebayofolasade631@gmail.com",
      subject: "New Referral Received",
      html: emailContent,
    });

    return res
      .status(200)
      .json({ message: "Referral email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `Failed to send referral email: ${error.message}` });
  }
}

module.exports = sendEmail;
