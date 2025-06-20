import { instance } from "@/lib/Axios.interceptor";
import axios from "axios";
const Auth_Base = "/auth"
const Atten_Base = "/attendence"
const leave_Base = "leave"
const Admin_Base = "admin"
const Holiday_Base = "/holiday"


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

export const retriveAttendenceSummaryApi  = async (data:any)=>{
    const response = await instance.get(`${Atten_Base}/monthly-summary?${data}`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
export const allEmployeeListApi  = async ()=>{
    const response = await instance.get(`admin/retriveEmployees`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
export const loggedInfoApi  = async ()=>{
    const response = await instance.get(`/auth/authinfo`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

export const retriveMyLeavesApi  = async ()=>{
    const response = await instance.get(`/${leave_Base}/myleaves`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}
export const retriveEmployeeProfilesApi  = async (paramsId : string)=>{
    const response = await instance.get(`/${Admin_Base}/retriveEmployeeProfile/${paramsId}`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

export const retriveAllRequestedLeavesApi  = async (paramsId : string)=>{
    const response = await instance.get(`/${leave_Base}/allleaves/${paramsId}`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

export const retriveAllOfficalHolidaysApi  = async (paramsyear : string)=>{
    const response = await instance.get(`${Holiday_Base}/retriveHolidays/${paramsyear}`)
    if(response.status !==200){
        throw new Error("something is wrong!")
    }
    return response;
}

