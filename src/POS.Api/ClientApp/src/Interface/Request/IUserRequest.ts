export interface Login {
    email: string
    password: string
    [key : string]: string
}

export interface Register {
    firstname: string
    lastname: string
    email: string
    password: string
    [key : string]: string
}
