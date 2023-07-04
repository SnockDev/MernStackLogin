import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Alejandro:11232628@mongoCRUD.p6g5lfh.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(` >>> db is connected `);
  } catch (error) {
    console.log(error);
  }
};
