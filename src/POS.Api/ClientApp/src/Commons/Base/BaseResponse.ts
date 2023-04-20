import { type ErrorResponseDto } from "../../Interface/Response/ErrorResponseDto"

export interface BaseReponse<T> {
    success?: boolean
    message?: string
    data: T | undefined
    errors: ErrorResponseDto
}
