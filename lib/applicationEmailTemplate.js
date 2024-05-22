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
  applicationDate,
  email,
  fullName,
  homePhone,
  mobile,
  address,
  city,
  state,
  zipCode,
  position,
  firstName,
  lastName,
  homeAddress,
  correspondenceAddress,
  workTelephone,
  mrMrs,
  eligibleToWork,
  workPermitOrVisa,
  highSchoolNameAndAddress,
  highSchoolDateAttended,
  highSchoolAreaOfStudy,
  highSchoolDiploma,
  collegeDateAttended,
  collegeAreaOfStudy,
  collegeDiploma,
  collegesTrainingSchools,
  professionalTrainings,
}) =>
  React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(Preview, null, "Job Application and Referral Details"),
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
            src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1714690065/main_dj2ypu.png",
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
                fullName
              ),
              React.createElement(
                Heading,
                { style: styles.headerContentTitle },
                "1st Application form"
              )
            ),
            React.createElement(
              Column,
              { style: styles.headerImageContainer },
              React.createElement(Img, {
                style: styles.headerImage,
                width: 340,
                src: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715211850/stack-overflow-header_gj0ypu.png",
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
            "Hey!! 🥰 You just received a Job Application from ",
            fullName
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            "With more than 18 million questions, it's possible that someone has already provided a solution to the problem you're facing."
          ),
          React.createElement(Hr, { style: styles.divider }),
          React.createElement(
            Section,
            { style: styles.content },
            React.createElement(
              Text,
              { style: styles.paragraph },
              React.createElement("strong", null, "Date of Application:"),
              " ",
              applicationDate
            ),
            React.createElement(
              Text,
              { style: styles.paragraph },
              React.createElement("strong", null, "Full Name:"),
              " ",
              fullName
            ),
            React.createElement(
              Text,
              { style: styles.paragraph },
              React.createElement("strong", null, "Email Address:"),
              " ",
              email
            ),
            React.createElement(
              Text,
              { style: styles.paragraph },
              React.createElement("strong", null, "Home Phone:"),
              " ",
              homePhone
            ),
            React.createElement(
              Text,
              { style: styles.paragraph },
              React.createElement("strong", null, "Mobile Phone:"),
              " ",
              mobile
            ),
            React.createElement(
              Text,
              { style: styles.paragraph },
              React.createElement("strong", null, "Address:"),
              " ",
              address,
              ", ",
              city,
              ", ",
              state,
              ", ",
              zipCode
            ),
            React.createElement(
              Text,
              { style: styles.paragraph },
              React.createElement("strong", null, "Position Applied For:"),
              " ",
              position
            )
          )
        ),
        React.createElement(
          Section,
          { style: styles.content },
          React.createElement(
            Heading,
            { as: "h2", style: styles.title },
            "Referral for Daily Care Support Services"
          ),
          React.createElement(
            Text,
            { style: styles.paragraph },
            "With Daily Care Services' extensive network of caregivers, we can connect you with the ideal person to meet your specific needs."
          ),
          React.createElement(Hr, { style: styles.divider }),
          React.createElement(
            Container,
            { style: styles.container },
            React.createElement(
              Section,
              { style: styles.section },
              React.createElement(
                Row,
                null,
                React.createElement(
                  Column,
                  { style: styles.ideas },
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "First Name:"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      firstName
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Last Name:"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      lastName
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Home Address:"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      homeAddress
                    )
                  )
                ),
                React.createElement(
                  Column,
                  { style: styles.ideas },
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Correspondence Address:"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      correspondenceAddress
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Home Phone:"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      homePhone
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Work Telephone:"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      workTelephone
                    )
                  )
                )
              )
            ),
            React.createElement(
              Section,
              { style: styles.section },
              React.createElement(
                Row,
                null,
                React.createElement(
                  Column,
                  { style: styles.ideas },
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Mr/Mrs:"
                    ),
                    React.createElement(Text, { style: styles.textCard }, mrMrs)
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Are you eligible to work in the U.S?"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      eligibleToWork
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Do you have a work permit or a right to work Visa?"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      workPermitOrVisa
                    )
                  )
                )
              )
            ),
            React.createElement(
              Section,
              { style: styles.section },
              React.createElement(
                Row,
                null,
                React.createElement(
                  Column,
                  { style: styles.ideas },
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "HIGH SCHOOL Info"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      highSchoolNameAndAddress
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Date Attended"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      highSchoolDateAttended
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Area of Study:"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      highSchoolAreaOfStudy
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Diploma Received?"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      highSchoolDiploma
                    )
                  )
                ),
                React.createElement(
                  Column,
                  { style: styles.ideas },
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "COLLEGE Info"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      collegeDateAttended
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Area of Study:"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      collegeAreaOfStudy
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "Diploma Received?"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      collegeDiploma
                    )
                  )
                )
              )
            ),
            React.createElement(
              Section,
              { style: styles.section },
              React.createElement(
                Row,
                null,
                React.createElement(
                  Column,
                  { style: styles.ideas },
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "COLLEGES, TRAINING SCHOOLS, Etc."
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      collegesTrainingSchools
                    )
                  ),
                  React.createElement(
                    Section,
                    { style: styles.yellowCard },
                    React.createElement(
                      "b",
                      { style: styles.subtitle },
                      "PROFESSIONAL TRAININGS"
                    ),
                    React.createElement(
                      Text,
                      { style: styles.textCard },
                      professionalTrainings
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );

const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "800px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  logo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  header: {
    borderBottom: "2px solid #eeeeee",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  headerContent: {
    textAlign: "left",
  },
  headerContentTitle: {
    fontSize: "24px",
    margin: "0",
    color: "#333333",
  },
  headerImageContainer: {
    textAlign: "right",
  },
  headerImage: {
    borderRadius: "8px",
  },
  content: {
    padding: "20px 0",
  },
  title: {
    fontSize: "20px",
    color: "#333333",
  },
  paragraph: {
    fontSize: "16px",
    color: "#666666",
    margin: "10px 0",
  },
  divider: {
    margin: "20px 0",
  },
  section: {
    margin: "20px 0",
  },
  ideas: {
    textAlign: "left",
  },
  yellowCard: {
    backgroundColor: "#fffbe6",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#333333",
    margin: "0 0 5px 0",
    fontSize: "14px",
  },
  textCard: {
    color: "#666666",
    fontSize: "14px",
  },
};

module.exports = ApplicationEmailTemplate;
