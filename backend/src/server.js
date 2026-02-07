import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


export const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const allowedOrigins = ["http://localhost:5173"];
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));




import userRouter from "./routes/user.route.js";
import resumeRouter from "./routes/resume.route.js";




app.use("/api/user", userRouter);
app.use("/api/resume", resumeRouter);

app.use(express.static(path.join(__dirname, "../public")));
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads"), {
  setHeaders: (res, _path) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:5173");
  }
}));