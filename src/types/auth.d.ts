
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


// >>>>>>>>>>>>>>>>>>>>>>> UPDATE USER PROFILE INTERFACE
interface EmployeeProfilePayload {
  employee_id: string;

  first_name: string;
  last_name: string;
  date_of_birth: string; 
  gender: string;
  marital_status: string;
  blood_group: string;


  phone_number: string;
  alternative_email: string;
  address: string;
  emergency_number: string;


  bank_name: string;
  bank_number: string;
  ifsc_number: string;
  pan_number: string;
  pf_number: string;
}
