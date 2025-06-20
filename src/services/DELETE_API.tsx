import { instance } from "@/utils/Axios";
import {Holiday_Base } from "@/utils/Constant";


// Delete Holiday
export const deleteHolidayApi = async (id:string) => {
    const response = await instance.delete(`${Holiday_Base}/deleteholidays/${id}`);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};

