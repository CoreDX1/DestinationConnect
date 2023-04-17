import axios from "axios"
import { type BaseReponse } from "~/Commons/Base/BaseResponse"
import { type ILodgingRequestDto } from "~/Interface/Request/ILodgingRequestDto"
import { type ILodgingResponseDto } from "~/Interface/Response/ILodgingReponseDto"
import { URL_API } from "~/data/constantes"

class Lodging {
    public ListLedging = async () => {
        const { data } = await axios<BaseReponse<ILodgingResponseDto[]>>({
            url: `${URL_API}/Lodging/select`,
            method: "GET",
        })
        return data
    }

    public async FilterLedging(filter: ILodgingRequestDto) {
        const { data } = await axios<BaseReponse<ILodgingResponseDto[]>>({
            method: "POST",
            url: `${URL_API}/Lodging`,
            data: filter,
        })
        return data
    }
}

export const lodgingApi = new Lodging()
