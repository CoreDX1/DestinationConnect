export interface ILodgingRequestDto {
    numPage: number
    numRecordPage: number
    numFilters: number
    textLodgingType: string
    textFilter: string
    startData: string
    endData: string
    totalPages: number,
    [key: string]: any
}
