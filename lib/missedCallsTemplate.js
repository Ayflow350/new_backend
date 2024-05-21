// lib/emailTemplates/MissedClockEmail.js

const React = require("react");
const {
  Body,
  Column,
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
  Row,
} = require("@react-email/components");

function MissedClockEmailTemplate({
  fullName,
  missedClock,
  Reasons,
  Date,
  Time,
}) {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(
      Preview,
      null,
      "Daily Care Support Services - Missed Clock Information"
    ),
    React.createElement(
      Body,
      { style: main },
      React.createElement(
        Container,
        { style: container },
        React.createElement(
          Section,
          { style: logoSection },
          React.createElement(Img, {
            src: `https://res.cloudinary.com/drczkfgqp/image/upload/v1714690065/main_dj2ypu.png`,
            width: "275",
            height: "95",
            alt: "Daily Care Logo",
          })
        ),
        React.createElement(
          Section,
          { style: headerSection },
          React.createElement(
            Row,
            null,
            React.createElement(
              Column,
              { style: headerContent },
              React.createElement(
                Heading,
                { style: headerTitle },
                "Information about Missed Clock for the Daily Care Support Services"
              )
            ),
            React.createElement(
              Column,
              { style: headerImageContainer },
              React.createElement(Img, {
                style: headerImage,
                width: "340",
                src: `https://res.cloudinary.com/drczkfgqp/image/upload/v1715211850/stack-overflow-header_gj0ypu.png`,
              })
            )
          )
        ),
        React.createElement(
          Section,
          { style: contentSection },
          React.createElement(
            Heading,
            { as: "h2", style: title },
            `Hey!! 🥰 You just received missed clock details from ${fullName}`
          ),
          React.createElement(
            Text,
            { style: paragraph },
            "With more than 18 million questions, it's possible that someone has already provided a solution to the problem you're facing."
          ),
          React.createElement(Hr, { style: divider }),
          React.createElement(
            Text,
            { style: paragraph },
            React.createElement("b", { style: subtitle }, "Full Name: "),
            fullName
          ),
          React.createElement(
            Text,
            { style: paragraph },
            React.createElement("b", { style: subtitle }, "Missed Clock: "),
            missedClock
          ),
          React.createElement(
            Text,
            { style: paragraph },
            React.createElement(
              "b",
              { style: subtitle },
              "Reasons for missed clocks: "
            ),
            Reasons
          ),
          React.createElement(
            Text,
            { style: paragraph },
            React.createElement("b", { style: subtitle }, "Date: "),
            Date
          ),
          React.createElement(
            Text,
            { style: paragraph },
            React.createElement("b", { style: subtitle }, "Time: "),
            Time
          )
        ),
        React.createElement(
          Section,
          { style: footerSection },
          React.createElement(
            Text,
            { style: footerText },
            "You're receiving this email because your Daily support Services activity triggered this tip or reminder."
          ),
          React.createElement(
            Link,
            { href: "/", style: footerLink },
            "Unsubscribe from emails like this"
          ),
          React.createElement(
            Link,
            { href: "/", style: footerLink },
            "Edit email settings"
          ),
          React.createElement(
            Link,
            { href: "/", style: footerLink },
            "Contact us"
          ),
          React.createElement(
            Link,
            { href: "/", style: footerLink },
            "Privacy"
          ),
          React.createElement(Hr, { style: footerDivider }),
          React.createElement(
            Text,
            { style: footerAddress },
            React.createElement("strong", null, "Stack Overflow"),
            ", 110 William Street, 28th Floor, New York, NY 10038"
          ),
          React.createElement(Text, { style: footerHeart }, "<3")
        )
      )
    )
  );
}

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  width: "680px",
  maxWidth: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const logoSection = {
  display: "flex",
  background: "#f3f3f5",
  padding: "20px 30px",
};

const headerSection = {
  borderRadius: "5px 5px 0 0",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2b2d6e",
};

const headerContent = {
  padding: "20px 30px 15px",
};

const headerTitle = {
  color: "#fff",
  fontSize: "27px",
  fontWeight: "bold",
  lineHeight: "27px",
};

const headerImageContainer = {
  padding: "30px 10px",
};

const headerImage = {
  maxWidth: "100%",
};

const contentSection = {
  padding: "30px 30px 40px 30px",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const subtitle = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};

const divider = {
  margin: "30px 0",
};

const footerSection = {
  width: "680px",
  maxWidth: "100%",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerLink = {
  display: "inline-block",
  color: "#9199a1",
  textDecoration: "underline",
  fontSize: "12px",
  marginRight: "10px",
  marginBottom: "0",
  marginTop: "8px",
};

const footerDivider = {
  margin: "32px 0",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

const footerHeart = {
  borderRadius: "1px",
  border: "1px solid #d6d9dc",
  padding: "4px 6px 3px 6px",
  fontSize: "11px",
  lineHeight: "11px",
  fontFamily: "Consolas, monospace",
  color: "#e06c77",
  maxWidth: "min-content",
  margin: "0 0 32px 0",
};

module.exports = MissedClockEmailTemplate;
