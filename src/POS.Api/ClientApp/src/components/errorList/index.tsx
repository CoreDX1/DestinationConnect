import { component$ } from "@builder.io/qwik"

type ErrorProps = {
    message: Array<string> | undefined
}

export const ErrorList = component$<ErrorProps>(({ message }) => {
    return (
        <div>
            {message?.map((error, index) => (
                <p class="text-red-600" key={index}>
                    {error}
                </p>
            ))}
        </div>
    )
})
