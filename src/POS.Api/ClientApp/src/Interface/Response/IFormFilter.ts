export interface IFormfilter {
    alojamiento: string
    destino: string
    fechaInicio: string
    fechaFin: string
    [key: string]: string
}

export interface WithLabel {
    label: string
}

export interface WithIdAndLabel extends WithLabel {
    id: string
}
