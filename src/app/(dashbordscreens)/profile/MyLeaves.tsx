"use client"
import React, { useEffect, useState } from 'react';
import LeaverequestCardsTables from '../../../components/LeaveStausTables';
import { retriveMyLeavesApi } from '@/services/GET_API';
import { myLeavesInterface } from '@/types/applyLeave';

const MyLeaves = () => {
    const [leavesData, setLeavesData] = useState<myLeavesInterface[]>([])

    const retriveMyLeaves = async () => {
        try {
            const response = await retriveMyLeavesApi()
            const data = response?.data?.data
            setLeavesData(data)
        } catch (error) {
            console.log("error", error)
        }
    }
    useEffect(() => {
        retriveMyLeaves()
    }, [])
    return (
        <div>
            <LeaverequestCardsTables leaveDataProps={leavesData}/>
        </div>
    )
}

export default MyLeaves