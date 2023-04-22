import { Document, ObjectId } from "mongoose";

interface User  {
    _id: ObjectId
    nombre: string;
    apellido: string;
    email: {
        type:string;
        unique: true
    };
    password:string,
    kindOfRegister: string,
    providerId: string
    verifyPassword(password: string, hash: string): Promise<boolean>;
}

interface UserVariable extends Document { 
    _id: ObjectId
    nombre: string;
    apellido: string;
    email: string;
    password:string,
    numero: number,
}

interface RequestUser  {
    id: ObjectId;
    email: unknown;
    nombre: string;
}


interface Serialize extends Express.User{
    nombre: string;
    email: string;
}

interface userParameter extends Express.User{
    [key:string]: any;
}


export {User, userParameter, Serialize, RequestUser, UserVariable}