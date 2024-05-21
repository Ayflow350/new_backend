const express = require("express");
const db = require("../lib/db");
const dayjs = require("dayjs");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Allow only 'POST' method
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { otp } = req.body; // Extract OTP from request body

    if (!otp) {
      return res.status(400).json({ message: "OTP is required" });
    }

    // Fetch the OTP record by the provided OTP
    const otpRecord = await db.otp.findFirst({
      where: { otp: parseInt(otp, 10) }, // Parse OTP to an integer
    });

    if (!otpRecord) {
      return res.status(404).json({ message: "OTP record not found" });
    }

    if (otpRecord.expiry < new Date()) {
      // Delete expired OTP if needed
      await db.otp.delete({
        where: { id: otpRecord.id },
      });
      return res.status(400).json({ message: "The OTP has expired" });
    }

    const email = otpRecord.email; // Get the email from the OTP record

    // Update the user's email verification status
    const updatedUser = await db.user.update({
      where: { email },
      data: {
        emailVerified: true,
        emailVerifiedDate: dayjs().toDate(),
      },
    });

    // Delete the OTP after verification
    await db.otp.delete({
      where: { id: otpRecord.id },
    });

    return res.status(200).json({
      message: "Email verified successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({
      message: "An error occurred while verifying OTP",
      error: error.message,
    });
  }
});

module.exports = router;
