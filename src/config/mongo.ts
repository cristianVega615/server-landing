import "dotenv"
import {connect} from 'mongoose'

async function dbConect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
}

export default dbConect