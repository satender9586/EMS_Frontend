import { z } from "zod";
import { BasicInputFieldsInterface } from "@/types/inputField";





export const LoginBasicInputFields: BasicInputFieldsInterface[] = [
   {
     name: "email",
     label: "Email",
     placeholder: "Enter your email",
     type: "email",
   },
   {
     name: "password",
     label: "Password",
     placeholder: "Enter your password",
     type: "password",
   },
];



export const LoginFormSchema = z.object({
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
    // .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." }),
});





