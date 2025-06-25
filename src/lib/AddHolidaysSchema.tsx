import { z } from "zod";
import { BasicInputFieldsInterface } from "@/types/inputField";

// ************************** ADD NEW OFFICIAL COMPANY HOLIDAYS

export const AddCompanyHolidayInputField: BasicInputFieldsInterface[] = [
  {
    name: "holiday_name",
    label: "Holiday Name",
    placeholder: "Enter holiday name",
    type: "text",
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
    name: "description",
    label: "Description",
    placeholder: "Enter a short description",
    type: "text",
  },
];

// Schema with improved messages and date validations
export const HolidayFieldFormSchema = z
  .object({
    holiday_name: z.string().min(2, {
      message: "Holiday name must be at least 2 characters long.",
    }),
    description: z.string().min(2, {
      message: "Description must be at least 2 characters long.",
    }),
    start_date: z.string().nonempty({
      message: "Start date is required.",
    }),
    end_date: z.string().nonempty({
      message: "End date is required.",
    }),
  })
  .refine(
    (data) => new Date(data.start_date) <= new Date(data.end_date),
    {
      message: "End date must be the same or after the start date.",
      path: ["end_date"],
    }
  );
