import React from 'react'
import Layout from '@/components/common_layout/Layout'
import AttendencePunchCards from './AttendencePunchCards'
import ShowMonthAttendenceCart from './ShowMonthAttendenceCart'
import { LuPartyPopper } from "react-icons/lu";

const MarkAttendence = () => {  
    return (
        <Layout>
            <div className=''>
                <h1 className=" font-semibold text-sm  tracking-wide flex items-center space-x-2">
                    <LuPartyPopper className="text-[#EDA02B]" size={40} />
                    <span className='font-sans font-[400]'>Every great day starts with a single punch. Let's make today count!</span>
                </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full'>
                <div>
                    <AttendencePunchCards />
                </div>
                <div>
                    {/* <ShowMonthAttendenceCart /> */}
                </div>
                <div>
                </div>
            </div>
        </Layout>
    )
}

export default MarkAttendence
