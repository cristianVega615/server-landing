import { Router  } from "express";
import {signIn} from '../controllers/controllersSignIn'

const router = Router();

router.get("/", signIn)

export {router}