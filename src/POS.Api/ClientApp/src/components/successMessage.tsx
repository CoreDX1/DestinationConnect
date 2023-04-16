import { component$ } from "@builder.io/qwik"
import type { BaseReponse } from "~/Commons/Base/BaseResponse"

export const SuccessMessage = component$(
    ({
        message,
        success,
    }: Pick<BaseReponse<boolean>, "message" | "success">) => {
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
