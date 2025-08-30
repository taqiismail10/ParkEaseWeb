//routes/api.js

import express from "express";
import investorController from "../controllers/investorController.js";
import waitlistController from "../controllers/waitlistController.js";

const router = express.Router();

// Waitlist routes
router.get("/waitlist", waitlistController.getAllWaitlistEntries);
router.post("/waitlist", waitlistController.createWaitlistEntry);

// Investor routes
router.get("/investors", investorController.getAllInvestors);
router.post("/investors", investorController.createInvestor);
router.post("/send-email", waitlistController.sendEmailToWaitlist);

export default router;
