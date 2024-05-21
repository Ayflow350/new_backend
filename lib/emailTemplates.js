// lib/emailTemplates/AWSVerifyEmail.js

const React = require("react");
const {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} = require("@react-email/components");

function AWSVerifyEmail({ verificationCode }) {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(Preview, null, "AWS Email Verification"),
    React.createElement(
      Body,
      { style: main },
      React.createElement(
        Container,
        { style: container },
        React.createElement(
          Section,
          { style: coverSection },
          React.createElement(
            Section,
            { style: imageSection },
            React.createElement(Img, {
              src: `https://res.cloudinary.com/drczkfgqp/image/upload/v1714690065/main_dj2ypu.png`,
              width: "275",
              height: "95",
              alt: "Daily Care Logo",
            })
          ),
          React.createElement(
            Section,
            { style: upperSection },
            React.createElement(
              Heading,
              { style: h1 },
              "Verify your email address"
            ),
            React.createElement(
              Text,
              { style: mainText },
              "Thanks for starting the new AWS account creation process. We want to make sure it's really you. Please enter the following verification code when prompted. If you don't want to create an account, you can ignore this message."
            ),
            React.createElement(
              Section,
              { style: verificationSection },
              React.createElement(
                Text,
                { style: verifyText },
                "Verification code"
              ),
              React.createElement(Text, { style: codeText }, verificationCode),
              React.createElement(
                Text,
                { style: validityText },
                "(This code is valid for 10 minutes)"
              )
            )
          ),
          React.createElement(Hr, null),
          React.createElement(
            Section,
            { style: lowerSection },
            React.createElement(
              Text,
              { style: cautionText },
              "Amazon Web Services will never email you and ask you to disclose or verify your password, credit card, or banking account number."
            )
          )
        ),
        React.createElement(
          Text,
          { style: footerText },
          "This message was produced and distributed by Amazon Web Services, Inc., 410 Terry Ave. North, Seattle, WA 98109. © 2022, Amazon Web Services, Inc. All rights reserved. AWS is a registered trademark of",
          " ",
          React.createElement(
            Link,
            { href: "https://amazon.com", target: "_blank", style: link },
            "Amazon.com"
          ),
          ". View our",
          " ",
          React.createElement(
            Link,
            { href: "https://amazon.com", target: "_blank", style: link },
            "privacy policy"
          ),
          "."
        )
      )
    )
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  backgroundColor: "#252f3d",
  display: "flex",
  padding: "20px 20px",
  paddingLeft: "30px",
  alignItems: "center",
  justifyContent: "center",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: "bold",
  textAlign: "center",
};

const codeText = {
  ...text,
  fontWeight: "bold",
  fontSize: "36px",
  margin: "10px 0",
  textAlign: "center",
};

const validityText = {
  ...text,
  margin: "0px",
  textAlign: "center",
};

const verificationSection = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mainText = { ...text, marginBottom: "14px" };

const cautionText = { ...text, margin: "0px" };

module.exports = AWSVerifyEmail;
