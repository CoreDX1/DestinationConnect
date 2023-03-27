import { $, component$, type QwikChangeEvent, useStore } from "@builder.io/qwik"
import { type ResponseLogin, type Login } from "~/Interface/IUser"
import axios from "axios"

export default component$(() => {
    const loginUser = useStore<Login>({
        email: "",
        password: "",
    })

    const onChangePasswod = $((e: QwikChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target
        loginUser.password = value
    })

    const onChangeEmail = $((e: QwikChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target
        loginUser.email = value
    })

    const webLogin = $(async () => {
        const res = await axios<ResponseLogin>(
            "http://localhost:5278/api/User/Auth/Login",
            {
                method: "post",
                data: loginUser,
            }
        )
        console.log(res.data)
    })

    return (
        <>
            <div>
                <form>
                    <h1>Please sign in</h1>
                    <div>
                        <div>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                onChange$={onChangeEmail}
                            />
                            <input
                                type="password"
                                placeholder="Enter Password"
                                onChange$={onChangePasswod}
                            />
                            <button
                                class="bg-fuchsia-50"
                                preventdefault:click
                                onClick$={webLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
})
