import { type Login, type ResponseLogin } from "../Interface/IUser"
import axios from "axios"

class Base {
    protected root: string = "http://localhost:5278/api/User"
    constructor(url: string) {
        this.root += url
    }
}

export class User extends Base {
    constructor(url: string) {
        super(url)
    }

    public accountLogin = async (user: Login) : Promise<ResponseLogin> => {
        const { data } = await axios<ResponseLogin>({
            method: "POST",
            url: this.root,
            data: user,
        })
        return data
    }
}
