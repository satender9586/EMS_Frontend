

export interface LoginPayload {
    email: string
    password: string
  }
  
  export interface LoginResponse {
    success: boolean
    token?: string
    message?: string
  }
  