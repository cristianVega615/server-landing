import { Router  } from "express";
import {signIn} from '../controllers/controllersSignIn'

const router = Router();

router.post("/", signIn)

export {router}