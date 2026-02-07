import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// import jwt from "jsonwebtoken";

// export const generateToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });
// };

// import { User } from "../models/user.model.js";
// import { generateToken } from "../utils/jwt.js";

// export const registerHandler = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // 🔎 Check if user exists
//     const existedUser = await User.findOne({ email });
//     if (existedUser) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User already exists" });
//     }

//     // ✅ Create user (password will be hashed via pre-save hook)
//     const user = await User.create({ name, email, password });

//     // 🔐 Generate JWT token
//     const token = generateToken(user._id);

//     // ✅ Return response
//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//       token,
//     });
//   } catch (error) {
//     console.error("Register Error:", error.message);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };

// export const loginHandler = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // 🔎 Find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid email or password" });
//     }

//     // 🔐 Validate password
//     const isMatch = await user.isPasswordCorrect(password);
//     if (!isMatch) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid email or password" });
//     }

//     // 🔐 Generate token
//     const token = generateToken(user._id);

//     // ✅ Return response
//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//       token,
//     });
//   } catch (error) {
//     console.error("Login Error:", error.message);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };

export const registerHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be atleast 8 characters",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });

   

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(500)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });

    // res.cookie("token", userToken, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "Strict",
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    // });

    // res.status(200).json({
    //   success: true,
    //   message: "User LogedIn successfully",
    //   userToken,
    //   user: {
    //     id: user._id,
    //     name: user.name,
    //     email: user.email,
    //   },
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: true, message: error.message });
  }
};

//get user profile

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
