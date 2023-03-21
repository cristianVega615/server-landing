import { Router } from "express";
import passport from "passport";
import { login } from "../controllers/controllersLogin";
import {localStratey} from '../utils/passport'
import {User as TypeUser, passportUser} from "../interface/schema"

const router = Router();

passport.use(localStratey)

passport.serializeUser(function (user: any ,done){
    process.nextTick(function(){
        done(null, {id: user.nombre})
    })
})

passport.deserializeUser(function (user: any, done){
    process.nextTick(function(){
        done(null, user)
    })
})

router.post("/", passport.authenticate('local', {successRedirect: "/home" ,failureMessage:true}))
// router.post("/"  ,login)


export { router }