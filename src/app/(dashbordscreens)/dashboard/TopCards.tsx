"use client";
import React, { useEffect, useState } from "react";
import { retriveBasicSummaryApi } from "@/services/GET_API";
import { Users } from "lucide-react";
import { RiPresentationLine } from "react-icons/ri";
import { MdCancelPresentation, MdSick } from "react-icons/md";
import { CiSquareQuestion } from "react-icons/ci";

const TopCards = () => {
  const [summary, setSummary] = useState({
    totalEmployees: "",
    totalPresent: "",
    totalLeave: "",
    totalLeaveRequest: "",
    totalAbsent: "",
  });

  const basicSummaryHandler = async () => {
    try {
      const response = await retriveBasicSummaryApi();
      const data = response?.data?.data;
      setSummary((prev) => ({ ...prev, ...data }));
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  };

  useEffect(() => {
    basicSummaryHandler();
  }, []);

  const summaryCards = [
    {
      title: "Employees",
      count: summary.totalEmployees,
      icon: <Users className="text-[#008AFF]" size={30} />,
    },
    {
      title: "Present",
      count: summary.totalPresent,
      icon: <RiPresentationLine className="text-green-500" size={30} />,
    },
    {
      title: "Absent",
      count: summary.totalAbsent,
      icon: <MdCancelPresentation className="text-red-500" size={30} />,
    },
    {
      title: "On Leave",
      count: summary.totalLeave,
      icon: <MdSick className="text-yellow-500" size={30} />,
    },
    {
      title: "Leave Requests",
      count: summary.totalLeaveRequest,
      icon: <CiSquareQuestion className="text-purple-500" size={30} />,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {summaryCards.map((card, index) => (
        <Card key={index} title={card.title} count={card.count} icon={card.icon} />
      ))}
    </div>
  );
};

export default TopCards;

type CardProps = {
  title: string;
  count: string | number;
  icon: React.ReactNode;
};

const Card = ({ title, count, icon }: CardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 min-h-[160px] flex flex-col justify-between group relative overflow-hidden">
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500 blur-xl z-0"></div>
      <div className="z-10 flex flex-col items-center text-center space-y-2">
        {icon}
        <div className="text-gray-800 font-semibold text-sm uppercase tracking-wide">{title}</div>
        <div className="text-3xl font-bold text-[#008AFF]">{count}</div>
      </div>
    </div>
  );
};
