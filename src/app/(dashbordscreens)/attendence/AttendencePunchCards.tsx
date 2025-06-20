"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { punchInApi } from "@/services/POST_API";
import { punchingStatusApi } from "@/services/GET_API";
import { punchOutApi } from "@/services/PATCH_API";
import { currentDateAndTime } from "@/utils/Methods";
import { PlaneTakeoff } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";

interface punchingResponse {
  punch_date: "";
  punch_in: "";
  punch_out: "";
  hours_worked: "";
}

const AttendencePunchCards = () => {
  const [isPunchIn, setIsPunchIn] = useState<boolean>(false);
  const [punchingData, setPuncingData] = useState<punchingResponse>({
    punch_date: "",
    punch_in: "",
    punch_out: "",
    hours_worked: "",
  });

  // punch in api integration
const punchInHandler = async () => {
  try {
    const response = await punchInApi();
    if (response.status === 200) {
      setIsPunchIn(true);
      toast.success("Punch-in successful!");
    }
  } catch (error: any) {
    console.error("Punch-in error:", error);
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(`Error: ${error.response.data.message}`);
    } 
    else if (error.message) {
      toast.error(`Error: ${error.message}`);
    } 
    else {
      toast.error("Something went wrong during punch-in.");
    }
    setIsPunchIn(false);
  }
};


  // punch out api integration
  const punchOutHandler = async () => {
    try {
      const response = await punchOutApi();
      if (response.status == 200) {
        setIsPunchIn(false);
        toast.success("punch-out successfully!..", { autoClose: 500 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // punching status check
  const currentAttendencStatus = async () => {
    try {
      const response = await punchingStatusApi();
      if (response?.status === 200) {
        if (response?.data?.data === 0) {
          setIsPunchIn(false)
        } else if (response?.data?.data === 1) {
          setIsPunchIn(true);
          const { punch_date, punch_in, punch_out, hours_worked } = response.data?.punchData;
          setPuncingData({
            ...punchingData,
            punch_in,
            punch_out,
            punch_date,
            hours_worked,
          });
        }else{
          
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    currentAttendencStatus();
  }, [isPunchIn]);

  return (
    <>
      <div className=" hover:shadow-xl border border-[#E5E5E5] bg-[#F2F3F6] rounded-lg p-3">
        <div className="bg-white mt-2 p-2 rounded-sm border border-[#E5E5E5]">
          <div>
            <h1 className="text-[16px]">{currentDateAndTime()}</h1>
            <h1 className="text-[15px] font-sans text-[#7A7A7A]">
              Shift Timing - (09:30 - 17:30)
            </h1>
            <div className="py-2.5 grid grid-cols-3 border-t-1 border-[#E5E5E5] mt-2.5">
              <div className="flex flex-col items-center p-2 border-r border-[#E5E5E5]">
                <h1 className="font-[500] font-sans">Check In</h1>
                <h1 className="font-sans text-[#7A7A7A]">
                  {punchingData?.punch_in || "00:00:00"}
                </h1>
              </div>
              <div className="flex flex-col items-center p-2 border-r border-[#E5E5E5]">
                {" "}
                <h1 className="font-[500] font-sans">Check out</h1>
                <h1 className="font-sans text-[#7A7A7A]">
                  {punchingData?.punch_out || "00:00:00"}
                </h1>
              </div>
              <div className="flex flex-col items-center p-2">
                {" "}
                <h1 className="font-[500] font-sans">Total Hours</h1>
                <h1 className="font-sans text-[#7A7A7A]">
                  {punchingData?.hours_worked || "00:00:00"}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2.5">
          {isPunchIn ? (
            <Button
              disabled={
                !!punchingData?.punch_out &&
                punchingData.punch_out !== "00:00:00"
              }
              className="w-full rounded-sm  bg-red-500"
              onClick={punchOutHandler}
            >
              Punch Out
            </Button>
          ) : (
            <Button
              className="w-full rounded-sm bg-green-600"
              onClick={punchInHandler}
            >
              Punch In
            </Button>
          )}
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Request Time Off
            </h2>
            <p className="text-sm text-gray-600">
              Easily plan and submit your leave requests. Keep your schedule
              transparent and ensure smooth workflow coordination with your
              team.
            </p>
          </div>

          <Link href="/leave" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg">
              <PlaneTakeoff className="w-5 h-5" />
              Apply for Leave
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AttendencePunchCards;
