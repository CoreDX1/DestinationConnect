import { $, useSignal } from "@builder.io/qwik"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import type {
    ILodgingReponseDto,
    Items,
} from "~/Interface/Response/ILodgingReponseDto"

export const useLodging = () => {
    const todo = useSignal<BaseReponse<ILodgingReponseDto<Items[]>>>()
    const starRating = $((start: number) => {
        const stars = []
        for (let i = 0; i < start; i++) {
            stars.push("x")
        }
        return <span>{stars.join("")}</span>
    })

    const getUrlParams = $((url: string) => {
        const params = new URLSearchParams(url)
        const pageNum = Number(params.get("NumPage"))
        const newUrl = url?.replace(`NumPage=${pageNum}&`, "")
        return {
            newUrl,
            pageNum,
        }
    })

    const fetchLodgings = $(async (url: string, pag: number) => {
        const res: Response = await fetch(
            `http://localhost:5278/api/Lodging/lodgings?NumPage=${pag}&${url}`
        )
        const data = (await res.json()) as BaseReponse<
            ILodgingReponseDto<Items[]>
        >
        todo.value = data
    })

    const formater = $((date: string) => {
        const fecha = new Date(date)
        return `${fecha.getFullYear()}/${
            fecha.getMonth() + 1
        }/${fecha.getDay()}`
    })

    return {
        todo,
        starRating,
        formater,
        getUrlParams,
        fetchLodgings,
    }
}
