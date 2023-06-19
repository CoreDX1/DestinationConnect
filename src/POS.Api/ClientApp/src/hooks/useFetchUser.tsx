import { $, useSignal, useStore } from "@builder.io/qwik"
import type {
    IRegisterResponseDto,
    BaseReponse,
} from "~/Commons/Base/BaseResponse"
import { type Register } from "~/Interface/Request/IUserRequest"
import { User } from "~/service/UserApi"

export const useFetchUser = () => {
    const registrationData = useStore<Register>({
        lastname: "",
        firstname: "",
        email: "",
        password: "",
    })
    const resgistrationResponse =
        useSignal<BaseReponse<boolean, IRegisterResponseDto>>()
    const showSuccessMessage = useSignal(false)

    const responseRegister = $(async (registrationData: Register) => {
        const response = await User.AccountRegister(registrationData)
        return response
    })

    return {
        registrationData,
        resgistrationResponse,
        showSuccessMessage,
        responseRegister,
    }
}
