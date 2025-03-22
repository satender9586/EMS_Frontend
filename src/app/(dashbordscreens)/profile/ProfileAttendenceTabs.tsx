import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AttendenceApplyforleave from './AttendenceApplyforleave'

const ProfileAttendenceTabs = () => {
  return (

    <div className='  rounded-sm h-[100%]  border p-3'>
      <Tabs defaultValue="account" className="w-[100%] ">
        <TabsList>
          <TabsTrigger value="account" className='text-sm font-[popplins] '>Summary</TabsTrigger>
          <TabsTrigger value="attendence" className='text-sm font-[popplins] '>Daily Attendence</TabsTrigger>
          <TabsTrigger value="leave" className='text-sm font-[popplins] '>Leave</TabsTrigger>
          <TabsTrigger value="documents" className='text-sm font-[popplins] '>Holidays</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className='border bg-white rounded-sm p-3 border-[#E5E5E5] w-full'>
          </div>
        </TabsContent>
        <TabsContent value="attendence">
          <div className='border bg-white rounded-sm p-3 border-[#E5E5E5] w-full'>
          </div>
        </TabsContent>
        <TabsContent value="leave">
          <AttendenceApplyforleave />
        </TabsContent>
      </Tabs>
    </div>

  )
}

export default ProfileAttendenceTabs