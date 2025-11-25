import mongoose from "mongoose";

export const ConnectDb = async (req, res) => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("database connected successfully")
  } catch (error) {
    console.log("database connected successfully")
  }
};