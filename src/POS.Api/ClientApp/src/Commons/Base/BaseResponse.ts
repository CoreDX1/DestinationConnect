export interface BaseReponse<T> {
    success?: boolean  
    message?: string 
    data: T
    errors: Error 
}