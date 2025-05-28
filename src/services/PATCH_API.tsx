import { instance } from "@/lib/Axios.interceptor";
import { leaveActionPayload } from "@/types/leave";
const Atten_Base = "/attendence"
const Admin_Base = "/admin"
const Leave_Base = "/leave"

export const punchOutApi = async () => {
    const response = await instance.patch(`${Atten_Base}/check_out`);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};


export const activeInctiveApi = async (payloadData:{employeeId:string}) => {
    const response = await instance.patch(`${Admin_Base}/employeeStatusUpdate`,payloadData);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};


