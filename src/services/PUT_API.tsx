import { instance } from "@/lib/Axios.interceptor";
import { EmployeeProfilePayload } from "@/types/auth";
import axios from "axios";

const Auth_Base = "/auth"


// create new user API     
export const EmployeeProfileAddUpdateApi = async (payloadData:EmployeeProfilePayload) => {
    const response = await axios.post(`http://localhost:8080/api/v1/auth/completeProfile`, payloadData);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};



