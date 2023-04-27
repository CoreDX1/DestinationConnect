import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import axios from "axios"
import type { LoginData, Register } from "~/Interface/Request/IUserRequest"
import { URL_API } from "~/data/constantes"
import { type ILoginResponseDto } from "~/Interface/Response/ILoginResponseDto"

export class User {

    static async AccountLogin(user: LoginData): Promise<BaseReponse<ILoginResponseDto>> {
        const { data } = await axios.post<BaseReponse<ILoginResponseDto>>(
            `${URL_API}/Auth/Login`,
            user
        )
        return data
    }

    static async AccountRegister(
        user: Register
    ): Promise<BaseReponse<boolean>> {
        const { data } = await axios.post<BaseReponse<boolean>>(
            `${URL_API}/Auth/Register`,
            user
        )
        return data
    }
}
