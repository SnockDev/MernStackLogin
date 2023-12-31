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
      _id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (err) {
    res.status(400).send("error");
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email: email });
    if (!userFound)
      return res.status(400).json({ message: "user and/or pass incorrect" });
    const ismatch = await bcrypt.compare(password, userFound.password);
    if (!ismatch)
      return res.status(400).json({ message: "user and/or pass incorrect" });

    const token = await signed({ id: userFound._id });

    res.status(200).cookie("token", token).json({
      _id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
    console.log(req.user);
  } catch (err) {
    res.status(400).send("error");
    console.log(err);
  }
};

export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0),
  });
  return res.sendStatus(204);
};

export const profile=async(req,res)=>{
  const userFound=await User.findById(req.user.id)
  if(!userFound) return res.status(404).send({message:'not found'})
  res.send(profile)
}