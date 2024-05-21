const nodemailer = require("nodemailer");
const { renderToStaticMarkup } = require("react-dom/server");
const MissedClockEmailTemplate = require("../lib/missedCallsTemplate");
const React = require("react");

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, missedClocks, time, reasonForMissedClock, date } = req.body;

  const emailContent = renderToStaticMarkup(
    React.createElement(MissedClockEmailTemplate, {
      fullName,
      missedClocks,
      reasonForMissedClock,
      date,
      time,
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
      subject: "Missed Clock Report",
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
