import User from "../models/user.models.js"

export const register = async (req, res) => {
    const {email, password, username} = req.body
    console.log(email, password, username);

    try {
        const newUser  = new User({
            username,
            email,
            password
        })
        console.log(newUser)
        await newUser.save()   
        res.send("registrando")

        
    } catch (error) {
        console.log(error)
    }

};
export const login = (req, res) => {res.send("login");};