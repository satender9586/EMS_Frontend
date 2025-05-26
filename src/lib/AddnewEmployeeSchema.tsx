import { z } from "zod";
import { BasicInputFieldsInterface } from "@/types/inputField";

// ************************** ADD NEW EMPLOYEE

export const basicInputFields: BasicInputFieldsInterface[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
 
  {
    name: "password",
    label: "Pssword",
    placeholder: "Enter password",
    type: "password",
    
  },
  {
    name: "department",
    label: "Department",
    placeholder: "Select your Department",
    type: "select",
    options: ["Super_Admin", "Admin", "HR","IT","Sales","Digital_Marketing","Finance"],
  },
  {
    name: "role",
    label: "Role",
    placeholder: "Select your role",
    type: "select",
    options: ["Super_Admin", "Admin", "Employee"],
  },
  
  

];


export const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  department: z.string().min(2, {
    message: "Select your department",
  }),
  role: z.string().min(2, {
    message: "Select your role ",
  }),
 
})


