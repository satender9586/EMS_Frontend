import { Button } from '@/components/ui/button';
import React from 'react'
import { LuPartyPopper } from "react-icons/lu";

const AttendencePunchCards = () => {
  return (
    <div className=' hover:shadow-xl border border-[#E5E5E5] bg-[#F2F3F6] rounded-lg p-3'>
      <h1 className=" font-semibold text-sm  tracking-wide flex items-center space-x-2">
        <LuPartyPopper className="text-[#EDA02B]" size={40} />
        <span className='font-sans font-[400]'>Every great day starts with a single punch. Let's make today count!</span>
      </h1>
      <div className='bg-white mt-2 p-2 rounded-sm border border-[#E5E5E5]'>
        <div>
          <h1 className='text-[16px]'>Monday, 17 Mar 2025</h1>
          <h1 className='text-[15px] font-sans text-[#7A7A7A]'>Shift Timing - (09:30 - 17:30)</h1>
          <div className='py-2 grid grid-cols-3 border-t-1 border-[#E5E5E5] mt-2'>
            <div className='flex flex-col items-center border-r border-[#E5E5E5]'>
              <h1 className='font-[500] font-sans'>Check In</h1>
              <h1 className='font-sans text-[#7A7A7A]'>09:15</h1>
              <h1 className='font-sans text-[#7A7A7A]'>AM</h1>
            </div>
            <div className='flex flex-col items-center border-r border-[#E5E5E5]'> <h1 className='font-[500] font-sans'>Check out</h1>
              <h1 className='font-sans text-[#7A7A7A]'>11:15</h1>
              <h1 className='font-sans text-[#7A7A7A]'>PM</h1>
            </div>
            <div className='flex flex-col items-center'>  <h1 className='font-[500] font-sans'>Total Hours</h1>
              <h1 className='font-sans text-[#7A7A7A]'>00h:15m</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <Button className='w-full rounded-sm'>Punch In</Button>
      </div>
    </div>

  )
}

export default AttendencePunchCards