"use client"
import React, { useEffect, useState } from 'react'
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
import { leaveRequestDefaultSchema } from '@/lib/DefaultStateValues'
import { leaveRequestInputFields, LeaveRequestFormSchema } from "@/lib/ApplyLeaveSchema"
import { LeaveRequestApi } from '@/services/POST_API'
import { allocatedLeaveBalanceSummaryApi } from '@/services/GET_API'
import { getDiffInTwoDates } from '@/utils/Methods'



const LeaveRequest = () => {
  const [leaveBalaceData, setLeaveBalaceData] = useState<any>({ remaining: 0, leave_name: "" })
  const router = useRouter()
  const form = useForm<z.infer<typeof LeaveRequestFormSchema>>({
    resolver: zodResolver(LeaveRequestFormSchema),
    defaultValues: { ...leaveRequestDefaultSchema },
  })
  const { start_date, end_date } = form.getValues()
  const selectedLeaveType = form.watch("leave_type");
  const { reset } = form;


  // check your leave balance 
  const checkYourLeaveBalanceHandler = async (leaveType: string) => {
    try {
      const response = await allocatedLeaveBalanceSummaryApi(leaveType)
      const responseData = response?.data?.data;
      const { remaining, leave_name } = responseData;
      setLeaveBalaceData({ ...leaveBalaceData, remaining, leave_name })
    } catch (error) {
      console.log("some thing error while leave balace api", error)
    }
  }

  const onSubmit = async (data: z.infer<typeof LeaveRequestFormSchema>) => {
    const { leave_type, start_date, end_date, reason } = data;
    try {
      const response = await LeaveRequestApi({ leave_type, start_date, end_date, reason });
      toast("Leave applied successfully!", { autoClose: 500 });
      console.log("resposne", response)
      router.push("/profile");
      reset();
    } catch (error: any) {
      const errorres = error?.response?.data?.message || "something wrong!"
      toast.error(errorres, { autoClose: 1000 })
      console.error("Error updating employee info:", error);
    }
  }


  useEffect(() => {
    if (selectedLeaveType && selectedLeaveType.length > 0) {
      checkYourLeaveBalanceHandler(selectedLeaveType)
    }
  }, [selectedLeaveType])



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
            <div className="mt-2.5 gap-2 flex items-center" >
              <Button
                disabled={
                  leaveBalaceData?.remaining === 0 ||
                  leaveBalaceData?.remaining < getDiffInTwoDates(start_date, end_date)
                }
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </Button>

              {
                (leaveBalaceData?.remaining > 0 && leaveBalaceData?.leave_name) ?
                  <p className='text-green-600'> Your {leaveBalaceData?.leave_name} leave balance is {leaveBalaceData?.remaining} </p>
                  : leaveBalaceData?.remaining == 0 && leaveBalaceData?.leave_name ?
                    <p className='text-red-500'> You have no more {leaveBalaceData?.leave_name} leave balance is {leaveBalaceData?.remaining} </p>
                    : null
              }
            </div>
          </form>
        </Form>
      </div>
    </Layout>

  )
}

export default LeaveRequest
