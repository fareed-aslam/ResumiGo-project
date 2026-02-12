import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // Already connected or connecting
    return;
  }
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `✅ MongoDB connected || Host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.error("MongoDB connection failed", error);
    throw new Error("DB Connection Error");
  }
};
