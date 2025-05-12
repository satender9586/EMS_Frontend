"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import { punchInApi } from '@/services/POST_API';
import { punchingStatusApi } from '@/services/GET_API';
import { punchOutApi } from '@/services/PATCH_API';
import { currentDateAndTime } from '@/utils/methods';

interface punchingResponse {
  punch_date: "",
  punch_in: "",
  punch_out: "",
  hours_worked: ""
}

const AttendencePunchCards = () => {

  const [isPunchIn, setIsPunchIn] = useState<boolean>(false)
  const [punchingData, setPuncingData] = useState<punchingResponse>({ punch_date: "", punch_in: "", punch_out: "", hours_worked: "" })

  // punch in api integration 
  const punchInHandler = async () => {
    try {
      const response = await punchInApi()
      if (response.status == 200) {
        setIsPunchIn(true)
      }
    } catch (error) {
      console.log(error)
      setIsPunchIn(true)
    }
  }

  // punch out api integration 
  const punchOutHandler = async () => {
    try {
      const response = await punchOutApi()
      if (response.status == 200) {
        setIsPunchIn(false)
      }
    } catch (error) {
      console.log(error)

    }
  }
  
  // punching status check 
  const currentAttendencStatus = async () => {
    try {
      const response = await punchingStatusApi()
      if (response?.status === 200) {
        setIsPunchIn(true)
        const { punch_date, punch_in, punch_out, hours_worked } = response.data?.punchData
        setPuncingData({ ...punchingData, punch_in, punch_out, punch_date, hours_worked })
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    currentAttendencStatus()
  }, [isPunchIn])



  return (
    <>
      <div className=' hover:shadow-xl border border-[#E5E5E5] bg-[#F2F3F6] rounded-lg p-3'>
        <div className='bg-white mt-2 p-2 rounded-sm border border-[#E5E5E5]'>
          <div>
            <h1 className='text-[16px]'>{currentDateAndTime()}</h1>
            <h1 className='text-[15px] font-sans text-[#7A7A7A]'>Shift Timing - (09:30 - 17:30)</h1>
            <div className='py-2 grid grid-cols-3 border-t-1 border-[#E5E5E5] mt-2'>
              <div className='flex flex-col items-center p-2 border-r border-[#E5E5E5]'>
                <h1 className='font-[500] font-sans'>Check In</h1>
                <h1 className='font-sans text-[#7A7A7A]'>{punchingData?.punch_in || "00:00:00"}</h1>
              </div>
              <div className='flex flex-col items-center p-2 border-r border-[#E5E5E5]'> <h1 className='font-[500] font-sans'>Check out</h1>
                <h1 className='font-sans text-[#7A7A7A]'>{punchingData?.punch_out || "00:00:00"}</h1>
              </div>
              <div className='flex flex-col items-center p-2'>  <h1 className='font-[500] font-sans'>Total Hours</h1>
                <h1 className='font-sans text-[#7A7A7A]'>{punchingData?.hours_worked || "00:00:00"}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          {
            isPunchIn ? <Button
              disabled={!!punchingData?.punch_out && punchingData.punch_out !== "00:00:00"}
              className='w-full rounded-sm  bg-red-500'
              onClick={punchOutHandler}
            >
              Punch Out
            </Button>
              :
              <Button className='w-full rounded-sm bg-green-600' onClick={punchInHandler}>Punch In</Button>
          }
        </div>
      </div>
    </>
  );
};

export default AttendencePunchCards;
