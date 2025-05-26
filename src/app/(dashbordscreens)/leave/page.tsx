"use client"
import React from 'react'
import Layout from '@/components/common_layout/Layout'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputTextField from "@/components/InputTextField"
import SelectOptionField from "@/components/SelectOptionField"
import { FcInfo } from "react-icons/fc";
import { toast } from "react-toastify"
import { useRouter } from 'next/navigation'
import { leaveRequestDefaultSchema } from '@/utils/defaultStateValues'
import { leaveRequestInputFields, LeaveRequestFormSchema } from "@/lib/ApplyLeaveSchema"
import { LeaveRequestApi } from '@/services/POST_API'

const LeaveRequest = () => {

  const router = useRouter()
  const form = useForm<z.infer<typeof LeaveRequestFormSchema>>({
    resolver: zodResolver(LeaveRequestFormSchema),
    defaultValues: { ...leaveRequestDefaultSchema },
  })

  const { reset } = form;
  
  const onSubmit = async (data: z.infer<typeof LeaveRequestFormSchema>) => {
    const { leave_type, start_date, end_date, reason } = data;
    try {
      const response = await LeaveRequestApi({ leave_type, start_date, end_date, reason });
      toast("Leave applied successfully!", { autoClose: 500 });
      console.log("resposne",response)
      router.push("/profile");
      reset();
    } catch (error:any) {
      const errorres = error?.response?.data?.message || "something wrong!"
      toast.error(errorres,{autoClose:1000})
      console.error("Error updating employee info:", error);
    }
  }


  return (
    <Layout>
      <div >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className="border  rounded-sm border-[#E5E5E5] p-3">
              <div className="flex items-start space-x-2">
                <FcInfo size={20} />
                <span className='font-sans text-sm'>
                  Leave Request
                </span>
              </div>
              <div className="grid mt-2 grid-cols-3 gap-4">
                {
                  leaveRequestInputFields?.map(({ name, label, placeholder, type, options }) =>
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
              <Button type={"submit"} className="bg-blue-500 hover:bg-none">Submit </Button>
            </div>
          </form>
        </Form>
      </div>
    </Layout>

  )
}

export default LeaveRequest
