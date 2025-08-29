import prisma from "../prismaClient.js";
import { waitlistValidator } from "../validators/waitlistValidator.js";

export const getAllWaitlistEntries = async (req, res) => {
  try {
    const waitlist = await prisma.waitlist.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(waitlist);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch waitlist entries" });
  }
};

export const createWaitlistEntry = async (req, res) => {
  try {
    const data = await waitlistValidator.validate(req.body);

    const newEntry = await prisma.waitlist.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    });

    res.status(201).json(newEntry);
  } catch (error) {
    if (error.messages) {
      return res.status(422).json({ errors: error.messages });
    }
    res.status(500).json({ error: "Failed to create waitlist entry" });
  }
};
