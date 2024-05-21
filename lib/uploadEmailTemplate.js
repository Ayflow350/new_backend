const React = require("react");
const {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Section,
  Text,
  Row,
  Column,
} = require("@react-email/components");

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const CodepenChallengersEmail = ({ urls }) =>
  React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(
      Body,
      { style: main },
      React.createElement(
        Container,
        { style: container },
        React.createElement(
          Section,
          { style: section },
          React.createElement(
            Row,
            null,
            React.createElement(
              Column,
              { style: ideas },
              React.createElement(Text, { style: ideasTitle }, "IDEAS!"),
              React.createElement(
                Section,
                { style: yellowCard },
                React.createElement(Img, {
                  src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg",
                  alt: "3D Cube",
                  style: cardImage,
                }),
                React.createElement(Text, { style: textCard }, "CJIS"),
                React.createElement(
                  Link,
                  {
                    href: urls.CJIS,
                    target: "_blank",
                  },
                  "Download PDF"
                )
              ),
              React.createElement(
                Section,
                { style: yellowCard },
                React.createElement(Img, {
                  src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg",
                  alt: "3D Cube",
                  style: cardImage,
                }),
                React.createElement(
                  Text,
                  { style: textCard },
                  "TaxPayer Identification"
                ),
                React.createElement(
                  Link,
                  {
                    href: urls["Tax Forms"],
                    target: "_blank",
                  },
                  "Download PDF"
                )
              ),
              React.createElement(
                Section,
                { style: yellowCard },
                React.createElement(Img, {
                  src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg",
                  alt: "Spherical Cubes",
                  style: cardImage,
                }),
                React.createElement(Text, { style: textCard }, "Payroll"),
                React.createElement(
                  Link,
                  {
                    href: urls.Payroll,
                    target: "_blank",
                  },
                  "Download PDF"
                )
              )
            ),
            React.createElement(
              Column,
              { style: resources },
              React.createElement(
                Text,
                { style: resourcesTitle },
                "RESOURCES!"
              ),
              React.createElement(
                Section,
                { style: blueCard },
                React.createElement(Img, {
                  src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg",
                  alt: "CSS Perspective",
                  style: cardImage,
                }),
                React.createElement(
                  Text,
                  { style: textCard },
                  "Employment Eligibility"
                ),
                React.createElement(
                  Link,
                  {
                    href: urls["Eligibility Form"],
                    target: "_blank",
                  },
                  "Download PDF"
                )
              ),
              React.createElement(
                Section,
                { style: blueCard },
                React.createElement(Img, {
                  src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg",
                  alt: "Pulsating Tesseract",
                  style: cardImage,
                }),
                React.createElement(
                  Text,
                  { style: textCard },
                  "Physical Examination"
                ),
                React.createElement(
                  Link,
                  {
                    href: urls["Physical Examination"],
                    target: "_blank",
                  },
                  "Download PDF"
                )
              ),
              React.createElement(
                Section,
                { style: blueCard },
                React.createElement(Img, {
                  src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg",
                  alt: "Pulsating Tesseract",
                  style: cardImage,
                }),
                React.createElement(
                  Text,
                  { style: textCard },
                  "Employee withholding cert"
                ),
                React.createElement(
                  Link,
                  {
                    href: urls.Request,
                    target: "_blank",
                  },
                  "Download PDF"
                )
              )
            )
          )
        )
      )
    )
  );

module.exports = CodepenChallengersEmail;

const main = {
  fontFamily: '"Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
  backgroundColor: "#505050",
  margin: "0",
};

const container = {
  margin: "0 auto",
  width: "648px",
  maxWidth: "100%",
  position: "relative",
};

const section = {
  margin: "0",
  background: "#fff",
  padding: "0 24px",
};

const resourcesTitle = {
  fontWeight: "900",
  lineHeight: "1.1",
  marginTop: "-40px",
  fontSize: "18px",
};

const ideasTitle = {
  fontWeight: "900",
  lineHeight: "1.1",
  fontSize: "18px",
};

const ideas = {
  width: "50%",
  paddingRight: "10px",
};

const resources = {
  width: "50%",
  paddingLeft: "10px",
};

const card = {
  padding: "20px",
  margin: "0 0 20px 0",
  borderRadius: "10px",
  fontSize: "36px",
  textAlign: "center",
};

const yellowCard = {
  ...card,
  background: "#fff4c8",
  border: "1px solid #f4d247",
};

const blueCard = {
  ...card,
  background: "#d9f6ff",
  border: "1px solid #92bfd0",
};

const cardImage = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  marginBottom: "10px",
};

const textCard = {
  fontSize: "13px",
  textAlign: "left",
};
