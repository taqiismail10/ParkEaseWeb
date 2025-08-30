import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Set to true if you use port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Only for testing; remove in production
  },
  debug: true,
});

transporter.verify((err, success) => {
  if (err) console.error("SMTP verify failed", err);
  else console.log("SMTP server is ready to take messages");
});

export const sendEmail = async (toMail, subject, body) => {
  try {
    const info = await transporter.sendMail({
      from: '"ParkEase Team" <parkease.official.4@gmail.com>',
      to: toMail,
      subject: subject,
      html: body,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
