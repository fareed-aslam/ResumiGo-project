import { registerHandler } from "../../../src/controllers/user.controller.js";
import { connectDB } from "../../../src/data/connectDb.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }
  await connectDB();
  return registerHandler(req, res);
}
