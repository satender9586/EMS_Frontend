
//******************************** LOGGED USER DEFAULT STATE OBJECT FOR PROFILE PAGE > MY PROFILE TAB  */

export const authInfoStateData = {
    bank_info: {
        bank_name: "",
        bank_number: "",
        ifsc_number: "",
        pan_number: "",
        pf_number: "",
    },
    contact_info: {
        address: "",
        alternate_email: "",
        emergency_number: "",
        phone_number: "",
    },
    personal_info: {
        blood_group: "",
        date_of_birth: "",
        first_name: "",
        gender: "",
        last_name: "",
        marital_status: "",
    },
    user_info: {
        department: "",
        email: "",
        employee_id: "",
        role: 0,
        status: "",
    },
}

//******************************** DEFAULT ORGANIZAITON > EDIT PROFILE DEFAULT FORM 

export const editProfileDeautlFormField = {
    first_name: "",
    last_name: "",
    gender: "",
    marital_status: "",
    blood_group: "",
    date_of_birth: "",
    phone_number: "",
    alternative_email: "",
    emergency_number: "",
    address: "",
    bank_name: "",
    bank_number: "",
    ifsc_number: "",
    pan_number: "",
    pf_number: ""
}

//******************************** LEAVE REQUEST DEFAULT SCHEMA 

export const leaveRequestDefaultSchema = {
    leave_type: "",
    start_date: "",
    end_date: "",
    reason: ""
}