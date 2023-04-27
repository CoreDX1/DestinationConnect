export interface BaseReponse<T, U> {
    success?: boolean
    message?: string
    data: T
    errors: U
}


export interface IRegisterResponseDto{
        register : {
            "email" : Array<string>,
            "password" : Array<string>,
            "firstName" : Array<string>,
            "lastName" : Array<string>,

        }
}