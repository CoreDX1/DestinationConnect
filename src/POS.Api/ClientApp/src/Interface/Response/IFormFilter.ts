export interface IFormfilter {
    casa: string
    destino: string
    fechaInicio: string
    fechaFin: string
    habitaciones: {
        cama: number
        personas: number
    }
}

export interface WithLabel {
    label: string
}

export interface WithIdAndLabel extends WithLabel {
    id: string
}
