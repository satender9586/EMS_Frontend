
import { instance } from "@/lib/Axios.interceptor";
import { EmployeeProfilePayload, LoginPayload,addNewUserPayload } from "@/types/auth";
import { leaveActionPayload, leaveRequestPayload, addOfficialHolidayPayload } from "@/types/leave";
const Leave_Base = "leave"
const Auth_Base = "/auth"
const Atten_Base = "/attendence"
const Holiday_Base = "/holiday"


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


// update complete profile 
export const EmployeeProfileAddUpdateApi = async (payloadData:EmployeeProfilePayload) => {
    const response = await instance.post(`${Auth_Base}/completeProfile`, payloadData);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};

// apply for leave request 
export const LeaveRequestApi = async (payloadData:leaveRequestPayload) => {
    const response = await instance.post(`${Leave_Base}/leave-request`, payloadData);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};

export const LeaveActionApi = async (payloadData:leaveActionPayload) => {
    const response = await instance.post(`${Leave_Base}/approve-leave/${payloadData?.leaveId}`,{action:payloadData.action});
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};
export const AddCompanyHolidayApi = async (payloadData:addOfficialHolidayPayload) => {
    const response = await instance.post(`${Holiday_Base}/addHolidays`,payloadData);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};
