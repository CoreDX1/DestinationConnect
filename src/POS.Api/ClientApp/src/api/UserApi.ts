import { type IUserResponse } from "../Interface/Response/IUserResponse"
import { type Login } from "~/Interface/Request/IUserRequest"
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

    public accountLogin = async (user: Login) : Promise<IUserResponse> => {
        const { data } = await axios<IUserResponse>({
            method: "POST",
            url: this.root,
            data: user,
        })
        return data
    }
}
