export interface Login {
    email: string
    password: string
}

export interface ResponseLogin {
  success: boolean
  data: Data
  message: string
  errors: any
}

interface Data {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
}
