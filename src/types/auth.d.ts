

export interface LoginPayload {
    email: string
    password: string
  }
  
  export interface LoginResponse {
    success: boolean
    token?: string
    message?: string
  }
  
  export interface UserAuthPayload {
    email:string,
    status:string,
    role:string,
    employee_id:string
}
