"use client";

import React, { useEffect, useState } from 'react';
import { RiErrorWarningFill } from "react-icons/ri";
import LeaverequestCardsTables from '../../../components/LeaveStausTables';
import { retriveMyLeavesApi } from '@/services/GET_API';
import { myLeavesInterface } from '@/types/applyLeave';

const ShowLeaveStaus = () => {
    const [leavesData, setLeavesData] = useState<myLeavesInterface[]>([]);

    const retriveMyLeaves = async () => {
        try {
            const response = await retriveMyLeavesApi();
            const data = response?.data?.data?.reverse() || [];
            setLeavesData(data);
        } catch (error) {
            console.error("Error fetching leaves:", error);
        }
    };

    useEffect(() => {
        retriveMyLeaves();
    }, []);

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 h-full max-h-[300px] overflow-hidden">
         
            <div className="flex items-center px-4 py-3 border-b gap-2">
                <RiErrorWarningFill className="text-[#008AFF] text-xl" />
                <h2 className="text-[#008AFF] font-semibold text-lg font-sans">
                    Leave Request
                </h2>
            </div>

         
            <div className="max-h-[240px] overflow-y-auto px-4 py-3 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                <LeaverequestCardsTables leaveDataProps={leavesData} />
            </div>
        </div>
    );
};

export default ShowLeaveStaus;
