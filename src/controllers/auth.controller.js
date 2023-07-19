import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";


export const register = async (req, res) => {
  const { email, password, username } = req.body;
  console.log(email, password, username);

  try {
    const passwordhash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordhash,
    });
    console.log(newUser);
    const userSaverd = await newUser.save();

    const token = await createAccessToken({id:userSaverd.id})
  
    res.cookie('token', token)    
      res.json({
       id: userSaverd._id,
      usernmane: userSaverd.username,
      email: userSaverd.email,
      createdAt: userSaverd.createdAt,
      updatedAt: userSaverd.updatedAt
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message}); 
  }
};


export const login = async (req, res)=>{};