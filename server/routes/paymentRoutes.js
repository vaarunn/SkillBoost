import { Router } from "express";
import {
  cancelSubscription,
  createSubscription,
  getRazorPayKey,
  paymentVerification,
} from "../controllers/paymentController.js";
import { isAuthenticateUser } from "../middlewares/auth.js";

const router = Router();

//buy subscription"
router.get("/subscribe", isAuthenticateUser, createSubscription);

router.get("/getRazorPayKey", getRazorPayKey);

router.post("/paymentVerification", isAuthenticateUser, paymentVerification);

router.delete("/cancelSubscription", isAuthenticateUser, cancelSubscription);

export default router;
