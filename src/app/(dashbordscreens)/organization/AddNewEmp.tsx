"use client"
import Layout from "@/components/common_layout/Layout"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputTextField from "@/components/InputTextField"
import { basicInputFields, FormSchema } from "@/lib/AddnewEmployeeSchema"
import SelectOptionField from "@/components/SelectOptionField"




const AddNewEmp = () => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      department: "",
      role: "",
     
    },
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data)
  }



  return (
 
      <div className="w-full"> 
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className="border bg-white rounded-sm border-[#E5E5E5] p-3">
              <h1 className="text-[14px]">Basic Details </h1>
              <div className="grid mt-2 grid-cols-3 gap-4">
                {
                  basicInputFields?.map(({ name, label, placeholder, type, options }) =>
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
  
          
            <Button type="submit" className="mt-2 ">Submit</Button>
          </form>
        </Form>
      </div>


  )
}

export default AddNewEmp