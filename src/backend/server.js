const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// TEST ROUTE GET
app.get("/getinfo", (req, res) => {
  res.send("Hello World");
});

const transporter = nodemailer.createTransport({
  service: "gmail", // e.g., 'gmail' or use your SMTP settings
  auth: {
    type: "OAuth2",
    user: "andresrafamt99@gmail.com", // Your Gmail address
    clientId:
      "1080498579441-71aj9mbukj95tv7m7d6f7jn9ihidn3en.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//047HXsjvbbjKnCgYIARAAGAQSNgF-L9IriX-3qA22hNfgZ_z4zRa8J37RPaBsdDgDZTUscYMpibGyU9Ht144D5z37iI3xzBjXfw",
    accessToken:
      "ya29.a0AfB_byDDEfiFVmgmskP12GjeMUPGxR81G9fwcrsrzhm4Gu3LGY2kKmX_EmcYasHj4M_0A98l4i4GP7nSgyPi0QKe3ju4IOOmQuImLZC-pfZIn_18rN2_ob1H9HlqQVefxZ_pbzXCBvsbYcTTQwd-rLy1ftrGYbuEV6UHaCgYKAZcSARESFQGOcNnCNu8GoA6NkaAXleasgFzcug0171", // Optional, can be left blank
  },
});

app.post("/submit", (req, res) => {
  const { email, name, subject, message } = req.body;
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
