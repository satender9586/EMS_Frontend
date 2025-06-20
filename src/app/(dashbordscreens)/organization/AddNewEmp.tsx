"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { NewEmployeeInputFields, NewEmployeeFormSchema } from "@/lib/AddnewEmployeeSchema"
import InputTextField from "@/components/InputTextField"
import SelectOptionField from "@/components/SelectOptionField"
import { AddNewUserApi } from "@/services/POST_API"
import { FcInfo } from "react-icons/fc";
import { toast } from "react-toastify"


interface addNewEmployeeInterface {
  setOpen: (open: boolean) => void,
}

const AddNewEmp: React.FC<addNewEmployeeInterface> = ({ setOpen }) => {
  const form = useForm<z.infer<typeof NewEmployeeFormSchema>>({
    resolver: zodResolver(NewEmployeeFormSchema),
    defaultValues: {
      email: "",
      password: "",
      department: "",
      role: "",
    },
  });

  const { reset } = form;

  async function onSubmit(data: z.infer<typeof NewEmployeeFormSchema>) {
    try {
      const response = await AddNewUserApi(data);
      const status = response?.status;
      console.log("Response status:", status);
      setOpen(false)
      toast.success("User created successfully", { autoClose: 1000 });
      reset();
    } catch (error: any) {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || "Something went wrong";
      if (status === 400) {
        toast.warning(message, { autoClose: 1000 });
      } else {
        toast.error("Failed to create user. Please try again.");
      }
      console.error("Error in create new user API:", error);
    }
  }


  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <div className="border bg-white rounded-sm border-[#E5E5E5] p-3">

            <div className="grid  grid-cols-2 gap-4">
              {
                NewEmployeeInputFields?.map(({ name, label, placeholder, type, options }) =>
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
          <div className="flex gap-2 mt-2">
            <Button variant={"outline"} onClick={() => setOpen(false)} type="button" className="mt-2 font-sans">Cancel</Button>
            <Button type="submit" className="mt-2 font-sans " >Submit</Button>
          </div>
        </form>
      </Form>
    </div>


  )
}

export default AddNewEmp