import mongoose, { Schema } from 'mongoose'
import { User } from '../interface/schema';
import bcrypt from 'bcrypt'

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
UserSchema.methods.verifyPassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash)
}

const User = mongoose.model("User", UserSchema);
export default User 