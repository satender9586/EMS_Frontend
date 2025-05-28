import React from 'react';
import Layout from '@/components/common_layout/Layout';
import AttendencePunchCards from './AttendencePunchCards';
import ShowMonthAttendenceCart from './ShowMonthAttendenceCart';
import LeaveSummaryCart from '../leave/LeaveSummaryCart'; 
import { LuPartyPopper } from "react-icons/lu";

const MarkAttendence = () => {
  return (
    <Layout>
     
      <div className="mb-6">
        <h1 className="text-sm sm:text-base font-medium tracking-wide flex items-center gap-3 text-gray-800">
          <LuPartyPopper className="text-[#EDA02B]" size={32} />
          <span className="font-sans">
            Every great day starts with a single punch. Let&apos;s make today count!
          </span>
        </h1>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 ">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
          <AttendencePunchCards />
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
          <ShowMonthAttendenceCart />
        </div>

        {/* Optional Leave Summary (Add back when needed) */}
        {/* <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
          <LeaveSummaryCart />
        </div> */}
      </div>
    </Layout>
  );
};

export default MarkAttendence;
