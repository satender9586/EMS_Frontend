import { instance } from "@/lib/Axios.interceptor";
import { LoginPayload } from "@/types/auth";
const Auth_Base = "/auth"


//  Add user API     
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

