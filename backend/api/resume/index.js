import {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from "../../src/controllers/resume.controller.js";
import { authUser } from "../../src/middlewares/authUser.middleware.js";
import { connectDB } from "../../src/data/connectDb.js";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST" && req.url === "/") {
    return authUser(req, res, () => createResume(req, res));
  }
  if (req.method === "GET" && req.url === "/") {
    return authUser(req, res, () => getUserResumes(req, res));
  }
  if (req.method === "GET") {
    // /resume/:id
    const idMatch = req.url.match(/^\/(.+)$/);
    if (idMatch) {
      req.params = { id: idMatch[1] };
      return authUser(req, res, () => getResumeById(req, res));
    }
  }
  if (req.method === "PUT") {
    const idMatch = req.url.match(/^\/(.+)$/);
    if (idMatch) {
      req.params = { id: idMatch[1] };
      return authUser(req, res, () => updateResume(req, res));
    }
  }
  if (req.method === "DELETE") {
    const idMatch = req.url.match(/^\/(.+)$/);
    if (idMatch) {
      req.params = { id: idMatch[1] };
      return authUser(req, res, () => deleteResume(req, res));
    }
  }
  res.status(404).json({ success: false, message: "Not found" });
}
