import { useContext, useSignal, useStore } from "@builder.io/qwik"
import { useNavigate } from "@builder.io/qwik-city"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import { type LoginData } from "~/Interface/Request/IUserRequest"
import { AuthContext } from "~/root"

export const useLogin = () => {
    const loginData = useStore<LoginData>({
        email: "",
        password: "",
    })
    const showSuccessMessage = useSignal(true)

    // TODO: Navigate to route
    const navigate = useNavigate()

    // TODO: Response Fetch //
    const responseData = useSignal<BaseReponse<string>>()
    const auth = useContext(AuthContext)

    return {
        loginData,
        responseData,
        showSuccessMessage,
        auth,
        navigate,
    }
}
