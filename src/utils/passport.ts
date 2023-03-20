import User from "../models/User"
import {User as TypeUser} from "../interface/schema"
import {decrypt} from '../utils/hash'
import {Strategy} from "passport-local";
import { Error, Model } from "mongoose";


let localStratey = new Strategy ( async function verify(email, password, done){
        let user = await User.find({email}, function(err: Error, user: TypeUser ) {
            if(err) {return done(err)}
            if (!user) {return done(null, false, {message: "Incorrect"})}
        })  
        
        let condition = await decrypt(password, user[0].password)
        if(!condition) {return done(null, false, {message: "Incorrect"})};
        return done(null, user); 
        
    })



export {localStratey}