import { useSignal, useStore } from "@builder.io/qwik"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import { type Register } from "~/Interface/Request/IUserRequest"
import { User } from "~/service/UserApi"

export const useFetchUser = () => {
    const registrationData = useStore<Register>({
        lastname: "",
        firstname: "",
        email: "",
        password: "",
    })
    const resgistrationResponse = useSignal<BaseReponse<boolean>>()
    const showSuccessMessage = useSignal(false)

    const reponseRegister = User.AccountRegister(registrationData)

    return {
        registrationData,
        resgistrationResponse,
        showSuccessMessage,
        reponseRegister,
    }
}