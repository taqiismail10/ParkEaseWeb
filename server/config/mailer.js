import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async (toMail, subject, body) => {
  const info = await transporter.sendMail({
    from: '"ParkEase Team" <parkease.official.4@gmail.com>',
    to: toMail,
    subject: subject,
    // text: "Hello world?", // plain‑text body
    html: body, //"<b>Hello world?</b>", HTML body
  });
};
