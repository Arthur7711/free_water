import express from "express";
import auth from "../middlewares/auth";
import {
  createLocation,
  deleteLocationById,
  getLocationById,
  getLocations,
  updateLocationById,
} from "../controllers/location.controller";

const router = express.Router();

router.post("/", auth, createLocation);
router.get("/", getLocations);
router.get("/:id", getLocationById);
router.put("/:id", auth, updateLocationById);
router.delete("/:id", auth, deleteLocationById);

export default router;