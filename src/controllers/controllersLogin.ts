import { Request, Response } from "express";
import User from "../models/User"
import passport from "passport";


const login = async (req: Request , res: Response) => {
    
    const {email, password} = req.body 

    
        User.findOne({email})
        .then(async (user) => {
            console.log(user)
            let condition = await user?.verifyPassword(password, user.password)
            console.log(condition)

        }); 

    console.log(email, password)
    res.send({data: "Login"})
}

export { login }