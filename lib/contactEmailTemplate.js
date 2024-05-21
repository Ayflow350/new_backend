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

// React functional component for the email
const ContactEmailTemplate = ({ firstName, address, email, message }) => {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(Preview, null, "Stack Overflow tips for searching"),
    React.createElement(
      Body,
      { style: styles.main },
      React.createElement(
        Container,
        { style: styles.container },
        React.createElement(
          Section,
          { style: styles.logo },
          React.createElement(Img, {
            width: 346,
            src: `https://res.cloudinary.com/drczkfgqp/image/upload/v1714690065/main_dj2ypu.png`,
          })
        ),
        React.createElement(
          Section,
          { style: styles.header },
          React.createElement(
            Row,
            null,
            React.createElement(
              Column,
              { style: styles.headerContent },
              React.createElement(
                Heading,
                { style: styles.headerContentTitle },
                "Inquiry about Daily Care Support Services"
              )
            ),
            React.createElement(
              Column,
              { style: styles.headerImageContainer },
              React.createElement(Img, {
                style: styles.headerImage,
                width: 340,
                src: `https://res.cloudinary.com/drczkfgqp/image/upload/v1715211850/stack-overflow-header_gj0ypu.png`,
              })
            )
          )
        ),
        React.createElement(
          Section,
          { style: styles.content },
          React.createElement(
            Heading,
            { as: "h2", style: styles.title },
            `Hey!! 🥰 ${firstName} Contacted Daily Care Support Services`
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            "With more than 18 million questions, it's possible that someone has already provided a solution to the problem you're facing."
          ),
          React.createElement(Hr, { style: styles.divider }),
          React.createElement(
            Text,
            { style: styles.paragraph },
            React.createElement("b", { style: styles.subtitle }, "Full Name: "),
            firstName
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            React.createElement(
              "b",
              { style: styles.subtitle },
              "Email Address: "
            ),
            email
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            React.createElement("b", { style: styles.subtitle }, "Address: "),
            address
          ),
          React.createElement(
            Heading,
            { as: "h2", style: styles.subtitle },
            "Messages"
          ),
          React.createElement(Text, { style: styles.paragraph }, message),
          React.createElement(
            Text,
            { style: styles.paragraph },
            "The more information you can put in the search bar, the more likely you will be to either find the answer you need or feel confident that no one else has asked the question before."
          )
        ),
        React.createElement(
          Section,
          { style: styles.footer },
          React.createElement(
            Text,
            { style: styles.footerText },
            "You're receiving this email because your Stack Overflow activity triggered this tip or reminder."
          ),
          React.createElement(
            Link,
            { href: "/", style: styles.footerLink },
            "Unsubscribe from emails like this"
          ),
          React.createElement(
            Link,
            { href: "/", style: styles.footerLink },
            "Edit email settings"
          ),
          React.createElement(
            Link,
            { href: "/", style: styles.footerLink },
            "Contact us"
          ),
          React.createElement(
            Link,
            { href: "/", style: styles.footerLink },
            "Privacy"
          ),
          React.createElement(Hr, { style: styles.footerDivider }),
          React.createElement(
            Text,
            { style: styles.footerAddress },
            React.createElement("strong", null, "Stack Overflow"),
            ", 110 William Street, 28th Floor, New York, NY 10038"
          ),
          React.createElement(Text, { style: styles.footerHeart }, "<3")
        )
      )
    )
  );
};

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
  footerDivider: {
    margin: "32px 0",
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

module.exports = ContactEmailTemplate;
