import mongoose, { Schema } from 'mongoose'
import { User } from '../interface/schema';
import bcrypt from 'bcrypt'

/**
 * Aca creamos un model de usuario a través de mongoose.
 * mirar el archivo interface y mirar el schema User.
 */
const UserSchema = new Schema<User>({
    nombre: String,
    apellido: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        default: ""
    },
    kindOfRegister: String,
    providerId: {
        type: String,
        default: ""
    }
})

//* Aca estamos ingresaondo un metodo instanciado hacia el documents creado para poder validar la contraseña.

UserSchema.methods.verifyPassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash)
}

//* Aca definimos nuestro documento a un Modelo
const User = mongoose.model("User", UserSchema);
export default User 