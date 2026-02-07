import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { upload } from "../middlewares/upload.middleware.js";
import { Resume } from "../models/resume.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadResumeImages = async (req, res) => {
  try {
    // Expect req.files to be populated by multer at the route level
    // Debug logs for diagnostics
    try {
      console.log("UPLOAD DEBUG => params.id:", req.params?.id);
      console.log("UPLOAD DEBUG => userId:", req.user?._id);
      console.log("UPLOAD DEBUG => files keys:", Object.keys(req.files || {}));
      console.log(
        "UPLOAD DEBUG => thumbnail len:",
        req.files?.thumbnail?.length || 0
      );
      console.log(
        "UPLOAD DEBUG => profileImage len:",
        req.files?.profileImage?.length || 0
      );
      if (req.files?.thumbnail?.[0]) {
        console.log(
          "UPLOAD DEBUG => thumbnail mimetype:",
          req.files.thumbnail[0].mimetype,
          "orig:",
          req.files.thumbnail[0].originalname
        );
      }
      if (req.files?.profileImage?.[0]) {
        console.log(
          "UPLOAD DEBUG => profileImage mimetype:",
          req.files.profileImage[0].mimetype,
          "orig:",
          req.files.profileImage[0].originalname
        );
      }
    } catch (e) {
      console.log("UPLOAD DEBUG => log error:", e?.message);
    }

    const resumeId = req.params.id;
    const resume = await Resume.findOne({
      _id: resumeId,
      userId: req.user._id,
    });

    if (!resume) {
      return res
        .status(404)
        .json({ success: false, message: "Resume is not Found" });
    }
    const uploadsFolder = path.join(__dirname, "..", "..", "public", "uploads");
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const newThumbnail = req.files?.thumbnail?.[0];
    const newProfileImage = req.files?.profileImage?.[0];

    if (newThumbnail) {
      if (resume.thumbnailLink) {
        const oldThumbnail = path.join(
          uploadsFolder,
          path.basename(resume.thumbnailLink)
        );
        if (fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
      }
      resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
    }

    if (newProfileImage) {
      if (!resume.profileInfo) {
        resume.profileInfo = {};
      }
      if (resume.profileInfo?.profilePreviewUrl) {
        const oldProfile = path.join(
          uploadsFolder,
          path.basename(resume.profileInfo.profilePreviewUrl)
        );
        if (fs.existsSync(oldProfile)) fs.unlinkSync(oldProfile);
      }
      resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
    }

    await resume.save();
    res.status(200).json({
      success: true,
      message: "image uploaded successfully",
      thumbnailLink: resume.thumbnailLink,
      profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
    });
  } catch (error) {
    console.log("Error uploading images", error);
    res.status(500).json({
      success: false,
      message: "Failed to upload images",
      error: error.message,
    });
  }
};
