"use client"
import React, { useEffect, useState } from 'react';
import { GrAnnounce } from "react-icons/gr";
import { RiErrorWarningFill } from "react-icons/ri";
import LeaverequestCardsTables from './LeaverequestCardsTables';
import { retriveMyLeavesApi } from '@/services/GET_API';
import { myLeavesInterface } from '@/types/leaves';


const LeaverequestCards = () => {
    const [leavesData, setLeavesData]=useState<myLeavesInterface[]>([])

    const retriveMyLeaves = async ()=>{
        try {
            const response = await retriveMyLeavesApi()
            const data = response?.data?.data
            setLeavesData(data)
        } catch (error) {
          console.log("error",error)
        }
    }

    useEffect(()=>{
        retriveMyLeaves()
    },[])

    return (
        <div className=" hover:shadow-xl transition-all min-h-[145px] max-h-[250px] bg-white rounded-lg shadow-md overflow-hidden">
            <h1 className="px-3 py-2 font-semibold text-xl text-[grey] tracking-wide flex items-center space-x-2">
                <RiErrorWarningFill className="text-[#008AFF]" />
                <span className='font-sans font-medium text-[#008AFF]'>Leave Request </span>

            </h1>
            <div className="border-b"></div>

            <div className="max-h-[150px] overflow-y-auto px-3 py-2 space-y-2">
                <LeaverequestCardsTables leaveDataProps={leavesData} />
            </div>
        </div>
    )
}

export default LeaverequestCards