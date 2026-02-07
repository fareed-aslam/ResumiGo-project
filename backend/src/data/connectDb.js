import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `MONGODB connected || DB host is ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed...", error);
    process.exit(1);
  }
};
