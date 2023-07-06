import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const passwordhashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordhashed,
    });

    //await newUser.save();
    res.status(201).json({"_id":newUser._id});
    console.log(newUser);
  } catch (error) {
    res.status(400).send("error");
    console.log(error);
  }
};
export const login = async (req, res) => {
  res.send("login");
};
