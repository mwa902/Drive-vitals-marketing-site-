import express from "express";
import { createDemo } from "../controllers/demo.js";

const router = express.Router();

router.post("/", createDemo);

export default router;
