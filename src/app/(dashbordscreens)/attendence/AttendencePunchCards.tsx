"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { CheckInApi } from "@/services/POST_API";

const AttendencePunchCards = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [inputUserId, setInputUserId] = useState({users_id: 4})

  const handlePunchIn = async () => {
    try {
      const response = await CheckInApi(inputUserId);

      if (response && response.status === 200) {
        setSuccessMessage("Punch In successfully");
        console.log(response.data);
      } else {
        setSuccessMessage("Something went wrong.");
      }
    } catch (error) {
      setSuccessMessage("alert error. Please try again.");
    }
  };

  return (
    <>
      <div className="hover:shadow-xl border border-[#E5E5E5] bg-[#F2F3F6] rounded-lg p-3">
        <div className="bg-white mt-2 p-2 rounded-sm border border-[#E5E5E5]">
          <div>
            <h1 className="text-[16px]">Monday, 17 Mar 2025</h1>
            <h1 className="text-[15px] font-sans text-[#7A7A7A]">
              Shift Timing - (09:30 - 17:30)
            </h1>
            <div className="py-2 grid grid-cols-3 border-t-1 border-[#E5E5E5] mt-2">
              <div className="flex flex-col items-center border-r border-[#E5E5E5]">
                <h1 className="font-[500] font-sans">Check In</h1>
                <h1 className="font-sans text-[#7A7A7A]">09:15</h1>
                <h1 className="font-sans text-[#7A7A7A]">AM</h1>
              </div>
              <div className="flex flex-col items-center border-r border-[#E5E5E5]">
                <h1 className="font-[500] font-sans">Check out</h1>
                <h1 className="font-sans text-[#7A7A7A]">11:15</h1>
                <h1 className="font-sans text-[#7A7A7A]">PM</h1>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-[500] font-sans">Total Hours</h1>
                <h1 className="font-sans text-[#7A7A7A]">00h:15m</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Button className="w-full rounded-sm" onClick={handlePunchIn}>
            Punch in
          </Button>
        </div>
        {successMessage && (
          <div className="mt-2 text-center text-green-500 font-semibold">
            {successMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default AttendencePunchCards;
