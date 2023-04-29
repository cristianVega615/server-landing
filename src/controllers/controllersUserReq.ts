import {Request, Response} from "express"


//* Este controlador verificara si hay algun usuario (Si existe un usuario establecido en req.use)
//* Si no hay algun valor establecido entonces mandará un error 401 (Unauthorized).
const UserValidation = (req: Request, res: Response) => {
    if(!req.user) {    
        res.sendStatus(401)
    } else{
        res.send({
            info: req.user,
        })

    }


}
export {UserValidation}