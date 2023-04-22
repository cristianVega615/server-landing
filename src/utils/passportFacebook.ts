import passport, { DoneCallback } from 'passport'
import User from '../models/User';
import { Profile } from 'passport-facebook';
import {Strategy as FacebookStrategy} from 'passport-facebook'

let clientID = process.env['FACEBOOK_APP_ID'] as string; //* Casteo esta variable porque esta dentro de mi archivo .env

let  clientSecret = process.env['FACEBOOK_APP_SECRET'] as string;

let facebookStrategy = new FacebookStrategy({
    clientID,
    clientSecret,
    callbackURL: "https://www.example.com/oauth2/redirect/facebook",
    profileFields: ["id", "first_name", "last_name", "email"]
},async  function(accessToken: string, refreshToken: string, profile: Profile, done: DoneCallback) {
    try {
        let cred = await User.find({kindOfRegister: "facebook", providerId: profile.id}) 
        console.log(profile)
        // if(!cred){
        //     let userNewFacebook = await User.create()
        // } 
    } catch (error) {
       done(error) 
    }
});


export {facebookStrategy}