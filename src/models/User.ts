import mongoose, { Schema } from 'mongoose'
import { User } from '../interface/schema';

const UserSchema = new Schema<User>({
    nombre: String,
    apellido: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    numero: Number,
    pais: String
})

const User = mongoose.model("User", UserSchema);
export default User 