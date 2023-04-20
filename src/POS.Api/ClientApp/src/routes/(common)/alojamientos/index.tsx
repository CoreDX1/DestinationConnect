import { component$ } from "@builder.io/qwik"
import { useNavigate } from "@builder.io/qwik-city"
import { Formfilter } from "~/components/formFilter"

export const PruebaDeNavegacion = component$(() => {
    const navigation = useNavigate()
    return (
        <div>
            <button
                onClick$={() =>
                    navigation(
                        "/alojamientos/NumPage=2&NumRecordPage=5&NumFilters=1&TextLodgingType=Hotel&TextFilter=Miami&StartData=2023-01-20&EndData=2023-12-20"
                    )
                }
            >
                Pagina 2
            </button>
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
