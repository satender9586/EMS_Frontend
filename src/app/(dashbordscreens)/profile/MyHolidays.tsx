"use client"
import { useEffect, useState } from "react"
import OfficialHolidaysTables from "@/components/OfficialHolidaysTables"
import { retriveAllOfficalHolidaysApi } from "@/services/GET_API";
import { officialHolidayInterface } from "@/types/holiday"




const MyHolidays = () => {
   
    const [officialHolidays, setOfficialHolidays] = useState<officialHolidayInterface[]>([])


    const retriveOfficialHolidaysHandler = async (year: string) => {
        try {
            const response = await retriveAllOfficalHolidaysApi(`year?year=${year}`)
            const data = response?.data?.data
            setOfficialHolidays(data)
        } catch (error) {
            console.log("error", error)
        }
    }


    useEffect(() => {
        const year = new Date().getFullYear().toString();
        retriveOfficialHolidaysHandler(year);
    }, []);

    return (
        <div>
            <OfficialHolidaysTables deleteHolidayHandler={false}  officialHolidays={officialHolidays} isAdminTable={false} />
        </div>
    )
}

export default MyHolidays

