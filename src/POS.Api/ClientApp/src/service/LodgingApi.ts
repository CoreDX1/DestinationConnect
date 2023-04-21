import axios from "axios"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import type {  ILodgingReponseDto, Items } from "~/Interface/Response/ILodgingReponseDto"
import { URL_API } from "~/data/constantes"

class Lodging {
    public ListLedging = async () => {
        const { data } = await axios.get<BaseReponse<Items[]>>(
            `${URL_API}/Lodging/select`
        )
        return data
    }

    public filterLedging = async (pag: number , url: string | undefined) => {
         const { data} = await axios.get<BaseReponse<ILodgingReponseDto<Items[]>>>(
             `http://localhost:5278/api/Lodging/lodgings?NumPage=${pag}&${url}`
         )
         return data
    }
}

export const lodgingApi = new Lodging()
