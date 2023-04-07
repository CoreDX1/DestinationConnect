export interface IUserResponse {
    success?: boolean  
    message?: string 
    data: Data
    errors: Error 
}

interface Error {
    email: string[]
    password: string[]
    firstName : string[]
    lastName : string[]
}

interface Data {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
}
