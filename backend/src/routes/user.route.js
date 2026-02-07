// import express from "express";
// import { registerHandler, loginHandler } from "./controllers/auth.controller.js";
// import { isAuthenticated } from "./middleware/auth.middleware.js";

// const router = express.Router();

// router.post("/register", registerHandler);
// router.post("/login", loginHandler);
// router.get("/me", isAuthenticated, (req, res) => {
//   res.json({ success: true, user: req.user });
// });

// export default router;

import express from "express";
import {
  getUserProfile,
  loginHandler,
  registerHandler,
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/authUser.middleware.js";

const router = express.Router();

router.route("/register").post(registerHandler);
router.route("/login").post(loginHandler);

//protected route token will be required
router.route("/profile").get(authUser, getUserProfile);

export default router;
