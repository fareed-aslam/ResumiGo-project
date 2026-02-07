import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Name is required"],
//   },
//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: [true, "Password is required"],
//     minlength: 8,
//   },
// });

// // 🔐 Hash password before save
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// // 🔐 Compare password method
// userSchema.methods.isPasswordCorrect = function (password) {
//   return bcrypt.compare(password, this.password);
// };

// export const User = mongoose.model("User", userSchema);
