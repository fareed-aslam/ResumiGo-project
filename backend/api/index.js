import { connectDB } from "../../src/data/connectDb.js";

export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({ success: true, message: "API is working!" });
}
