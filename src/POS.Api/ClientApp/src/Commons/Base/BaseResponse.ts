export interface BaseReponse<T, U> {
    success?: boolean
    message?: string
    data: T
    errors: U
}

export interface BaseRegister {
    success: boolean
    data: boolean
    message: string
    errors: Errors
}

export interface Errors {
    login: any
    register: Register
}

export interface Register {
    email: string[]
    password: string[]
    firstName: string[]
    lastName: string[]
}

export interface IRegisterResponseDto {
    register: {
        email: Array<string>
        password: Array<string>
        firstName: Array<string>
        lastName: Array<string>
    }
}
