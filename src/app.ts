import express from "express"
import "dotenv/config"
import {router} from "./routes"
import cors from 'cors'
import db from "./config/mongo"
import session from "express-session"
import passport from "passport"
import cookieParser from "cookie-parser"


/**
 * ! El indice de toda la aplicación
 */


const PORT = process.env.PORT || 3000;
const app = express()

app.use(cookieParser())
/**
 * * Acá use cors principalmente porque mi otro proyecto (lo encuentras en mi github cojo landing-page-new) que 
 * * Que es un landing page, pero al tenermlo en dos diferentes servidores y querer acceder a los set-cookies 
 * * entonces me obligo hacer uso de CORS
 */
app.use(cors({
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
    credentials:true
}))
app.use(express.json())
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: false,
    })
)
app.use(passport.initialize())
app.use(passport.authenticate("session"))
app.use(express.urlencoded({extended: false}))

app.use("/api", router)
db().then(() => {
    console.log("conexión exitosa")
})
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`)
})