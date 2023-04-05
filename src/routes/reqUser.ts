import { Router } from "express"
import { UserValidation } from "../controllers/controllersUserReq"

const router = Router()


router.get("/", UserValidation)


export {router}
