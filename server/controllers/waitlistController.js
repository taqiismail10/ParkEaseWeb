//controllers/waitlistController.js

import vine from "@vinejs/vine";
import prisma from "../DB/db.config.js";
import { waitlistValidator } from "../validations/validator.js";

import { sendEmail } from "../config/mailer.js";

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

      res.status(201).json(newEntry);
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
        subject: "🎉 Welcome to the ParkEase Waitlist!",
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
    } catch (error) {
      console.error("Error sending email to waitlist:", error);
      res.status(500).json({ error: "Failed to send email to waitlist" });
    }
  }
}

export default waitlistController;
