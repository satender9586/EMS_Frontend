import { instance } from "@/lib/Axios.interceptor";
const Auth_Base = "/auth"
const Atten_Base = "/attendence"

// Current Day Status check API 

export const punchingStatusApi  = async (userID:string)=>{
    const response = await instance.get(`${Atten_Base}/punchstatus/${userID}`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}