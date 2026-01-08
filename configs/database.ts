import mongoose from "mongoose";

export const connectDb = async () => {
  const url = `mongodb+srv://lameojicoemail_db_user:123@api-province.fmn2cfz.mongodb.net/ProvinceDB`;
  try {
    await mongoose.connect(url);
    console.log('connect to db success');
  } catch (error) {
    console.log("connect db fail");
  }
};
