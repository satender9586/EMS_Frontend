"use client"
import Layout from "@/components/common_layout/Layout"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputTextField from "@/components/InputTextField"
import { basicInputFields, FormSchema } from "@/lib/UpdateEmployeeSchema"
import SelectOptionField from "@/components/SelectOptionField"
import { editEmployeePersonalApi,editEmployeeContactApi,editEmployeeBankApi } from "@/services/POST_API"
import { useParams } from 'next/navigation'



const ProfileEditPage = () => {
  const {empId} = useParams()


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      gender: "",
      marital_status: "",
      blood_group: "",
      date_of_birth: "",
      phone_number: "",
      alternative_email: "",
      emergency_number: "",
      address: "",
      bank_name: "",
      bank_number: "",
      ifsc_number: "",
      pan_number: "",
      pf_number: ""
    },
  })

  
async function onSubmit(data: z.infer<typeof FormSchema>) {
  try {
    const {
      first_name, last_name, gender, marital_status, blood_group, date_of_birth,
      address, alternative_email, emergency_number, phone_number,
      bank_name, bank_number, ifsc_number, pan_number, pf_number
    } = data;

  
    const [personalRes, contactRes, bankRes] = await Promise.all([
      editEmployeePersonalApi({ first_name, last_name, gender, marital_status, blood_group, date_of_birth,employee_id:empId }),
      editEmployeeContactApi({ address, alternative_email, emergency_number, phone_number,employee_id:empId }),
      editEmployeeBankApi({ bank_name, bank_number, ifsc_number, pan_number, pf_number,employee_id:empId })
    ]);
    console.log("Personal updated:", personalRes);
    console.log("Contact updated:", contactRes);
    console.log("Bank updated:", bankRes);

  } catch (error) {
    console.error("Error updating employee info:", error);
  }
}



  return (
    <Layout>
      <div className="w-full"> 
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className="border bg-white rounded-sm border-[#E5E5E5] p-3">
              <h1 className="text-[14px]">Personal </h1>
              <div className="grid mt-2 grid-cols-3 gap-4">
                {
                  basicInputFields?.slice(0, 6)?.map(({ name, label, placeholder, type, options }) =>
                    type === "text" || type == "date" || type == "number" || type == "email" ? (
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
            <div className="border mt-2 bg-white rounded-sm border-[#E5E5E5] p-3">
              <h1 className="text-[14px]">Contact </h1>
              <div className="grid mt-2 grid-cols-3 gap-4">
                {
                  basicInputFields?.slice(6, 10)?.map(({ name, label, placeholder, type, options }) =>
                    type === "text" || type == "date" || type == "number" || type == "email" ? (
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
            <div className="border mt-2 bg-white rounded-sm border-[#E5E5E5] p-3">
              <h1 className="text-[14px]">Bank Details </h1>
              <div className="grid mt-2 grid-cols-3 gap-4">
                {
                  basicInputFields?.slice(10)?.map(({ name, label, placeholder, type, options }) =>
                    type === "text" || type == "date" || type == "number" || type == "email" ? (
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </Layout>

  )
}

export default ProfileEditPage



