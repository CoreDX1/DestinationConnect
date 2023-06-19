import { type BaseRegister } from "~/Commons/Base/BaseResponse"
import axios from "axios"
import type { LoginData, Register } from "~/Interface/Request/IUserRequest"
import { URL_API } from "~/data/constantes"
import { type BaseLoginResponse } from "~/Interface/Response/ILoginResponseDto"

export class User {
    static async AccountLogin(user: LoginData) {
        const { data } = await axios.post<BaseLoginResponse>(
            `${URL_API}/Auth/Login`,
            user
        )
        return data
    }

    static async AccountRegister(user: Register) {
        const { data } = await axios.post<BaseRegister>(
            `${URL_API}/Auth/Register`,
            user
        )
        return data
    }
}
