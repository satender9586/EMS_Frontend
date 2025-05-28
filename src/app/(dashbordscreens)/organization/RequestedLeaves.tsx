"use client"
import React, { useEffect, useState } from 'react';
import { retriveMyLeavesApi } from '@/services/GET_API';
import { myLeavesInterface } from '@/types/applyLeave';
import AdminLeaveStatusTables from '@/components/AdminLeaveStatusTables';
import { LeaveActionApi } from '@/services/POST_API';
import { leaveActionPayload } from '@/types/leave';
import { toast } from 'react-toastify';

const RequestedLeaves = () => {

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
      <AdminLeaveStatusTables leaveDataProps={leavesData} callback={leaveActionHandlerCallback} />
    </div>
  )
}

export default RequestedLeaves