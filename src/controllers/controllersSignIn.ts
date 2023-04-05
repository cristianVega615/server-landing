import { Request, Response } from "express";
import User from "../models/User";
import { encrypt } from "../utils/hash";


const signIn = async (req: Request, res: Response) => {
    const { body } = req
    const {password } = body

    let hashPass = await encrypt(password) 
    const user = await User.create({...body, password: hashPass}); 
    
    res.sendStatus(200)
}

export {signIn}