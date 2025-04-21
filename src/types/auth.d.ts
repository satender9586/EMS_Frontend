

export interface LoginPayload {
    username: string
    password: string
  }
  
  export interface LoginResponse {
    success: boolean
    token?: string
    message?: string
  }
  