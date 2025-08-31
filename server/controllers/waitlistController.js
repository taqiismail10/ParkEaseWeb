// controllers/waitlistController.js

import vine from "@vinejs/vine";
import prisma from "../DB/db.config.js";
import { waitlistValidator } from "../validations/validator.js";

import { sendEmail } from "../config/mailer.js";

const welcomeEmailTemplate = (name = "") => `
  <h1 style="color:#2c3e50;">Welcome to ParkEase 🚗</h1>
  <p>Hi ${name || "there"},</p>
  <p>Thank you for joining the <b>ParkEase Waitlist</b>! 🎉</p>
  <p>We’re building a smarter and easier way to find parking, and you’ll be among the <b>first to know</b> when we launch.</p>
  <p>In the meantime, stay tuned for updates—we’ll share exciting news and exclusive early access with our waitlist members.</p>
  <br/>
  <p>Best regards,</p>
  <p><b>The ParkEase Team</b></p>
`;

class waitlistController {
  static async getAllWaitlistEntries(req, res) {
    try {
      const waitlist = await prisma.waitlist.findMany({
        orderBy: { createdAt: "desc" },
      });
      res.json(waitlist);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch waitlist entries" });
    }
  }

  static async createWaitlistEntry(req, res) {
    try {
      const body = req.body;
      const validator = await vine.compile(waitlistValidator);
      const data = await validator.validate(body);

      console.log(data);

      const newEntry = await prisma.waitlist.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
        },
      });

      // respond immediately
      res.status(201).json(newEntry);

      // send welcome email asynchronously (do not block the response)
      const subject = "🎉 Welcome to ParkEase!";
      const html = welcomeEmailTemplate(data.name);

      // Fire-and-forget but log success/failure
      sendEmail(data.email, subject, html)
        .then((info) =>
          console.log(
            "Welcome email sent to",
            data.email,
            info?.messageId || ""
          )
        )
        .catch((err) =>
          console.error("Failed to send welcome email to", data.email, err)
        );

      // If you prefer to handle email failures more strictly, await sendEmail and handle errors above.
      // Or re-enable your email queue here instead of calling sendEmail directly.
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      if (error.messages) {
        return res.status(422).json({ errors: error.messages });
      }
      res.status(500).json({ error: "Failed to create waitlist entry" });
    }
  }

  static async sendEmailToWaitlist(req, res) {
    try {
      const { email } = req.query;
      const payload = {
        toEmail: email,
        subject: "🎉 Welcome to the ParkEase!",
        body: `
        <h1 style="color:#2c3e50;">Welcome to ParkEase 🚗</h1>
        <p>Hi there,</p>
        <p>Thank you for joining the <b>ParkEase Waitlist</b>! 🎉</p>
        <p>We’re building a smarter and easier way to find parking, and you’ll be among the <b>first to know</b> when we launch.</p>
        <p>In the meantime, stay tuned for updates—we’ll share exciting news and exclusive early access with our waitlist members.</p>
        <br/>
        <p>Best regards,</p>
        <p><b>The ParkEase Team</b></p>
      `,
      };

      await sendEmail(payload.toEmail, payload.subject, payload.body);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email to waitlist:", error);
      res.status(500).json({ error: "Failed to send email to waitlist" });
    }
  }
}

export default waitlistController;
