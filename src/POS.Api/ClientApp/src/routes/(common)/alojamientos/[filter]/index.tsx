import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import type {
    ILodgingReponseDto,
    Items,
} from "~/Interface/Response/ILodgingReponseDto"

export const useHotelDetail = routeLoader$(async (requestEvent) => {
    const res = await fetch(
        `http://localhost:5278/api/Lodging/filter/${requestEvent.params.filter}
`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    const data = await res.json()
    return data as BaseReponse<ILodgingReponseDto<Items[]>>
})

// numPage=1&numRecordPage=10&numFilters=1&textLodgingType=hotel&textFilter=Madrid&startData=2022-01-01&endData=2022-01-10
export default component$(() => {
    const signal = useHotelDetail()
    return (
        <div>
            <h1>{signal.value.data.items.length}</h1>
            {signal.value.data.items.map((item) => (
                <div key={item.id} class="bg-gray-400 flex justify-center">
                    <div class="p-7">
                        <h1>{item.locality}</h1>
                        <span>{item.lodgingType}</span>
                        <br />
                        <span>{item.dateStart}</span>
                        <span>{item.dateEnd}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
})
