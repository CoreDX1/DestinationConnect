import { $, useSignal } from "@builder.io/qwik"
import { component$, useTask$ } from "@builder.io/qwik"
import { routeLoader$, useNavigate } from "@builder.io/qwik-city"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import type {
    ILodgingReponseDto,
    Items,
} from "~/Interface/Response/ILodgingReponseDto"
import { ListContent } from "~/components/ListContent"
import { useLodging } from "~/hooks/useLodging"

export const useHotelDetail = routeLoader$(async (requestEvent) => {
    return requestEvent.params.filter
})

export default component$(() => {
    const { getUrlParams } = useLodging()
    const signal = useHotelDetail()
    const pagination = useSignal(1)
    const todo = useSignal<BaseReponse<ILodgingReponseDto<Items[]>>>()

    useTask$(async () => {
        const res = await fetch(
            `http://localhost:5278/api/Lodging/lodgings?${signal.value}`
        )
        const data: BaseReponse<ILodgingReponseDto<Items[]>> = await res.json()
        todo.value = data
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
            <div>Total de paginas: {todo.value?.data?.totalPages}</div>
            <ListContent
                newUrl={handleClickPagination}
                ruta={signal.value}
                nextPage={pagination.value++}
                prevPage={pagination.value--}
                todo={todo}
            />
        </div>
    )
})
