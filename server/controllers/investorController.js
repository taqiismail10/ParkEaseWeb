import prisma from "../prismaClient.js";
import { investorValidator } from "../validators/investorValidator.js";

export const getAllInvestors = async (req, res) => {
  try {
    const investors = await prisma.investor.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(investors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch investors" });
  }
};

export const createInvestor = async (req, res) => {
  try {
    const data = await investorValidator.validate(req.body);

    const newInvestor = await prisma.investor.create({
      data: {
        name: data.name,
        email: data.email,
        description: data.description,
      },
    });

    res.status(201).json(newInvestor);
  } catch (error) {
    if (error.messages) {
      return res.status(422).json({ errors: error.messages });
    }
    res.status(500).json({ error: "Failed to create investor entry" });
  }
};
