import { type ILoginResponseDto } from "~/Interface/Response/ILoginResponseDto"

export interface BaseReponse<T> {
    success?: boolean
    message?: string
    data: T
    errors: ILoginResponseDto
}
