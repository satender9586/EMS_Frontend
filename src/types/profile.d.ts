
   
//******************************** LOGGED USER INTERFACE FOR PROFILE PAGE > MY PROFILE TAB  */
   export interface authInfoInterface {
    
    bank_info : {
      bank_name :string,
      bank_number :string,
      ifsc_number :string,
      pan_number :string,
      pf_number :string,
    },
    contact_info:{
      address :string
      alternate_email :string
      emergency_number :string
      phone_number :string
    },
    personal_info:{
      blood_group : string,
      date_of_birth : string,
      first_name : string,
      gender : string,
      last_name : string,
      marital_status : string,
    },
    user_info:{
      department:string,
      email:string,
      employee_id:string,
      role:number,
      status: string
    }
  }