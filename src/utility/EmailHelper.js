import nodemailer from "nodemailer";

export default SendEmail = async (receivedEmail, emailSubject, emailBody) => {
  const transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "MERN Ecommerce <noreply@gmail.com>",
    to: receivedEmail,
    subject: emailSubject,
    text: emailBody,
  };

  return await transporter.sendMail(mailOptions);
};
