import axios from "axios"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import type { Items } from "~/Interface/Response/ILodgingReponseDto"
import { URL_API } from "~/data/constantes"

class Lodging {
    public ListLedging = async () => {
        const { data } = await axios.get<BaseReponse<Items[]>>(
            `${URL_API}/Lodging/select`
        )
        return data
    }

    // public async FilterLedging(filter: ILodgingRequestDto) {
    //     const { data } = await axios.post<
    //         BaseReponse<ILodgingReponseDto<Items[]>>
    //     >(`${URL_API}/Lodging`, filter)
    //     return data
    // }

    public async FilterLedging() {
        const { data } = await axios.get(
            "http://localhost:5278/api/Lodging/filter/numPage=1&numRecordPage=5&numFilters=1&textLodgingType=Hotel&textFilter=Miami&startData=2023-01-01&endData=2023-12-02"
        )
        return data
    }
}

export const lodgingApi = new Lodging()
