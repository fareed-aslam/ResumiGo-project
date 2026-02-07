import express from "express";
import { authUser } from "../middlewares/authUser.middleware.js";
import {
  createResume,
  deleteResume,
  getResumeById,
  getUserResumes,
  updateResume,
} from "../controllers/resume.controller.js";
import { uploadResumeImages } from "../controllers/uploadImgs.controller.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router();

router.route("/").post(authUser, createResume);
router.route("/").get(authUser, getUserResumes);
router.route("/:id").get(authUser, getResumeById);

router.route("/:id").put(authUser, updateResume);
router
  .route("/:id/upload-images")
  .put(
    authUser,
    upload.fields([{ name: "thumbnail" }, { name: "profileImage" }]),
    uploadResumeImages
  );

router.route("/:id").delete(authUser, deleteResume);

export default router;
