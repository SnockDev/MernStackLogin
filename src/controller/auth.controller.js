import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { signed } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const passwordhashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordhashed,
    });

    const userSaved = await newUser.save();

    const token = await signed({ id: userSaved._id });

    res.status(201).cookie("token", token).json({
      _id:userSaved._id,
      username:userSaved.username,
      email:userSaved.email,
      createdAt:userSaved.createdAt,
      updatedAt:userSaved.updatedAt
    });

  } catch (err) {
    res.status(400).send("error");
    console.log(err);
  }
};

export const login = async (req, res) => {
  res.send("login");
};
