import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik"
import { useNavigate } from "@builder.io/qwik-city"
import { AuthContext } from "~/root"

// type SessionData = {
//     IsSession : boolean
//     user : any
//     role : string
// }

// export const onGet: RequestHandler<SessionData> = ({ cookie }) => {
//     console.log(cookie)
//     return {
//         IsSession: true,
//         user: {},
//         role : ""
//     }
// }

export default component$(() => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    useVisibleTask$(() => {
        !auth.isLogged.value && navigate("/auth/login")
    })
    return <div>Bienvenido a la </div>
})
