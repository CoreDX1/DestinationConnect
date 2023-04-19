import { $, type Signal } from "@builder.io/qwik"
import { component$, useSignal, useTask$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import type {
    ILodgingReponseDto,
    Items,
} from "~/Interface/Response/ILodgingReponseDto"

export const useHotelDetail = routeLoader$(async (requestEvent) => {
    return requestEvent.params.filter
})

type PropLodgingPage = {
    ruta?: string
    nextPage: number
    prevPage: number
    todo: Signal<BaseReponse<ILodgingReponseDto<Items[]>> | undefined>
}

export const Test = component$<PropLodgingPage>(
    ({ prevPage, nextPage, ruta, todo }) => {
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
        // TODO: Para Cambiar de pagina

        const handlePage = $(async (direction: "next" | "prev") => {
            const newPage = direction === "next" ? nextPage + 1 : prevPage - 1 // <-- determinar la nueva página según la dirección
            const res = await fetch(
                `http://localhost:5278/api/Lodging/lodgings?NumPage=${newPage}&${ruta}`
            )
            const data: BaseReponse<ILodgingReponseDto<Items[]>> =
                await res.json()
            todo.value = data
        })

        return (
            <div>
                <button onClick$={() => handlePage("next")}>
                    Siguiente Pagina
                </button>
                <br />
                <button onClick$={() => handlePage("prev")}>
                    Anterior Pagina
                </button>
                <h1>{todo.value?.data.items.length}</h1>
                {todo.value?.data.items.map((item) => (
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
            </div>
        )
    }
)

export default component$(() => {
    const signal = useHotelDetail()
    const pagination = useSignal(1)
    const todo = useSignal<BaseReponse<ILodgingReponseDto<Items[]>>>()

    useTask$(async () => {
        console.log(signal.value)
        const res = await fetch(
            `http://localhost:5278/api/Lodging/lodgings?${signal.value}`
        )
        const data: BaseReponse<ILodgingReponseDto<Items[]>> = await res.json()
        console.log(data.data.items.length)
        todo.value = data
    })

    return (
        <div>
            <div>Total de paginas: {todo.value?.data.totalPages}</div>
            <Test
                ruta={signal.value}
                nextPage={pagination.value++}
                prevPage={pagination.value--}
                todo={todo}
            />
        </div>
    )
})
