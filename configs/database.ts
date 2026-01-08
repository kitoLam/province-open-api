import mongoose from "mongoose";

export const connectDb = async () => {
  const url = `${process.env.MONGO_URL}`;
  try {
    await mongoose.connect(url);
    console.log('connect to db success');
  } catch (error) {
    console.log("connect db fail");
  }
};
