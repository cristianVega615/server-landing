import {Router} from "express"
import {readdirSync} from "fs"

const router = Router();

const PATH_ROUTER  = `${__dirname}`;

const cleanFileName = (filename: string) => {
    const file = filename.split(".").shift()
    return file
}

readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = cleanFileName(filename)
    
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router)
            console.log(`Se esta ejecutando la ruta ./${cleanName}`)

        })
    }
    
})

export { router }