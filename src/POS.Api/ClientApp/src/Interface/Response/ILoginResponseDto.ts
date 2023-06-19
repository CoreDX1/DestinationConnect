export interface ILoginResponseDto {
    login: {
        email: Array<string>
        password: Array<string>
    }
}

export interface BaseLoginResponse {
    success: boolean
    data: any
    message: string
    errors: Errors
}

interface Errors {
    login: Login
    register: any
}

interface Login {
    email: string[]
    password: string[]
}
