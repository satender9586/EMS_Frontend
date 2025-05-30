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
import { useParams } from 'next/navigation'
import { FcInfo } from "react-icons/fc";
import { toast } from "react-toastify"
import { useRouter } from 'next/navigation'
import { retriveEmployeeProfilesApi } from "@/services/GET_API"
import { useEffect } from "react"
import { editProfileSetDeafultFormData } from "@/utils/Organization.funtions"
import { editProfileDeautlFormField } from "@/utils/defaultStateValues"
import { EmployeeProfileAddUpdateApi } from "@/services/POST_API"



const ProfileEditPage = () => {
  const { empId } = useParams()
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {...editProfileDeautlFormField },
  })


  const { reset } = form;



  const EmployeeProfileHandler = async (empid: string) => {
    try {
      const response = await retriveEmployeeProfilesApi(empid);
      const resData = response?.data?.data;
       reset(editProfileSetDeafultFormData(resData))
    } catch (error) {
      console.log("Something went wrong while fetching employee profile!", error);
    }
  };


  const onSubmit = async (data: z.infer<typeof FormSchema>)=>{
    const {first_name,last_name,gender,marital_status,blood_group,date_of_birth,address,alternative_email,emergency_number,phone_number,bank_name,bank_number,ifsc_number,pan_number,pf_number} = data;
 
    try {
      if (!empId || typeof empId !== "string") {
        throw new Error("Employee ID is required and must be a string");
      }

      const response = await EmployeeProfileAddUpdateApi({first_name,last_name,gender,marital_status,blood_group,date_of_birth,address,alternative_email,
        emergency_number,
        phone_number,
        bank_name,
        bank_number,
        ifsc_number,
        pan_number,
        pf_number,
        employee_id: empId,
      });

      toast("Profile updated successfully!", { autoClose: 500 });
      router.push("/organization");
      reset();
    } catch (error) {
      console.error("Error updating employee info:", error);
    }
  }


  useEffect(() => {
    if (typeof empId === 'string') {
      EmployeeProfileHandler(empId)
    }
  }, [empId])




  return (
    <Layout>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className="border bg-white rounded-sm border-[#E5E5E5] p-3">
              <div className="flex items-start space-x-2">
                <FcInfo size={20} />
                <span className='font-sans text-sm'>
                  Basic Infomation
                </span>
              </div>
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
              <div className="flex items-start space-x-2">
                <FcInfo size={20} />
                <span className='font-sans text-sm'>
                  Contact Infomation
                </span>
              </div>
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
              <div className="flex items-start space-x-2">
                <FcInfo size={20} />
                <span className='font-sans text-sm'>
                  Bank Infomation
                </span>
              </div>
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
            <div className="mt-2.5 gap-2 flex" >
              <Button type={"submit"} className="bg-blue-500 hover:bg-none">Update </Button>

            </div>
          </form>
        </Form>
      </div>
    </Layout>

  )
}

export default ProfileEditPage



