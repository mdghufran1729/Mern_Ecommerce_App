import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authcontroller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//router register
router.post("/register", registerController);

//Login router post
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
