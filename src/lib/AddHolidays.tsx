import { z } from "zod";
import { BasicInputFieldsInterface } from "@/types/inputField";

// ************************** ADD NEW OFFICIAL COMPANY HOLIDAYS

export const AddCompanyHolidayInputField: BasicInputFieldsInterface[] = [
  {
    name: "holiday_name",
    label: "Holiday Name",
    placeholder: "Enter your Holiday name",
    type: "text",
  },
 
  {
    name: "start_date",
    label: "Start Date",
    placeholder: "Enter holiday date",
    type: "date",
    
  },
  {
    name: "end_date",
    label: "End Date",
    placeholder: "Enter end date",
    type: "date",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Description",
    type: "text",
  },
];


export const HolidayFieldFormSchema = z.object({
  holiday_name: z.string().min(2, {
    message: "Holiday must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  start_date: z.string().min(2, {
    message: "Select your start date",
  }),
  end_date: z.string().min(2, {
    message: "Select your end date",
  }),
 
})


