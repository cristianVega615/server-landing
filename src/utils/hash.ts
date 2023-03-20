import bcrypt from "bcrypt"

const encrypt = async (password: string) => {
    return bcrypt.hash(password, 10)
}

const decrypt = async (password: string, hash: string ): Promise<boolean> => {
    return bcrypt.compare(password, hash)
}

export {encrypt, decrypt}