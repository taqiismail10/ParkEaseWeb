//controllers/waitlistController.js

import vine from "@vinejs/vine";
import prisma from "../DB/db.config.js";
import { waitlistValidator } from "../validations/validator.js";

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
}

export default waitlistController;
