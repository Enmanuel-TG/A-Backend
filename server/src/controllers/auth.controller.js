import User from "../models/user.models.js";

import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  console.log(email, password, username);

  try {

    const userFound = await User.findOne({email})
    if (userFound) {
      return res.status(400).json(['the email is already in use']);
     }

    const passwordhash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordhash,
    });
    console.log(newUser);
    const userSaverd = await newUser.save();

    const token = await createAccessToken({ id: userSaverd.id });
    res.cookie("token", token);
    res.json({
      id: userSaverd._id,
      usernmane: userSaverd.username,
      email: userSaverd.email,
      createdAt: userSaverd.createdAt,
      updatedAt: userSaverd.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password = "" } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json(["User not found"]);

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json(["Incorrect password"]);

    const token = await createAccessToken({ id: userFound.id });
    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const logout = (_req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.status(200).json({ message: "Logout successfully" });
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json(["No hay token"])
  }
   jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) {
      return res.status(401).json(["Error de verificacion"]);
    }
    const userFound = await User.findById(user.id);
    if (!userFound) {
      return res.status(401).json(["Ese usuario no fue encontrado"])
    }
     return res.json({
       id: userFound._id,
       username: userFound.username,
       email: userFound.username

     })
  });
}
