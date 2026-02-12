import { uploadResumeImages } from "../../../src/controllers/uploadImgs.controller.js";
import { authUser } from "../../../src/middlewares/authUser.middleware.js";
import { connectDB } from "../../../src/data/connectDb.js";

export const config = {
  api: {
    bodyParser: false, // Required for file uploads
  },
};

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "PUT") {
    // /resume/:id/upload-images
    const idMatch = req.url.match(/^\/(.+)\/upload-images$/);
    if (idMatch) {
      req.params = { id: idMatch[1] };
      return authUser(req, res, () => uploadResumeImages(req, res));
    }
  }
  res.status(404).json({ success: false, message: "Not found" });
}
