import { instance } from "@/lib/Axios.interceptor";
import { punchOutPayload } from "@/types/attendence";
const Atten_Base = "/attendence"



// Add user API     
// data:punchOutPayload
export const punchOutApi = async () => {
    const response = await instance.patch(`${Atten_Base}/check_out`);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};
