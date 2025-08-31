import nodemailer from "nodemailer";

const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const secure = SMTP_PORT === 465; // true for port 465, false for STARTTLS (587)

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: SMTP_PORT,
  secure, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Optional - helps in some environments with self-signed certs
  tls: {
    rejectUnauthorized: false,
  },
});

// Optional: verify connection configuration on startup
transporter.verify((err, success) => {
  if (err) {
    console.error("Mailer verification failed:", err);
  } else {
    console.log("Mailer is ready to send messages");
  }
});

/**
 * Send an email.
 * @param {string} toEmail - recipient email
 * @param {string} subject - email subject
 * @param {string} html - HTML body
 * @returns {Promise<object>} nodemailer sendMail info
 */
export const sendEmail = async (toEmail, subject, html) => {
  const from = process.env.FROM_EMAIL || process.env.SMTP_USER;

  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    throw new Error(
      "SMTP configuration is incomplete. Check SMTP_HOST, SMTP_USER and SMTP_PASS."
    );
  }

  const info = await transporter.sendMail({
    from,
    to: toEmail,
    subject,
    html,
  });

  return info;
};
