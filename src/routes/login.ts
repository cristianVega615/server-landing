import { Request, Response, Router } from "express";
import passport, { DoneCallback } from "passport";
import { login } from "../controllers/controllersLogin";
import {localStratey} from '../utils/passport'
import { userParameter} from "../interface/schema"
import User from "../models/User";

const router = Router();

passport.use(localStratey)

passport.serializeUser(function (user: userParameter ,done:DoneCallback){
    process.nextTick(function(){
        done(null, {
            id: user.id,
            nombre: user.nombre,
            email: user.email
        });

    })
})

passport.deserializeUser(function (user: userParameter, done:DoneCallback){
    process.nextTick(function(){
        done(null,user)
    })
})

router.post("/", passport.authenticate('local', { failureMessage:true}), (req: Request, res: Response) => {
    res.send({
        cookie: req.cookies
    })
})
// router.post("/"  ,login)


export { router }