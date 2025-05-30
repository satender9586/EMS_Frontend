"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import AddHolidays from "../AddHolidays"
import { useEffect, useState } from "react"
import { IoAddSharp } from "react-icons/io5";
import OfficialHolidaysTables from "@/components/OfficialHolidaysTables"
import { retriveAllOfficalHolidaysApi } from "@/services/GET_API";
import { officialHolidayInterface } from "@/types/holiday"




const CompanyHolidays = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [officialHolidays, setOfficialHolidays]=useState<officialHolidayInterface []>([])


  const retriveOfficialHolidaysHandler = async (year:string)=>{
    try {
      const response = await retriveAllOfficalHolidaysApi(`year?year=${year}`)
      const data = response?.data?.data
      setOfficialHolidays(data)
    } catch (error) {
      console.log("error",error)
    }
  }


useEffect(() => {
  const year = new Date().getFullYear().toString();
  retriveOfficialHolidaysHandler(year);
}, [open]);

  return (
    <div>
      <div className="flex justify-end ">
        <div>
          <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className={"bg-[#165DFB] text-white" }
                onClick={() => setOpen(true)}
              >
               New Holiday <IoAddSharp className="text-white"/>
              </Button>

            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Offical Holiday</AlertDialogTitle>
                <AlertDialogDescription>
                  Fill out the form below to add a  company offical holiday.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div >
                <AddHolidays  setOpen={setOpen} />
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <OfficialHolidaysTables officialHolidays={officialHolidays}/>
    </div>
  )
}

export default CompanyHolidays



