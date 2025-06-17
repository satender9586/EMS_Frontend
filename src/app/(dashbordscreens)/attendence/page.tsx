"use client"
import React from 'react';
import Layout from '@/components/common_layout/Layout';
import AttendencePunchCards from './AttendencePunchCards';
import ShowMonthAttendenceCart from './ShowMonthAttendenceCart';
import { LuPartyPopper } from "react-icons/lu";

const MarkAttendence = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h1 className="text-sm sm:text-base font-medium tracking-wide flex items-center gap-3 text-gray-800">
          <LuPartyPopper className="text-[#EDA02B]" size={32} />
          <span className="font-sans">
            Every great day starts with a single punch. Let&apos;s make today count!
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5  ">
        <div >
          <AttendencePunchCards />
        </div>
        <div>
          <ShowMonthAttendenceCart />
        </div>
      </div>
    </Layout>
  );
};

export default MarkAttendence;
