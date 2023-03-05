const mongoose = require("mongoose");
const nodemailer = require('nodemailer')

// mail send
const mailSend = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_URL,
        pass: process.env.PASS_URL,
      },
    });

    const mailOptions = {
      from:email,
      to: "nayemnesat@gmail.com",
      subject: `from portfolio website mail ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        
    res.status(500).json({
        status: "Fail",
        message: "mail not send please try again or direct mail on nayemnesat@gmail.com",
 
      });
      } else {
        console.log("Email sent: " + info.response);
        
    res.status(200).json({
        status: "success",
        message: "mail send success",
 
      });

      }
    });




  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  mailSend,
};
