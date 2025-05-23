import { instance } from "@/lib/Axios.interceptor";
import { LoginPayload,addNewUserPayload } from "@/types/auth";
import { editBankInfoPayload, editContactInfoPayload, editPersonalInfoPayload } from "@/types/profile";
const Auth_Base = "/auth"
const Atten_Base = "/attendence"


// create new user API     
export const AddNewUserApi = async (payloadData:addNewUserPayload) => {
    const response = await instance.post(`${Auth_Base}/register`,payloadData);
    if (response.status !== 201) {
        throw new Error("Something is wrong!");
    }
    return response;
};


// User Login API   
export const loginApi  = async (payloadData:LoginPayload)=>{
    const response = await instance.post(`${Auth_Base}/login`,payloadData)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
// User Login API   
export const loggedOutApi  = async ()=>{
    const response = await instance.post(`${Auth_Base}/logout`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

// Refesh Token Generate API   
export const refreshTokenGenerateApi  = async (payloadData:string)=>{
    const response = await instance.post(`${Auth_Base}/refreshtoken`,payloadData)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

// User Attendence Mark API   
export const punchInApi  = async ()=>{
    const response = await instance.post(`${Atten_Base}/check_in`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

// user attendence list 
export const AttendenceTableApi  = async ()=>{
    const response = await instance.post(`${Atten_Base}/retrive_attendence`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
// update employee profile details 
export const editEmployeePersonalApi  = async (payloadData:editPersonalInfoPayload)=>{
    const response = await instance.put(`${Auth_Base}/peronal-details`,payloadData)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
// update employee contact details 
export const editEmployeeContactApi  = async (payloadData: editContactInfoPayload)=>{
    const response = await instance.put(`${Auth_Base}/contact-details`,payloadData)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

// update employee bank details 
export const editEmployeeBankApi  = async (payloadData:editBankInfoPayload)=>{
    const response = await instance.put(`${Auth_Base}/bank-details`,payloadData)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
