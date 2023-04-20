import { $, component$ } from "@builder.io/qwik"
import { Formfilter } from "~/components/formFilter"

export const PruebaDeNavegacion = component$(() => {
    const handleClick = $(() => {
        window.location.href =
            "/alojamientos/NumRecordPage=5&NumFilters=1&TextLodgingType=Hotel&TextFilter=Miami&StartData=2023-01-20&EndData=2023-12-20"
    })
    return (
        <div>
            <button onClick$={() => handleClick()}>Pagina 2</button>
        </div>
    )
})

export default component$(() => {
    return (
        <>
            <Formfilter />
        </>
    )
})
