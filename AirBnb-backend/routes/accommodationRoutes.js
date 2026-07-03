import express from "express";
import {
  createAccommodation,
  getAccommodations,
  getMyListings,
  updateAccommodation,
  deleteAccommodation,
} from "../controllers/accommodationController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    upload.array("images", 10),
    createAccommodation
);

router.get(
    "/",
    getAccommodations
);

router.get(
  "/my-listings",
  authMiddleware,
  getMyListings
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

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    upload.array("images", 10),
    createAccommodation
);

export default router;