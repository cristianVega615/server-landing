import "dotenv"
import {connect} from 'mongoose'
//*Funcion que hace conexion a la base de datos (Esto usando MongoDB por lo tanto estoy usando mongoose)

async function dbConect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
}

export default dbConect