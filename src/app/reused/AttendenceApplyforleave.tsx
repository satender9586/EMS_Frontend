import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'


const AttendenceApplyforleave = () => {
  return (
    <div className='border border-[#E5E5E5] rounded-lg p-3'>
      <div className='flex justify-between items-center'>
        <h1 className=" font-semibold text-sm  tracking-wide flex items-center space-x-2">
          Leave Application
        </h1>
        <h1 className="text-green-700 font-bold text-[16px] text-sm  tracking-wide flex items-center space-x-2">
          Available Leave Count : 11
        </h1>

      </div>
      <div className='grid grid-cols-2 gap-3 bg-white mt-2 p-2 rounded-sm border border-[#E5E5E5]'>
        <div>
          <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Leave Type*</h1>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Leave Request Type*</h1>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464] '>From Date*</h1>
          <Input type='date'></Input>
        </div>
        <div>
          <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>To Date*</h1>
          <Input type='date'></Input>
        </div>
        <div className='col-span-2'>
          <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Reason of Leave*</h1>
          <Textarea placeholder="Type your message here." />
        </div>
        <div className='col-span-2'>
          <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Supporting Document</h1>
          <Input type='file' ></Input>
        </div>
        <div></div>
        <div className='flex justify-end '>
          <Button className='rounded-sm min-w-[130px]'>Apply</Button>
        </div>
      </div>
    </div>

  )
}

export default AttendenceApplyforleave