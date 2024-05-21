const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users.js");
const verifyRoutes = require("./routes/verify-otp.js");
const contactRoutes = require("./routes/contact-us.js");
const generateRoutes = require("./routes/generate-otp.js");
const missedCallsRoutes = require("./routes/missed-calls.js");
const applicationRoutes = require("./routes/mainapplications.js");
const uploadRoutes = require("./routes/upload.js");
const loginRoutes = require("./routes/signIn.js");
const dotenv = require("dotenv");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://daily-care-6y11.vercel.app"],
    methods: "GET,POST,PUT,DELETE",
  })
);

// connect passport middleware to the Express application

app.use(bodyParser.json());

// Use payment routes
app.use("/users", userRoutes);

console.log("Routes set up successfully");

app.use("/verify-otp", verifyRoutes);

app.use("/generate-otp", generateRoutes);

app.use("/application", applicationRoutes);
app.use("/upload", uploadRoutes);
app.use("/contact", contactRoutes);
app.use("/login", loginRoutes);

app.use("/missed", missedCallsRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Please Navigate to /auth/google to login</h1>");
});

// Display the user Profile

app.listen(8080, () => {
  console.log(`Now listening to port 8080`);
});