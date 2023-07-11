import User from "../models/user.models.js"
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    const {email, password, username} = req.body
    console.log(email, password, username);

    try {
        const passwordhash = await bcrypt.hash(password, 10)
        const newUser  = new User({
            username,
            email,
            password: passwordhash
        })
        console.log(newUser)
        const userSaverd = await newUser.save()
        res.json(userSaverd)
        
    } catch (error) {
        console.log(error)
    }

};
export const login = (req, res) => {res.send("login");};