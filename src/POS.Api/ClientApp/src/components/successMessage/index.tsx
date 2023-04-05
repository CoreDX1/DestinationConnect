import { component$ } from "@builder.io/qwik"
import type { MessageResponse } from "~/Interface/Response/IUserResponse"

export const SuccessMessage = component$<MessageResponse>(({ message }) => {
    return <p class="text-green-400 text-[30px]">{message}</p>
})
