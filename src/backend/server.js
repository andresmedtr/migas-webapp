const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  const { email, name, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail", // e.g., 'gmail' or use your SMTP settings
    host: "smtp.gmail.com",
    port: 465, // SSL port
    secure: true,
    auth: {
      user: "anmedevelops@gmail.com",
      pass: "11..Armt",
    },
  });
  // Email data
  const mailOptions = {
    from: `${email}`,
    to: "andresrafamt99@gmail.com",
    subject: `${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email" + error.message);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
