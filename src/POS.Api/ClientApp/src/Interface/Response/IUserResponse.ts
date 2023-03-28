export interface IUserResponse {
  success: boolean
  data: Data
  message: string
  errors: Error
}

interface Error {
  email : Array<string>
  password : Array<string>
}

interface Data {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
}
