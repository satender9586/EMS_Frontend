import { instance } from "@/lib/Axios.interceptor";
const Leave_Base = "leave"
const Auth_Base = "/auth"
const Atten_Base = "/attendence"
const Holiday_Base = "/holiday"


// Delete Holiday

export const deleteHolidayApi = async (id:string) => {
    const response = await instance.delete(`${Holiday_Base}/deleteholidays/${id}`);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};

