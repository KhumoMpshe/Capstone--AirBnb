import express from "express";
import {
  createAccommodation,
  getAccommodations,
  updateAccommodation,
  deleteAccommodation,
} from "../controllers/accommodationController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    createAccommodation
);

router.get(
    "/",
    getAccommodations
);

router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    updateAccommodation
);

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteAccommodation
);

export default router;