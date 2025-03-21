import React from 'react'
import Layout from '@/app/common/Layout'
import AttendencePunchCards from '@/app/reused/AttendencePunchCards'
import ShowMonthAttendenceCart from '@/app/reused/ShowMonthAttendenceCart'


const MarkAttendence = () => {
    return (
        <Layout>
            <div className='grid grid-cols-3 gap-4 border  border-[#E5E5E5] bg-[#FAFAFA] rounded-sm h-[100%] p-3'>
                <div>
                    <AttendencePunchCards />
                  
                </div>
                <div>
                <ShowMonthAttendenceCart />
                </div>
                <div >
                   
                </div>
            </div>
        </Layout>
    )
}

export default MarkAttendence