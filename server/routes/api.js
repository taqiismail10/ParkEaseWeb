//routes/api.js

import express from "express";
import investorController from "../controllers/investorController.js";
import supportController from "../controllers/supportController.js";
import waitlistController from "../controllers/waitlistController.js";
const router = express.Router();

// Waitlist routes
router.get("/waitlist", waitlistController.getAllWaitlistEntries);
router.post("/waitlist", waitlistController.createWaitlistEntry);

// Support routes
router.post("/support", supportController.createSupportTicket);

// Investor routes
router.get("/investors", investorController.getAllInvestors);
router.post("/investors", investorController.createInvestor);
router.get("/send-email", waitlistController.sendEmailToWaitlist);

export default router;
