"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputTextField from "@/components/InputTextField"
import SelectOptionField from "@/components/SelectOptionField"
import { AddCompanyHolidayApi } from "@/services/POST_API"
import { FcInfo } from "react-icons/fc";
import { toast } from "react-toastify"
import { AddCompanyHolidayInputField, HolidayFieldFormSchema } from "@/lib/AddHolidaysSchema"



interface holidayInterface{
  setOpen:(open: boolean) => void,
  
}

const AddHolidays:React.FC<holidayInterface> = ({setOpen}) => {

  const form = useForm<z.infer<typeof HolidayFieldFormSchema>>({
    resolver: zodResolver(HolidayFieldFormSchema),
    defaultValues: {
      holiday_name: "",
      description: "",
      start_date: "",
      end_date: "",
    },
  });

  const { reset } = form;

  async function onSubmit(data: z.infer<typeof HolidayFieldFormSchema>) {
    try {
      const response = await AddCompanyHolidayApi(data);
      const status = response?.status;
      toast.success("Holiday add successfully!..", { autoClose: 1000 });
      setOpen(false)
      reset();
    } catch (error: any) {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || "Something went wrong";

      if (status === 400) {
        toast.warning(message, { autoClose: 1000 });
      } else {
        toast.error("Failed to Holiday. Please try again.");
      }
      console.error("Error in Holiday API:", error);
    }
  }




  return (

    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <div className="border bg-white rounded-sm border-[#E5E5E5] p-3">
            <div className="grid mt-2 grid-cols-2 gap-4">
              {
                AddCompanyHolidayInputField?.map(({ name, label, placeholder, type, options }) =>
                  type === "text" || type == "date" || type == "number" || type == "email" || type == "password" ? (
                    <InputTextField
                      key={name}
                      form={form}
                      name={name}
                      label={label}
                      type={type}
                      placeholder={placeholder}
                    />
                  ) : type === "select" ? (
                    <SelectOptionField
                      key={name}
                      form={form}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                      options={options || []}
                    />
                  ) : null
                )
              }
            </div>
          </div>
          <div className="flex gap-1">
            <Button variant={"outline"} onClick={()=>setOpen(false)} type="button" className="mt-2 ">Cancel</Button>
            <Button type="submit" className="mt-2 ">Submit</Button>
          </div>
        </form>
      </Form>
    </div>


  )
}

export default AddHolidays