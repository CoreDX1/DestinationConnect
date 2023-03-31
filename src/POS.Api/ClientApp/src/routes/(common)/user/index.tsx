import { component$ } from "@builder.io/qwik"
import { type RequestEventCommon } from "@builder.io/qwik-city"

export const onGet = ({ redirect, cookie }: RequestEventCommon): any => {
    const currentToke = cookie.get("myToken")?.value
    if (currentToke !== "TOKEN_SESSION_123") {
        throw redirect(302, "/auth/login")
    }
}
export default component$(() => {
    return <div>Bienvenido a la </div>
})
