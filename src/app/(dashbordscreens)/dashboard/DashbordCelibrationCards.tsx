"use client";
import React, { useEffect, useState } from 'react';
import { GrAnnounce } from "react-icons/gr";
import { FaBirthdayCake } from "react-icons/fa";
import { retriveCelebrationApi } from '@/services/GET_API';
import { birthDayDateFormate } from '@/utils/Methods';
import { wordCapitalize } from '@/utils/Methods';

const DashbordCelibrationCards = () => {
  const [celebration, setCelebration] = useState<[]>([]);

  const retriveCelebrationHandler = async () => {
    try {
      const response = await retriveCelebrationApi();
      if (response.status === 200) {
        const data = response?.data?.data?.reverse() || [];
        setCelebration(data);
      } else {
        setCelebration([]);
      }
    } catch (error) {
      console.log("Error fetching celebration API:", error);
    }
  };

  useEffect(() => {
    retriveCelebrationHandler();
  }, []);

 

  return (
    <div className="h-[375px] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b bg-gradient-to-r from-[#008AFF] to-[#00C6FF] text-white">
        <GrAnnounce className="text-xl" />
        <h2 className="font-semibold text-md font-sans tracking-wide">
          Celebrations
        </h2>
      </div>
      <div className="h-[calc(100%-50px)] overflow-y-auto px-4 py-3 space-y-3 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
        {celebration.length === 0 ? (
          <div className="text-gray-500 text-sm font-sans">No upcoming birthdays</div>
        ) : (
          celebration.map((item: any, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-[13px] text-gray-800 hover:bg-gray-50 px-1  rounded-md transition-all duration-150"
            >
              <div className="flex items-center gap-2">
                <FaBirthdayCake className="text-pink-500 text-[12px]" />
                <span className="font-[10px]">{wordCapitalize(item.name)}</span>
              </div>
              <span className="text-gray-500 font-light text-[10px] mt-1">
                {birthDayDateFormate(item.celebration_date)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashbordCelibrationCards;
