import express from "express"
import "dotenv/config"
import {router} from "./routes"
import cors from 'cors'
import db from "./config/mongo"
import session from "express-session"
import passport from "passport"


const PORT = process.env.PORT || 3000;
const app = express()

// app.use(cors())
app.use(express.json())
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true},
        
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use((req,res,next) => {
    res.locals.user = req.user
    next()
})


app.use("/api", router)
db().then(() => {
    console.log("conexión exitosa")
} )
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`)
})