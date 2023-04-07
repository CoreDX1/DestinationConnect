import { component$ } from "@builder.io/qwik"
import type { IUserResponse } from "~/Interface/Response/IUserResponse"

export const SuccessMessage = component$(
    ({ message, success }: Pick<IUserResponse, "message" | "success">) => {
        return (
            <p
                class={
                    success
                        ? "text-green-500 text-[40px]"
                        : "text-red-500 text-[40px]"
                }
            >
                {message}
            </p>
        )
    }
)
