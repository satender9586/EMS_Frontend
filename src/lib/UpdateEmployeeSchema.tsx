import { z } from "zod";
import { BasicInputFieldsInterface } from "@/types/inputField";

// ************************** UPDATE NEW EMPLOYEE INPUT FIELDS

export const basicInputFields: BasicInputFieldsInterface[] = [
  {
    name: "first_name",
    label: "First Name",
    placeholder: "Enter your First Name",
    type: "text",
  },
  {
    name: "last_name",
    label: "Last Name",
    placeholder: "Enter your Last Name",
    type: "text",
  },
  {
    name: "gender",
    label: "Gender",
    placeholder: "Select your Gender",
    type: "select",
    options: ["Male", "Female"],
  },
  {
    name: "marital_status",
    label: "Marital Status",
    placeholder: "Select your Marital Status",
    type: "select",
    options: ["single", "married", "divorced"],
  },
  {
    name: "blood_group",
    label: "Blood Group",
    placeholder: "Select your Blood Group",
    type: "select",
    options: ["A", "B", "O","O+"],
  },
  {
    name: "date_of_birth",
    label: "Date of Birth",
    placeholder: "Select your Date of Birth",
    type: "date",
  },
  {
    name: "phone_number",
    label: "Contact Number",
    placeholder: "Please enter your phone number",
    type: "number",
  },
  {
    name: "alternative_email",
    label: "Alternative Email",
    placeholder: "Please enter your email",
    type: "email",
  },
  {
    name: "emergency_number",
    label: "Emergency Number",
    placeholder: "Please enter your Emergency Number",
    type: "number",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Please enter your address",
    type: "text",
  },
  {
    name: "bank_name",
    label: "Bank Name",
    placeholder: "Please enter bank name",
    type: "text",
  },
  {
    name: "bank_number",
    label: "Enter Bank Number",
    placeholder: "Please enter bank number",
    type: "number",
  },
  {
    name: "ifsc_number",
    label: "Enter Bank IFSC",
    placeholder: "Please enter ifsc number",
    type: "text",
  },
  {
    name: "pan_number",
    label: "Enter Pan Number",
    placeholder: "Please enter pan number",
    type: "text",
  },
  {
    name: "pf_number",
    label: "Enter PF Number",
    placeholder: "Please enter PF number",
    type: "number",
  },

];




export const FormSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters long.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters long.",
  }),
  gender: z.string().min(1, {
    message: "Please select your gender.",
  }),
  marital_status: z.string().min(1, {
    message: "Please select your marital status.",
  }),
  blood_group: z.string().min(1, {
    message: "Please select your blood group.",
  }),
  date_of_birth: z.string().nonempty({
    message: "Date of birth is required.",
  }),
  phone_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must be at most 15 digits." })
    .regex(/^\d+$/, { message: "Phone number must contain only digits." }),
  alternative_email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  emergency_number: z
    .string()
    .min(10, { message: "Emergency number must be at least 10 digits." })
    .max(15, { message: "Emergency number must be at most 15 digits." })
    .regex(/^\d+$/, { message: "Emergency number must contain only digits." }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters long.",
  }),
  bank_name: z.string().min(2, {
    message: "Bank name must be at least 2 characters long.",
  }),
  bank_number: z
    .string()
    .min(6, { message: "Bank account number must be at least 6 digits." })
    .regex(/^\d+$/, { message: "Bank account number must contain only digits." }),
  ifsc_number: z
    .string()
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, {
      message: "Enter a valid IFSC code (e.g., ABCD0123456).",
    }),
  pan_number: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, {
      message: "Enter a valid PAN number (e.g., ABCDE1234F).",
    }),
  pf_number: z
    .string()
    .min(4, { message: "PF number must be at least 4 characters long." }),
});



