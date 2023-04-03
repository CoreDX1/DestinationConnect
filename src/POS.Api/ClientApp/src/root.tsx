import {
    type Signal,
    component$,
    createContextId,
    useContextProvider,
    useSignal,
    useStore,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city"
import { RouterHead } from "./components/router-head/router-head"

import "./global.css"

type AuthStoreProps = {
    isLogged: Signal<boolean>
}

export const AuthContext = createContextId<AuthStoreProps>("Auth")

export default component$(() => {
    const loginState = useSignal(false)
    const authStore = useStore<AuthStoreProps>({
        isLogged: loginState,
    })

    useVisibleTask$(() => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${"myToken"}=`)
        if (parts.length === 2) {
            loginState.value = true
        } else {
            loginState.value = false
        }
    })

    useContextProvider(AuthContext, authStore)

    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <RouterHead />
            </head>
            <body lang="en">
                <RouterOutlet />
                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    )
})
