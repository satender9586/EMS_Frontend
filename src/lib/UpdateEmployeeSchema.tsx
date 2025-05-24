import { z } from "zod";
import { BasicInputFieldsInterface } from "@/types/organaization";

// ************************** UPDATE NEW EMPLOYEE

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
    message: "Firstname must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  gender: z.string().min(2, {
    message: "Select your Gender",
  }),
  marital_status: z.string().min(2, {
    message: "Select your Marital Status",
  }),
  blood_group: z.string().min(2, {
    message: "Select your Blood Group",
  }),
  date_of_birth: z.string().min(2, {
    message: "Select your Date of Birth",
  }),
  phone_number: z.string().min(10, {
    message: "Enter your phone number",
  }),
  alternative_email: z.string().min(5, {
    message: "Enter your email",
  }),
  emergency_number: z.string().min(10, {
    message: "Enter your emergency number",
  }),
  address: z.string().min(10, {
    message: "Enter your address",
  }),
  bank_name: z.string().min(2, {
    message: "Enter your bank name",
  }),
  bank_number: z.string().min(2, {
    message: "Enter your bank number",
  }),
  ifsc_number: z.string().min(2, {
    message: "Enter your ifsc number",
  }),
  pan_number: z.string().min(2, {
    message: "Enter your pan number",
  }),
  pf_number: z.string().min(2, {
    message: "Enter your pf number",
  }),
})


