import { $, useSignal } from "@builder.io/qwik"
import { component$, useTask$ } from "@builder.io/qwik"
import { routeLoader$, useNavigate } from "@builder.io/qwik-city"
import { useLodging } from "~/hooks/useLodging"

export const useHotelDetail = routeLoader$(async (requestEvent) => {
    return requestEvent.params.filter
})

type PropsNum = {
    pagination: number
}

export const ListLodging = component$<PropsNum>(({ pagination }) => {
    return (
        <div>
            <h1>Lista de alojamientos {pagination}</h1>
        </div>
    )
})

export default component$(() => {
    const { formater, starRating, todo, getUrlParams, fetchLodgings } =
        useLodging()
    const signal = useHotelDetail()
    const pagination = useSignal<number>(1)

    useTask$(async () => {
        await fetchLodgings(signal.value, pagination.value++)
        console.log(pagination.value)
    })
    const navigation = useNavigate()

    const handleClickPagination = $(async (direction: "next" | "prev") => {
        const { newUrl, pageNum } = await getUrlParams(signal.value)
        pagination.value = direction === "next" ? pageNum + 1 : pageNum - 1
        const pageTotal = todo.value?.data?.totalPages ?? 0
        if (pagination.value >= 1 && pagination.value <= pageTotal)
            navigation(`/alojamientos/NumPage=${pagination.value}&${newUrl}`)
    })

    return (
        <div>
            <ListLodging pagination={pagination.value} />
            <div class="flex flex-row justify-center gap-4">
                <button onClick$={() => handleClickPagination("next")}>
                    Siguiente
                </button>
                <button onClick$={() => handleClickPagination("prev")}>
                    {" "}
                    Anterior
                </button>
            </div>
            <div>
                {todo.value?.data?.items.map((item) => (
                    <div key={item.id} class="flex justify-center">
                        <div class="m-3 h-[250px] border border-black rounded-xl grid grid-cols-text">
                            <div class="bg-slate-400 text-center m-2"></div>
                            <div class="flex flex-col p-2 text-xs">
                                <h1 class="text-2xl font-semibold">
                                    {item.locality}
                                </h1>
                                <span class="text-gray-400">
                                    {item.description}
                                </span>
                                <span>{item.lodgingType}</span>
                                {starRating(item.rating)}
                            </div>
                            <div class="p-2 text-xs leading-7 border-l-2">
                                <span class="block">
                                    Fecha de incio: {formater(item.dateStart)}
                                </span>
                                <span class="block">
                                    Fecha de fin: {formater(item.dateEnd)}
                                </span>
                                <h1 class="text-2xl">${item.price}</h1>
                                <p class="text-gray-400">
                                    No incluye impto.PAIS ni Percepciones.
                                </p>
                                <p class="text-[#4300D2]">
                                    ¿Que incluye es precio?
                                </p>
                                <div class="text-center">
                                    <button class="bg-[#4300d2] text-white w-full rounded-full p-1 hover:bg-[#4a2f86]">
                                        Ver Detalle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
})
