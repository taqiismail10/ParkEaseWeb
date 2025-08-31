import vine from "@vinejs/vine";
import prisma from "../DB/db.config.js";
import { supportValidator } from "../validations/validator.js";
import { sendEmail } from "../config/mailer.js";

const supportAckTemplate = (name = "") => `
  <h1 style="color:#2c3e50;">Support Request Received</h1>
  <p>Hi ${name || "there"},</p>
  <p>Thank you for contacting ParkEase support. We have received your message and will respond within 24 hours.</p>
  <p>Our team is reviewing your request and will provide assistance shortly.</p>
  <br/>
  <p>Best regards,</p>
  <p><b>ParkEase Support Team</b></p>
`;

class supportController {
  static async createSupportTicket(req, res) {
    try {
      const body = req.body;
      const validator = await vine.compile(supportValidator);
      const data = await validator.validate(body);

      const newTicket = await prisma.support.create({
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      });

      res.status(201).json(newTicket);

      const subject = "Support Request Received - ParkEase";
      const html = supportAckTemplate(data.name);

      sendEmail(data.email, subject, html)
        .then((info) => console.log("Support ack email sent to", data.email))
        .catch((err) => console.error("Failed to send support ack email", err));
    } catch (error) {
      console.error("Error creating support ticket:", error);
      if (error.messages) {
        return res.status(422).json({ errors: error.messages });
      }
      res.status(500).json({ error: "Failed to create support ticket" });
    }
  }
}

export default supportController;
