export const register = (req, res) => {
    const {email, password, username} = req.body
    console.log(email, password, username);
    
    res.send("registrando")
};
export const login = (req, res) => {res.send("login");};