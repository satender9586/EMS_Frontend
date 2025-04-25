import { instance } from "@/lib/Axios.interceptor";
import { punchOutPayload } from "@/types/attendence";
const Atten_Base = "/attendence"



// Add user API     
export const punchOutApi = async (data:punchOutPayload) => {
    const response = await instance.patch(`${Atten_Base}/check_out`,data);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};
