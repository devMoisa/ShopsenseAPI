import express from "express";
import { EmailController } from "../controllers/EmailController";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    await EmailController.captureEmail(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.get("/list", async (req, res, next) => {
  try {
    await EmailController.listEmails(req, res);
  } catch (error) {
    next(error);
  }
});

router.post("/sendMessage", async (req, res, next) => {
  try {
    await EmailController.sendEmail(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
