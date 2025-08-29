//controllers/investorController.js

import prisma from "../DB/db.config.js";
import { investorValidator } from "../validations/validator.js";

class investorController {
  static async getAllInvestors(req, res) {
    try {
      const investors = await prisma.investor.findMany({
        orderBy: { createdAt: "desc" },
      });
      res.json(investors);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch investors" });
    }
  }

  static async createInvestor(req, res) {
    try {
      const body = req.body;
      const validator = await vine.compile(investorValidator);
      const data = await validator.validate(body);

      console.log(data);

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
  }
}

export default investorController;
