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
    pais: string;
    verifyPassword(password: string, hash: string): Promise<boolean>;
}


interface Serialize extends Express.User{
    nombre: string;
    email: string;
}

interface userParameter extends Express.User{
    [key:string]: any;
}


export {User, userParameter, Serialize}