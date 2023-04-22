import express from "express";
import {
  contact,
  courseRequest,
  getDashboardStats,
} from "../controllers/otherControllers.js";

const router = express();

router.post("/contact", contact);

router.post("/courserequest", courseRequest);

router.get("/admin/stats", getDashboardStats);

export default router;
