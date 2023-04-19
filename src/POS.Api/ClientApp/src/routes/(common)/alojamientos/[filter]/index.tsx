import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import type {
    ILodgingReponseDto,
    Items,
} from "~/Interface/Response/ILodgingReponseDto"

export const useHotelDetail = routeLoader$(async (requestEvent) => {
    const res = await fetch(
        `http://localhost:5278/api/Lodging/lodgings?${requestEvent.params.filter}`
    )
    const data: BaseReponse<ILodgingReponseDto<Items[]>> = await res.json()
    return data
})

// numPage=1&numRecordPage=10&numFilters=1&textLodgingType=hotel&textFilter=Madrid&startData=2022-01-01&endData=2022-01-10
export default component$(() => {
    const signal = useHotelDetail()
    const starRating = (start: number) => {
        const stars = []
        for (let i = 0; i < start; i++) {
            stars.push("x")
        }
        return <span>{stars.join("")}</span>
    }
    const formater = (date: string) => {
        const fecha = new Date(date)
        return `${fecha.getFullYear()}/${
            fecha.getMonth() + 1
        }/${fecha.getDay()}`
    }
    return (
        <div>
            <h1>{signal.value.data.items.length}</h1>
            {signal.value.data.items.map((item) => (
                <div key={item.id} class="flex justify-center">
                    <div class="m-3 h-[333px] border border-black rounded-xl grid grid-cols-text">
                        <div class="bg-slate-400 text-center m-2"></div>
                        <div class="flex flex-col p-2">
                            <h1 class="text-3xl font-semibold">
                                {item.locality}
                            </h1>
                            <span>{item.lodgingType}</span>
                            <span>{item.description}</span>
                            {starRating(item.rating)}
                        </div>
                        <div class="p-2">
                            <span class="block">
                                Fecha de incio: {formater(item.dateStart)}
                            </span>
                            <span class="block">
                                Fecha de fin: {formater(item.dateEnd)}
                            </span>
                            <h1 class="text-3xl">Precio: ${item.price}</h1>
                            <p>No incluye impto.PAIS ni Percepciones.</p>
                            <p>{item.description}</p>
                            <p class="text-[#4300d2]">
                                ¿Que incluye es precio?
                            </p>
                            <div class="text-center">
                                <button class="bg-[#4300d2] text-white">
                                    Ver Detalle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                Paginate{" "}
                {signal.value.data.items.map((item) => item.description)}
            </div>
        </div>
    )
})
