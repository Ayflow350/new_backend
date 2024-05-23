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

const ApplicationEmailTemplate = ({
  address,
  agree,
  applicationDate,
  applyPosition,
  city,
  collegeAreaOfStudy,
  collegeDateAttended,
  collegeDiploma,
  contactAtWork,
  contactEmployer,
  correspondenceAddress,
  dates,
  eligibleToWork,
  email,
  employer,
  endingSalary,
  firstName,
  fullName,
  highSchoolAreaOfStudy,
  highSchoolDateAttended,
  highSchoolDiploma,
  highSchoolNameAndAddress,
  homeAddress,
  homePhone,
  lastName,
  message,
  mobile,
  mrMrs,
  position,
  professionalTrainings,
  reason,
  signatureImage,
  startingSalary,
  state,
  workPermitOrVisa,
  zipCode,
}) => {
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
                "Referral for Daily Care Support Services"
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
            `Hey!! 🥰 ${firstName}  You've received a workHistory form from`
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            "With Daily Care Services' extensive network of caregivers, we can connect you with the ideal person to meet your specific needs."
          ),
          React.createElement(
            Container,
            { style: container },
            React.createElement(
              Section,
              { style: section },
              React.createElement(
                Column,
                { style: ideas },
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "Mr/Mrs"),
                  React.createElement(Text, { style: textCard }, mrMrs)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "FIRSTNAME"),
                  React.createElement(Text, { style: textCard }, firstName)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "LASTNAME:"),
                  React.createElement(Text, { style: textCard }, lastName)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Home Address:"
                  ),
                  React.createElement(Text, { style: textCard }, homeAddress)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Correspondence Address"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    correspondenceAddress
                  )
                )
              ),
              React.createElement(
                Column,
                { style: ideas },
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "HOME PHONE *"),
                  React.createElement(Text, { style: textCard }, homePhone)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "HOME PHONE *"),
                  React.createElement(Text, { style: textCard }, homePhone)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "May we contact you at work?"
                  ),
                  React.createElement(Text, { style: textCard }, contactAtWork)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Are you eligible to work in the U.S?"
                  ),
                  React.createElement(Text, { style: textCard }, eligibleToWork)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Do you have a work permit or a right to work Visa?"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    workPermitOrVisa
                  )
                )
              )
            )
          )
        ),

        React.createElement(
          Section,
          { style: styles.content },
          React.createElement(
            Heading,
            { as: "h2", style: styles.title },
            "Hey!! 🥰 You've received a workHistory form from"
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            "With Daily Care Services' extensive network of caregivers, we can connect you with the ideal person to meet your specific needs."
          ),
          React.createElement(
            Container,
            { style: container },
            React.createElement(
              Section,
              { style: section },
              React.createElement(
                Column,
                { style: ideas },
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "DATE OF APPLICATION *"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    applicationDate
                  )
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Email Address *"
                  ),
                  React.createElement(Text, { style: textCard }, email)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "FULL NAME *"),
                  React.createElement(Text, { style: textCard }, fullName)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "HOME PHONE *"),
                  React.createElement(Text, { style: textCard }, homePhone)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "Mobile Phone"),
                  React.createElement(Text, { style: textCard }, mobile)
                )
              ),
              React.createElement(
                Column,
                { style: ideas },
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Contacting employer"
                  ),
                  React.createElement(Text, { style: textCard }, Yes)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "Address *"),
                  React.createElement(Text, { style: textCard }, address)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "City *"),
                  React.createElement(Text, { style: textCard }, city)
                ),
                // CHANGES
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Position Applied For *"
                  ),
                  React.createElement(Text, { style: textCard }, position)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "State"),
                  React.createElement(Text, { style: textCard }, state)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement("b", { style: subtitle }, "ZIP CODE"),
                  React.createElement(Text, { style: textCard }, zipCode)
                )
              )
            )
          )
        ),

        React.createElement(
          Section,
          { style: styles.content },
          React.createElement(
            Heading,
            { as: "h2", style: styles.title },
            "Hey!! 🥰 You've received a EDUCATION AND TRAINING form from"
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            "With Daily Care Services' extensive network of caregivers, we can connect you with the ideal person to meet your specific needs."
          ),
          React.createElement(
            Container,
            { style: container },
            React.createElement(
              Section,
              { style: section },
              React.createElement(
                Column,
                { style: ideas },
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "HIGH SCHOOL NAME AND ADDRESS*"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    highSchoolNameAndAddress
                  )
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Date Attended"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    highSchoolDateAttended
                  )
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Area of Study"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    highSchoolAreaOfStudy
                  )
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Diploma Received?"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    highSchoolDiploma
                  )
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Colleges/ Training Schools*"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    collegeAreaOfStudy
                  )
                )
              ),
              React.createElement(
                Column,
                { style: ideas },
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Date Attended"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    collegeDateAttended
                  )
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Area of Study"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    collegeAreaOfStudy
                  )
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Diploma Received?"
                  ),
                  React.createElement(Text, { style: textCard }, collegeDiploma)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "If No, please indicate reason:"
                  ),
                  React.createElement(Text, { style: textCard }, reason)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Professional trainings/ qualifications"
                  ),
                  React.createElement(
                    Text,
                    { style: textCard },
                    professionalTrainings
                  )
                )
              )
            )
          )
        ),

        React.createElement(
          Section,
          { style: styles.content },
          React.createElement(
            Heading,
            { as: "h2", style: styles.title },
            "Hey!! 🥰 You've received a workHistory form from"
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            "With Daily Care Services' extensive network of caregivers, we can connect you with the ideal person to meet your specific needs."
          ),
          React.createElement(
            Container,
            { style: container },
            React.createElement(
              Section,
              { style: section },
              React.createElement(
                Column,
                { style: ideas },
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "EMPLOYER AND ADDRESS:"
                  ),
                  React.createElement(Text, { style: textCard }, employer)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Dates (month/year)"
                  ),
                  React.createElement(Text, { style: textCard }, mrMrs)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Position Held"
                  ),
                  React.createElement(Text, { style: textCard }, position)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Reason for leaving"
                  ),
                  React.createElement(Text, { style: textCard }, mrMrs)
                )
              ),
              React.createElement(
                Column,
                { style: ideas },
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Contacting employer"
                  ),
                  React.createElement(Text, { style: textCard }, No)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "Ending Salary"
                  ),
                  React.createElement(Text, { style: textCard }, endingSalary)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "May we contact this employer?"
                  ),
                  React.createElement(Text, { style: textCard }, Yes)
                ),
                React.createElement(
                  Section,
                  { style: yellowCard },
                  React.createElement(
                    "b",
                    { style: subtitle },
                    "If No, please indicate reason:"
                  ),
                  React.createElement(Text, { style: textCard }, message)
                )
              )
            )
          ),

          React.createElement(
            Section,
            { style: styles.content },
            React.createElement(
              Heading,
              { as: "h2", style: styles.title },
              "Conflict of Interest"
            ),
            React.createElement(
              Text,
              { style: styles.paragraph },
              `I ${firstName}  acknowledge that I have read the company policy statement concerning conflict of interest acknowledge that I have read the company policy statement concerning conflict of interest. I hereby declare that neither I, nor any other business to which I may be associated, nor, to the best of my knowledge, any member of my immediate family has any conflict between our personal affairs or interests and the proper performance of my responsibilities for the company that would constitute a violation of that company policy. If I terminate my employment with Daily Care Support Services, I will not work for any patient I have worked for with Daily Care Support Services for a period of two years or pay a fine of $2500.00. All assignments are considered Per Diem, there are no full or part time positions with Daily Care Support Services, Inc. due to the demands of the patients, and change in the patients' condition and needs. Furthermore, I declare that during my employment, I shall continue to maintain my affairs in accordance with the requirements of said policy.`
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
          ),

          React.createElement(Hr, { style: styles.divider }),
          React.createElement(
            Heading,
            { as: "h2", style: styles.title },
            "Declaration of Agreement"
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            `I ${firstName}  agree that except at the request and for the benefit of Daily Care Support Services, Inc I will not disclose to anyone or use for my own purposes any of Daily Care Support Services, Inc confidential or proprietary information, either during or after my employment. I understand and agree that Daily Care Support Services, Inc bidding, costs, pricing and marketing information and techniques, customer names and information, and employee name and information are confidential and proprietary to Daily Care Support Services, In I certify that this application contains no willful misrepresentation or falsifications and that this information given by me is true and complete to the best of my knowledge and belief. I authorized Daily Care Support Services, Inc to contact all sources to verify the information on this application. I understand that any falsification, misrepresentation, or fraudulent information provided by me in connection with my application for employment is sufficient grounds for withdrawal of an employment offer or immediate discharge I authorized and requested my former employers, references, and educational institutions which have information about me, to give Daily Care Support Services, Inc all information and opinions about me in their possession and which may lawfully be disclosed. I hereby waive written notice of such release of information and opinions, and release such former employers, references, and educational institutions from any liability or claim relating to such release of information and opinions. I also authorized and request federal, state, and local governmental agencies to release Daily Care Support Services, Inc any information requested, concerning any criminal convictions on my record. A photocopy of this signed authorization and waiver shall be valid as an original.`
          ),
          React.createElement(
            Column,
            { style: styles.headerImageContainer },
            React.createElement(Img, {
              style: styles.headerImage,
              width: 340,
              src: signatureImage,
            })
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
    ),

    React.createElement(
      Column,
      { style: styles.headerImageContainer },
      React.createElement(Img, {
        style: styles.headerImage,
        width: 340,
        src: signatureImage,
      })
    )
  );
};
module.exports = ApplicationEmailTemplate;

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
