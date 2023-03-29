import { component$ } from "@builder.io/qwik"
import { type IUserResponse } from "~/Interface/Response/IUserResponse"

export const ErrorForm = component$<IUserResponse>((prop) => {
    return <p>{prop.message}</p>
})
