import { Router } from 'express'
import passport from 'passport'
import {facebookStrategy} from '../utils/passportFacebook'

const router = Router();

passport.use(facebookStrategy);

router.get('/signIn',  passport.authenticate("facebook", {
    failureMessage: true
}))


export { router }