import { getUserProfile } from "../../../src/controllers/user.controller.js";
import { authUser } from "../../../src/middlewares/authUser.middleware.js";
import { connectDB } from "../../../src/data/connectDb.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }
  await connectDB();
  return authUser(req, res, () => getUserProfile(req, res));
}
