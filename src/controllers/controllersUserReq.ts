import {Request, Response} from "express"

const UserValidation = (req: Request, res: Response) => {
    console.log(req.user)
    if(!req.user) {    
        res.sendStatus(401)
    } else{
        res.send({
            info: req.user,
        })

    }


}
export {UserValidation}