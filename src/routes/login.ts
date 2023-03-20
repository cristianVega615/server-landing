import { Router } from "express";
import passport from "passport";
import { login } from "../controllers/controllersLogin";
import {localStratey} from '../utils/passport'
import {User as TypeUser, passportUser} from "../interface/schema"

const router = Router();

passport.use(localStratey)

// passport.serializeUser(function (user,done){
//     process.nextTick(function(){
//         done(null, {id: user.id})
//     })
// })

// passport.deserializeUser(function (user, done){
//     process.nextTick(function(){
//         done(null, user)
//     })
// })

router.post("/", passport.authenticate('local', {failureMessage:true})  ,login)


export { router }