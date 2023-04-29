import { Request, Response, Router } from "express";
import passport, { DoneCallback } from "passport";
import {localStratey} from '../utils/passport'
import { userParameter} from "../interface/schema"

const router = Router();

//* Estamos usando passport-local para poder usar un login.
passport.use(localStratey)

//* Aca serializamos y deserializamos para toda la app.
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

//*Aca se entra para autentificar los datos.
router.post("/", passport.authenticate('local', { failureMessage:true}))


export { router }