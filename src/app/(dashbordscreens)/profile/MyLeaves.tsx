"use client"
import React, { useEffect, useState } from 'react';
import LeaverequestCardsTables from '../../../components/LeaveStausTables';
import { retriveMyLeavesApi } from '@/services/GET_API';
import { myLeavesInterface } from '@/types/applyLeave';
import { LeaveActionApi } from '@/services/POST_API';
import { toast } from 'react-toastify';
import { leaveActionPayload } from '@/types/leave';

const MyLeaves = () => {
    const [leavesData, setLeavesData] = useState<myLeavesInterface[]>([])

    const retriveMyLeaves = async () => {
        try {
            const response = await retriveMyLeavesApi()
            const data = response?.data?.data?.reverse()
            setLeavesData(data)
        } catch (error) {
            console.log("error", error)
        }
    }

  const leaveActionHandlerCallback = async (leaveId: string, action: string): Promise<void> => {
     const payloadData: leaveActionPayload = {
       leaveId: leaveId,
       action: action
     }
 
     try {
       const response = await LeaveActionApi(payloadData);
       toast.success(response.data.message,{autoClose:500})
       retriveMyLeaves()
       console.log("API response:", response);
     } catch (error) {
       console.error("Error while performing leave action:", error);
     }
   };


    useEffect(() => {
        retriveMyLeaves()
    }, [])
    return (
        <div>
            <LeaverequestCardsTables leaveDataProps={leavesData} callback={leaveActionHandlerCallback}/>
        </div>
    )
}

export default MyLeaves