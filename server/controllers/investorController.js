// controllers/investorController.js

import vine from "@vinejs/vine";
import prisma from "../DB/db.config.js";
import { investorValidator } from "../validations/validator.js";

import { sendEmail } from "../config/mailer.js";

const investorAckTemplate = (name = "") => `
  <h1 style="color:#2c3e50;">Thanks for reaching out to ParkEase</h1>
  <p>Hi ${name || "there"},</p>
  <p>Thank you for contacting ParkEase regarding investor inquiries. We have received your submission and our team will review it shortly.</p>
  <p>We appreciate your interest and will get back to you with next steps if appropriate.</p>
  <br/>
  <p>Best regards,</p>
  <p><b>The ParkEase Team</b></p>
`;

class investorController {
  static async getAllInvestors(req, res) {
    try {
      const investors = await prisma.investor.findMany({
        orderBy: { createdAt: "desc" },
      });
      res.json(investors);
    } catch (error) {
      console.error("Error fetching investors:", error);
      res.status(500).json({ error: "Failed to fetch investors" });
    }
  }

  static async createInvestor(req, res) {
    try {
      const body = req.body;
      const validator = await vine.compile(investorValidator);
      const data = await validator.validate(body);

      console.log("Validated investor payload:", data);

      const newInvestor = await prisma.investor.create({
        data: {
          name: data.name,
          email: data.email,
          description: data.description,
        },
      });

      // respond immediately to the client
      res.status(201).json(newInvestor);

      // send acknowledgement email asynchronously (fire-and-forget)
      const subject = "Thanks for contacting ParkEase";
      const html = investorAckTemplate(data.name);

      sendEmail(data.email, subject, html)
        .then((info) =>
          console.log(
            "Investor acknowledgement email sent to",
            data.email,
            info?.messageId || ""
          )
        )
        .catch((err) =>
          console.error(
            "Failed to send investor acknowledgement email to",
            data.email,
            err
          )
        );

      // If you'd rather not be fire-and-forget, await sendEmail above and return errors accordingly.
    } catch (error) {
      console.error("Error creating investor entry:", error);
      if (error.messages) {
        return res.status(422).json({ errors: error.messages });
      }
      res.status(500).json({ error: "Failed to create investor entry" });
    }
  }
}

export default investorController;
