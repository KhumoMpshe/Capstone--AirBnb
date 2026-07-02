import express from "express";
import {
  registerUser,
  loginUser,
  hostSignup,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/signup-host", hostSignup);
router.post("/login", loginUser);

export default router;