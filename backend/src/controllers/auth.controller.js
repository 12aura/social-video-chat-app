import User from "../models/User.js";

export async function signup(req, res){
    const {email, password, fullName} = req.body;

    try{
        if(!email || !password || !fullName)
        {
            return res.status(400).json({message: "All fields are required"});
        }
        if(password.length < 6)
        {
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }

        //john@gmail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = await User.findOne({email});
    }catch(error)
    {

    }
}

export async function login(req, res){
    res.send("Login Route");
}

export function logout(req, res){
    res.send("Logout Route");
}