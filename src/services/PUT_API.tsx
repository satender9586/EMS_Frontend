import { instance } from "@/lib/Axios.interceptor";
import { editBankInfoPayload, editContactInfoPayload, editPersonalInfoPayload } from "@/types/profile";
const Auth_Base = "/auth"

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

// update employee Bank details 
export const editEmployeeBankApi  = async (payloadData:editBankInfoPayload)=>{
    const response = await instance.put(`${Auth_Base}/bank-details`,payloadData)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}



