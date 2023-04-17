import { component$ } from "@builder.io/qwik"

type Props = {
    message?: string
    success?: boolean
    show?: boolean
}

export const SuccessMessage = component$<Props>(
    ({ message, success, show }) => {
        return (
            <>
                {show && (
                    <p
                        class={
                            success
                                ? "text-green-500 text-[40px]"
                                : "text-red-500 text-[40px]"
                        }
                    >
                        {message}
                    </p>
                )}
            </>
        )
    }
)
