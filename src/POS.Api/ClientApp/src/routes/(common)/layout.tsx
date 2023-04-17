import { Slot, component$ } from "@builder.io/qwik"
import { Content } from "~/components/content"

export default component$(() => {
    return (
        <>
            <Slot />
            <Content />
        </>
    )
})
