const nodemailer = require("nodemailer");
const { renderToStaticMarkup } = require("react-dom/server");
const ReferralEmailTemplate = require("../lib/referralTemplate");
const React = require("react");

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    referrerName,
    referrerEmail,
    refereeName,
    refereeEmail,
    refereePhone,
  } = req.body;

  const emailContent = renderToStaticMarkup(
    React.createElement(ReferralEmailTemplate, {
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      refereePhone,
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
      to: "blessinggrayly@gmail.com",
      subject: "Referral ",
      html: emailContent,
    });

    return res
      .status(200)
      .json({ message: "Missed clock email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `Failed to send missed clock email: ${error.message}` });
  }
}

module.exports = handler;
