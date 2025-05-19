
"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useEffect, useState } from 'react'
import { retriveAttendenceSummaryApi } from '@/services/GET_API';
import { getMonthStartAndEndDates } from '@/utils/methods';


const ShowMonthAttendenceCart = () => {

  const [attendanceData, setAttendanceData]=useState({Absent:"",Halfday:"",Leave:"",OfficialHoliday:"",Present:"",Weekend:""})

  const retriveAttendenceSummaryHandler = async ()=>{
    try {
      const response = await retriveAttendenceSummaryApi(`startDate=2025-05-01&endDate=${getMonthStartAndEndDates().currentDate}`)
      const {Absent,Halfday,Leave,OfficialHoliday,Present,Weekend}=response?.data?.data;
      setAttendanceData({...attendanceData,Absent,Halfday,Leave,OfficialHoliday,Present,Weekend})
      // console.log("resposne",response.data.data)
    } catch (error) {
      console.log("something is wrong!")
    }
  }


  useEffect(()=>{
   retriveAttendenceSummaryHandler()
  },[])



  return (
    <div className='bg-[#F2F3F6]   hover:shadow-xl border border-[#E5E5E5] rounded-lg p-3 '>
      <div className='flex'>
        <h1 className="font-semibold text-sm  tracking-wide flex items-center space-x-2">
          Monthly Attendence
        </h1>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">January</SelectItem>
              <SelectItem value="dark">Feburay</SelectItem>
              <SelectItem value="system">March</SelectItem>
            </SelectContent>
          </Select>

        </div>
      </div>
      <div className='bg-white mt-2 p-2 rounded-sm border border-[#E5E5E5]'>
        <div>
          <div className='py-2 grid grid-cols-2 '>
            <div className='flex flex-col items-center border-r border-[#E5E5E5]'>
              <h1 className='font-[500] font-sans text-green-500'>Present</h1>
              <div className="text-3xl font-sans text-[#7A7A7A]">{attendanceData?.Present || 0}</div>
             
            </div>
            <div className='flex flex-col items-center '>
              <h1 className='font-[500] font-sans text-red-500'>Absent</h1>
              <h1 className='text-3xl font-sans text-[#7A7A7A]'>{attendanceData?.Absent || 0}</h1>
             
            </div>
            <div className='flex border-t flex-col items-center border-r border-[#E5E5E5]'>
              <h1 className='font-[500] font-sans text-blue-400 mt-2'>Leave</h1>
              <h1 className='text-3xl font-sans text-[#7A7A7A]'>{attendanceData?.Leave || 0}</h1>
             
            </div>
            <div className='flex flex-col border-t items-center  '>
              <h1 className='font-[500] font-sans text-pink-300 mt-2'>Office Holiday</h1>
              <h1 className='text-3xl font-sans text-[#7A7A7A]'>{attendanceData?.OfficialHoliday || 0}</h1>
             
            </div>
            <div className='flex border-t flex-col items-center border-r border-[#E5E5E5]'>
              <h1 className='font-[500] font-sans text-blue-400 mt-2'>Weekend</h1>
              <h1 className='text-3xl font-sans text-[#7A7A7A]'>{attendanceData?.Weekend || 0}</h1>
             
            </div>
            <div className='flex flex-col border-t items-center  '>
              <h1 className='font-[500] font-sans text-pink-300 mt-2'>Halfday</h1>
              <h1 className='text-3xl font-sans text-[#7A7A7A]'>{attendanceData?.Halfday || 0}</h1>
             
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ShowMonthAttendenceCart