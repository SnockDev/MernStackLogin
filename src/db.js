import mongoose from "mongoose";
const connection=process.env.mconnect;

export const connectdb = async () => {
  try {
    await mongoose.connect(`${connection}`);
    console.log(` >>> db is connected `);
  } catch (error) {
    console.log(error);
  }
};
