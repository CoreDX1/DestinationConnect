import { $ } from "@builder.io/qwik"

export const useLodging = () => {
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

    const formater = $((date: string) => {
        const fecha = new Date(date)
        return `${fecha.getFullYear()}/${
            fecha.getMonth() + 1
        }/${fecha.getDay()}`
    })

    return {
        starRating,
        formater,
        getUrlParams,
    }
}
