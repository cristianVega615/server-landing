import { Document } from "mongoose";

interface User  {
    nombre: string;
    apellido: string;
    email: {
        type:string;
        unique: true
    };
    password:string,
    numero: number,
    pais: string 
}

interface passportUser extends Express.User {
    nombre: string;
}


export {User, passportUser }