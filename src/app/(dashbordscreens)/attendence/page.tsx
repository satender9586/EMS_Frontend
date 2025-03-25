import React from 'react'
import Layout from '@/components/common_layout/Layout'
import AttendencePunchCards from './AttendencePunchCards'
import ShowMonthAttendenceCart from './ShowMonthAttendenceCart'

const MarkAttendence = () => {
    return (
        <Layout>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full'>
                <div>
                    <AttendencePunchCards />
                </div>
                <div>
                    <ShowMonthAttendenceCart />
                </div>
                <div>
                    {/* This div can be used for future content */}
                </div>
            </div>
        </Layout>
    )
}

export default MarkAttendence
