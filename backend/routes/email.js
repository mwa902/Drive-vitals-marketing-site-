import express from "express";
import { createEmail } from "../controllers/email.js";

const router = express.Router();

router.post("/", createEmail);

export default router;