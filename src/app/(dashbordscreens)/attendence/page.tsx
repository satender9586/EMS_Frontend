import React from 'react'
import Layout from '@/components/common_layout/Layout'
import AttendencePunchCards from './AttendencePunchCards'
import ShowMonthAttendenceCart from './ShowMonthAttendenceCart'

const MarkAttendence = () => {
    return (
        <Layout>
            <div className='grid grid-cols-3 gap-4  h-[100%] '>
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