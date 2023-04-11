export interface IUserResponse {
    success?: boolean  
    message?: string 
    data: string
    errors: Error 
}

interface Error {
    email: string[]
    password: string[]
    firstName : string[]
    lastName : string[]
}
