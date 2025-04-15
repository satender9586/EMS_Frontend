import { instance } from "@/lib/Axios.interceptor";
const Auth_Base = "/auth"


//  Add user API
export const AddNewUserApi = async () => {
    const response = await instance.post(`${Auth_Base}/register`);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};



