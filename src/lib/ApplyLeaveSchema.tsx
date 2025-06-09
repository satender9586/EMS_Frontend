
import { z } from "zod";
import { BasicInputFieldsInterface } from "@/types/inputField";

// ************************** APPLY FOR LEAVE REQUEST 

export const leaveRequestInputFields: BasicInputFieldsInterface[] = [
  {
    name: "leave_type",
    label: "Leave Types",
    placeholder: "Select your leave",
    type: "select",
    options: ["Sick"],
  },
  {
    name: "start_date",
    label: "Start Date",
    placeholder: "Select start date",
    type: "date",
  },
 
  {
    name: "end_date",
    label: "End Date",
    placeholder: "Select end date",
    type: "date",
  },
  
  {
    name: "reason",
    label: "Reason",
    placeholder: "Enter your reason!",
    type: "text",
  },
  
  

];


export const LeaveRequestFormSchema = z.object({
  leave_type: z.string().min(2, {
    message: "Select leave type",
  }),
  start_date: z.string().min(2, {
    message: "Select start date",
  }),
  end_date: z.string().min(2, {
    message: "Select end date",
  }),
  reason: z.string().min(2, {
    message: "Reason must be at least 2 characters.",
  }),
 
})


