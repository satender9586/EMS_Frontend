import { z } from "zod";
import { BasicInputFieldsInterface } from "@/types/inputField";

// ************************** ADD NEW EMPLOYEE

export const NewEmployeeInputFields: BasicInputFieldsInterface[] = [
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
  //  {
  //   name: "designation",
  //   label: "Designation",
  //   placeholder: "Select your designation",
  //   type: "select",
  //   options: ["React Js Developer", "Frontend Developer"],
  // },
  

];


export const NewEmployeeFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Email must be at least 5 characters long." })
    .email({ message: "Please enter a valid email address." }),

  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long." })
    // .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
    // .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
    // .regex(/[0-9]/, { message: "Password must contain at least one number." })
    // .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." })
    ,

  department: z
    .string()
    .min(2, { message: "Please select your department." })
    .refine(value => value !== "default", { message: "Please select a valid department." }),

  role: z
    .string()
    .min(2, { message: "Please select your role." })
    .refine(value => value !== "default", { message: "Please select a valid role." }),
  // designation: z
  //   .string()
  //   .min(3, { message: "Designation must be at least 3 characters long." })
  //   .refine(value => value !== "default", { message: "Please select a valid designation." }),
});


