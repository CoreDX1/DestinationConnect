import {
    type QRL,
    type Signal,
    component$,
    useSignal,
    $,
} from "@builder.io/qwik"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import type {
    ILodgingReponseDto,
    Items,
} from "~/Interface/Response/ILodgingReponseDto"
import { useLodging } from "~/hooks/useLodging"
import { lodgingApi } from "~/service/LodgingApi"

type PropLodgingPage = {
    ruta?: string
    nextPage: number
    prevPage: number
    todo: Signal<BaseReponse<ILodgingReponseDto<Items[]>> | undefined>
    newUrl: QRL<(direction: "next" | "prev") => Promise<void>>
}

export const ListContent = component$<PropLodgingPage>(
    ({ ruta, todo, newUrl }) => {
        const { starRating, formater } = useLodging()

        // * Refactor this Code
        const urlParams = new URLSearchParams(ruta)
        const valorPage = Number(urlParams.get("NumPage"))
        const pageTotal = todo.value?.data?.totalPages ?? 0

        const pagination = useSignal<number>(valorPage)

        const setPaginationValue = $(() => {
            const value = pagination.value
            return value
        })

        const handlePage = $(async (direction: "next" | "prev") => {
            const newPage =
                direction === "next" ? pagination.value++ : pagination.value--
            setPaginationValue()

            if (newPage <= pageTotal) {
                //  * Refactor this Method
                pagination.value >= 0 && (pagination.value = 1)
                pagination.value >= pageTotal && (pagination.value = pageTotal)
                console.log(pagination.value)
                const filter = await lodgingApi.filterLedging(
                    pagination.value,
                    ruta
                )
                todo.value = filter
            }
        })

        return (
            <div>
                <div class="flex justify-center gap-4">
                    <button
                        onClick$={() => (handlePage("next"), newUrl("next"))}
                    >
                        Siguiente
                    </button>
                    <span>{valorPage}</span>
                    <button
                        onClick$={() => (handlePage("prev"), newUrl("prev"))}
                    >
                        Anterior
                    </button>
                </div>
                {todo.value?.data?.items.map((item) => (
                    <div key={item.id} class="flex justify-center">
                        <div class="m-3 h-[250px] border border-black rounded-xl grid grid-cols-text">
                            <div class="bg-slate-400 text-center m-2"></div>
                            <div class="flex flex-col p-2 text-xs">
                                <h1 class="text-2xl font-semibold">
                                    {item.locality}
                                </h1>
                                <span>{item.description}</span>
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
                                <h1 class="text-2xl">Precio: ${item.price}</h1>
                                <p class="text-gray-400">
                                    No incluye impto.PAIS ni Percepciones.
                                </p>
                                <p class="text-[#4300d2]">
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
        )
    }
)
