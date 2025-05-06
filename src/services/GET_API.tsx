import { instance } from "@/lib/Axios.interceptor";
const Auth_Base = "/auth"
const Atten_Base = "/attendence"

// Current Day Status check API 
// userID:string
export const punchingStatusApi  = async ()=>{
    const response = await instance.get(`${Atten_Base}/punchstatus`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
export const retriveAttendenceApi  = async (data:string)=>{
    const response = await instance.get(`${Atten_Base}/retrive_attendence/${data}`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
