import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik"
import { useNavigate } from "@builder.io/qwik-city"
import { AuthContext } from "~/root"

export default component$(() => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    useVisibleTask$(() => {
        !auth.isLogged.value && navigate("/auth/login")
    })

    return <div>Solo Layout</div>
})
