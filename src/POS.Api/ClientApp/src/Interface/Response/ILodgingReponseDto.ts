export interface ILodgingReponseDto<T>{
        totalRecords : number
        items : T
}

export interface Items {
    id: number
    locality: string
    price: number
    lodgingType: string
    description: string
    dateStart: string
    dateEnd: string
    state: number
}