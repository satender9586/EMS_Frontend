import { instance } from "@/lib/Axios.interceptor";
import { LoginPayload } from "@/types/auth";
import { punchInPayload } from "@/types/attendence";
const Auth_Base = "/auth"
const Atten_Base = "/attendence"


// Add user API     
export const AddNewUserApi = async () => {
    const response = await instance.post(`${Auth_Base}/register`);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};


// User Login API   
export const loginApi  = async (data:LoginPayload)=>{
    const response = await instance.post(`${Auth_Base}/login`,data)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

// User Attendence Mark API   
export const punchInApi  = async (data:punchInPayload)=>{
    const response = await instance.post(`${Atten_Base}/check_in`,data)
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
