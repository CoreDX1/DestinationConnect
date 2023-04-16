import axios, { type Method } from "axios"
export class Lodging {
    protected root = "http://localhost:5278/api"

    constructor(private readonly url : string){}

    public async request<T> (method: Method, path: string) {
        const { data } = await axios<T>({
            method,
            url: `${this.root}/${this.url}/${path}`
        })
        return data
    }

    public async filterRequest<T, U> (method: Method, filter: U) {
        const {data} = await axios<T>({
            method,
            url: `${this.root}/${this.url}`,
            data: filter
        })
        return data
    }
}

export const Api = {
    Lodging: new Lodging("Lodging")
}