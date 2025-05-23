
// >>>>>>>>>>>>>>>>>>>>>>> REGISTER NEW USER

export interface addNewUserPayload {
    email : string,
    password:string,
    role:string,
    department:string
}

// >>>>>>>>>>>>>>>>>>>>>>> LOGIN USER : ADMIN || SUPER_ADMIN || ETC

export interface LoginPayload {
    email: string
    password: string
  }
  
export interface LoginResponse {
    success: boolean
    token?: string
    message?: string
  }
  
// >>>>>>>>>>>>>>>>>>>>>>> LOGIN USER : ADMIN || SUPER_ADMIN || ETC

 export interface UserAuthPayload {
    email:string,
    status:string,
    role:string,
    employee_id:string
}
