const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
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

const styles = {
  main: {
    backgroundColor: "#f3f3f5",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  },
  container: {
    width: "680px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  },
  logo: {
    display: "flex",
    background: "#f3f3f5",
    padding: "20px 30px",
  },
  header: {
    borderRadius: "5px 5px 0 0",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2b2d6e",
  },
  headerContent: {
    padding: "20px 30px 15px",
  },
  headerContentTitle: {
    color: "#fff",
    fontSize: "27px",
    fontWeight: "bold",
    lineHeight: "27px",
  },
  headerContentSubtitle: {
    color: "#fff",
    fontSize: "17px",
  },
  headerImageContainer: {
    padding: "30px 10px",
  },
  headerImage: {
    maxWidth: "100%",
  },
  content: {
    padding: "30px 30px 40px 30px",
  },
  title: {
    margin: "0 0 15px",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "21px",
    color: "#0c0d0e",
  },
  subtitle: {
    margin: "0 0 15px",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#0c0d0e",
  },
  paragraph: {
    fontSize: "15px",
    lineHeight: "21px",
    color: "#3c3f44",
  },
  divider: {
    margin: "30px 0",
  },
  buttonContainer: {
    marginTop: "24px",
    display: "block",
  },
  button: {
    backgroundColor: "#0095ff",
    border: "1px solid #0077cc",
    fontSize: "17px",
    lineHeight: "17px",
    padding: "13px 17px",
    borderRadius: "4px",
    maxWidth: "120px",
    color: "#fff",
  },
  footer: {
    width: "680px",
    maxWidth: "100%",
    margin: "32px auto 0 auto",
    padding: "0 30px",
  },
  footerText: {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
    margin: "0",
  },
  footerLink: {
    display: "inline-block",
    color: "#9199a1",
    textDecoration: "underline",
    fontSize: "12px",
    marginRight: "10px",
    marginBottom: "0",
    marginTop: "8px",
  },
  footerAddress: {
    margin: "4px 0",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
  },
  footerHeart: {
    borderRadius: "1px",
    border: "1px solid #d6d9dc",
    padding: "4px 6px 3px 6px",
    fontSize: "11px",
    lineHeight: "11px",
    fontFamily: "Consolas, monospace",
    color: "#e06c77",
    maxWidth: "min-content",
    margin: "0 0 32px 0",
  },
};

const container = {
  width: "648px",
  maxWidth: "100%",
  position: "relative",
  alignItems: "center",
};
const section = {
  background: "#2A2D6E",
  padding: "24px 24px",
};
const subtitle = {
  fontSize: "16px",
  textAlign: "left",
};
const ideas = {
  width: "50%",
  paddingRight: "10px",
};
const card = {
  padding: "20px",
  margin: "0 0 20px 0",
  borderRadius: "10px",
  fontSize: "12px",
};
const yellowCard = {
  ...card,
  background: "#fff",
};
const textCard = {
  fontSize: "13px",
  textAlign: "left",
  marginTop: "0",
};

const data = {
  employer: "John",
  dates: "Doe",
  position: "123 Main St, Anytown, USA",
  reason: "PO Box 1234, Anytown, USA",
  startingSalary: "123-456-7890",
  endingSalary: "098-765-4321",
  contactEmployer: "HR",
  message: "Yes",
};

// React functional component for the email
const ApplicationEmailTemplate = (data) => {
  return React.createElement(
    "html",
    null,
    React.createElement("head", null),
    React.createElement(
      "body",
      { style: styles.main },
      React.createElement(
        "div",
        { style: styles.container },
        React.createElement(
          "div",
          { style: styles.logo },
          React.createElement("img", {
            width: 346,
            src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1714690065/main_dj2ypu.png",
          })
        ),
        React.createElement(
          "div",
          { style: styles.header },
          React.createElement(
            "div",
            { style: styles.headerContent },
            React.createElement(
              "h1",
              { style: styles.headerContentTitle },
              "Referral for Daily Care Support Services"
            )
          ),
          React.createElement(
            "div",
            { style: styles.headerImageContainer },
            React.createElement("img", {
              style: styles.headerImage,
              width: 340,
              src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715211850/stack-overflow-header_gj0ypu.png",
            })
          )
        ),
        React.createElement(
          "div",
          { style: styles.content },
          React.createElement(
            "h2",
            { style: styles.title },
            "Hey!! 🥰 You've received a referral from"
          ),
          React.createElement(
            "p",
            { style: styles.paragraph },
            "With Daily Care Services' extensive network of caregivers, we can connect you with the ideal person to meet your specific needs."
          ),
          React.createElement(
            "div",
            { style: container },
            React.createElement(
              "div",
              { style: section },
              React.createElement(
                "div",
                { style: ideas },
                React.createElement(
                  "div",
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "EMPLOYER AND ADDRESS:"
                  ),
                  React.createElement("p", { style: textCard }, employer)
                ),
                React.createElement(
                  "div",
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Dates (month/year)"
                  ),
                  React.createElement("p", { style: textCard }, dates)
                ),
                React.createElement(
                  "div",
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Position Held"
                  ),
                  React.createElement("p", { style: textCard }, position)
                ),
                React.createElement(
                  "div",
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Reason for leaving"
                  ),
                  React.createElement("p", { style: textCard }, reason)
                )
              ),
              React.createElement(
                "div",
                { style: ideas },
                React.createElement(
                  "div",
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Contacting employer"
                  ),
                  React.createElement("p", { style: textCard }, startingSalary)
                ),
                React.createElement(
                  "div",
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Ending Salary"
                  ),
                  React.createElement("p", { style: textCard }, endingSalary)
                ),
                React.createElement(
                  "div",
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "May we contact this employer?"
                  ),
                  React.createElement("p", { style: textCard }, contactEmployer)
                ),
                React.createElement(
                  "div",
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "If No, please indicate reason:"
                  ),
                  React.createElement("p", { style: textCard }, message)
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { style: container },
          React.createElement(
            "div",
            { style: section },
            React.createElement(
              "div",
              { style: ideas },
              React.createElement(
                "div",
                { style: yellowCard },
                React.createElement(
                  "b",
                  { style: subtitle },
                  "EMPLOYER AND ADDRESS:"
                ),
                React.createElement("p", { style: textCard }, employer)
              ),
              React.createElement(
                "div",
                { style: yellowCard },
                React.createElement(
                  "b",
                  { style: subtitle },
                  "Dates (month/year)"
                ),
                React.createElement("p", { style: textCard }, dates)
              ),
              React.createElement(
                "div",
                { style: yellowCard },
                React.createElement("b", { style: subtitle }, "Position Held"),
                React.createElement("p", { style: textCard }, position)
              ),
              React.createElement(
                "div",
                { style: yellowCard },
                React.createElement(
                  "b",
                  { style: subtitle },
                  "Reason for leaving"
                ),
                React.createElement("p", { style: textCard }, reason)
              )
            ),
            React.createElement(
              "div",
              { style: ideas },
              React.createElement(
                "div",
                { style: yellowCard },
                React.createElement(
                  "b",
                  { style: subtitle },
                  "Contacting employer"
                ),
                React.createElement("p", { style: textCard }, startingSalary)
              ),
              React.createElement(
                "div",
                { style: yellowCard },
                React.createElement("b", { style: subtitle }, "Ending Salary"),
                React.createElement("p", { style: textCard }, endingSalary)
              ),
              React.createElement(
                "div",
                { style: yellowCard },
                React.createElement(
                  "b",
                  { style: subtitle },
                  "May we contact this employer?"
                ),
                React.createElement("p", { style: textCard }, contactEmployer)
              ),
              React.createElement(
                "div",
                { style: yellowCard },
                React.createElement(
                  "b",
                  { style: subtitle },
                  "If No, please indicate reason:"
                ),
                React.createElement("p", { style: textCard }, message)
              )
            )
          )
        )
      ),

      React.createElement(
        "div",
        { style: container },
        React.createElement(
          "div",
          { style: section },
          React.createElement(
            "div",
            { style: ideas },
            React.createElement(
              "div",
              { style: yellowCard },
              React.createElement(
                "b",
                { style: subtitle },
                "EMPLOYER AND ADDRESS:"
              ),
              React.createElement("p", { style: textCard }, employer)
            ),
            React.createElement(
              "div",
              { style: yellowCard },
              React.createElement(
                "b",
                { style: subtitle },
                "Dates (month/year)"
              ),
              React.createElement("p", { style: textCard }, dates)
            ),
            React.createElement(
              "div",
              { style: yellowCard },
              React.createElement("b", { style: subtitle }, "Position Held"),
              React.createElement("p", { style: textCard }, position)
            ),
            React.createElement(
              "div",
              { style: yellowCard },
              React.createElement(
                "b",
                { style: subtitle },
                "Reason for leaving"
              ),
              React.createElement("p", { style: textCard }, reason)
            )
          ),
          React.createElement(
            "div",
            { style: ideas },
            React.createElement(
              "div",
              { style: yellowCard },
              React.createElement(
                "b",
                { style: subtitle },
                "Contacting employer"
              ),
              React.createElement("p", { style: textCard }, startingSalary)
            ),
            React.createElement(
              "div",
              { style: yellowCard },
              React.createElement("b", { style: subtitle }, "Ending Salary"),
              React.createElement("p", { style: textCard }, endingSalary)
            ),
            React.createElement(
              "div",
              { style: yellowCard },
              React.createElement(
                "b",
                { style: subtitle },
                "May we contact this employer?"
              ),
              React.createElement("p", { style: textCard }, contactEmployer)
            ),
            React.createElement(
              "div",
              { style: yellowCard },
              React.createElement(
                "b",
                { style: subtitle },
                "If No, please indicate reason:"
              ),
              React.createElement("p", { style: textCard }, message)
            )
          )
        )
      )
    ),

    React.createElement(
      "div",
      { style: styles.footer },
      React.createElement(
        "p",
        { style: styles.footerText },
        "You're receiving this email because your Stack Overflow activity triggered this tip or reminder."
      ),
      React.createElement(
        "p",
        { style: styles.footerAddress },
        "Stack Overflow | 110 William Street, 28th Floor, New York, NY 10038"
      ),
      React.createElement(
        "p",
        { style: styles.footerAddress },
        "© 2022 Stack Exchange, Inc."
      ),
      React.createElement(
        "a",
        { style: styles.footerHeart, href: "https://stackoverflow.com" },
        "Made with ❤ by Stack Overflow"
      )
    )
  );
};

// Convert React component to HTML string
const emailHtml = renderToStaticMarkup(
  React.createElement(ApplicationEmailTemplate)
);

console.log(emailHtml);
