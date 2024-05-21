const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid"); // Import uuid

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Extracting data from request");
    const { email, password } = req.body;

    console.log("Checking if user with the given email exists");
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      console.warn(`User with email ${email} does not exist`);
      return res.status(401).json({
        message: `User with this email (${email}) does not exist.`,
      });
    }

    console.log("Verifying password");
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.hashedPassword
    );

    if (!isPasswordCorrect) {
      console.warn(`Invalid password for user with email ${email}`);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("Generating JWT token");

    const sessionId = uuidv4(); // Generate unique session identifier
    const token = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
        role: existingUser.role,
        sessionId: sessionId, // Include session ID in the JWT payload
      },
      process.env.JWT_SECRET,
      { expiresIn: "4d" }
    );

    // Save session to the database
    await prisma.session.create({
      data: {
        userId: existingUser.id,
        sessionId: sessionId,
      },
    });

    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      message: "An error occurred during login.",
      error: error.message,
    });
  }
});

module.exports = router;
