export interface IUserResponse {
    success: boolean
    data: Data
    message: string
    errors: Error
}

interface Error {
    email: Array<string>
    password: Array<string>
    firstName : Array<string>
    lastName : Array<string>
}

interface Data {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
}
