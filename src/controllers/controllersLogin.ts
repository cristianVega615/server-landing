import { Request, Response } from "express";
import User from "../models/User"
import passport from "passport";


const login = async (req: Request , res: Response) => {
    
    const {email, password} = req.body 

    
        let user = await User.find({email}); 
        console.log(user)
    console.log(email, password)
    res.send({data: "Login"})
}

export { login }