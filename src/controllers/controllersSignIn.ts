import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { encrypt } from "../utils/hash";
import type { RequestUser, UserVariable } from "../interface/schema";


const signIn = async (req: Request, res: Response, next: NextFunction) => {

    //* Controlador para poder hacer una nueva cuenta dentro de mi servidor


    try {
        const { body } = req
        const {password } = body
        
        let hashPass = await encrypt(password) 
        let userParse = {
            ...body,
            password: hashPass,
            kindOfRegister: "local",
        }
        
        const userCreate = await User.create(userParse); 
        
        const user: RequestUser = {
            id: userCreate._id,
            email: userCreate.email,
            nombre: userCreate.nombre
        }
        
        req.logIn(user, function(err){
            if(err) {return next(err)}
            console.log(req.user)
            res.sendStatus(200)
        })
    } catch (error) {
       console.log(error) 
    }
}

export {signIn}