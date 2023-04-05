import express from "express"
import "dotenv/config"
import {router} from "./routes"
import cors from 'cors'
import db from "./config/mongo"
import session from "express-session"
import passport from "passport"
import cookie from 'cookie-parser'
import cookieParser from "cookie-parser"


const PORT = process.env.PORT || 3000;
const app = express()

app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
    credentials:true
}))
app.use(express.json())
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
    })
)
app.use(passport.initialize())
app.use(passport.authenticate("session"))
app.use(express.urlencoded({extended: false}))

app.use("/api", router)
db().then(() => {
    console.log("conexión exitosa")
} )
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`)
})