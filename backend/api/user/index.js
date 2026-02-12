import {
  registerHandler,
  loginHandler,
  getUserProfile,
} from "../../src/controllers/user.controller.js";
import { authUser } from "../../src/middlewares/authUser.middleware.js";
import { connectDB } from "../../src/data/connectDb.js";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST" && req.url === "/register") {
    return registerHandler(req, res);
  }
  if (req.method === "POST" && req.url === "/login") {
    return loginHandler(req, res);
  }
  if (req.method === "GET" && req.url === "/profile") {
    return authUser(req, res, () => getUserProfile(req, res));
  }
  res.status(404).json({ success: false, message: "Not found" });
}
