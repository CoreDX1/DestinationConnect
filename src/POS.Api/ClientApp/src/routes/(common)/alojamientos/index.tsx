import { component$ } from "@builder.io/qwik"
import { Content } from "~/components/content"
import { Formfilter } from "~/components/formFilter"

export default component$(() => {
    return (
        <>
            <Formfilter />
            <Content />
        </>
    )
})
