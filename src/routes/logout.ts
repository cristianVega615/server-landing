import {NextFunction, Request, Response, Router} from 'express'

const router = Router();

router.post('/', (req: Request, res: Response , next: NextFunction) => {
    req.logOut((err) => {
        if (err) { return next(err) }
        res.send({
            url: "http://localhost:3000/"
        })
    })
})

export { router }