"use client"
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Eye } from "lucide-react";
import { retriveAttendenceApi } from '@/services/GET_API';
import { getMonthStartAndEndDates } from '@/utils/methods';
import { MyAttendenceResponseInterface } from '@/types/attendence';
import Link from 'next/link';


const MyAttendence = () => {

  const [myAttendence, setMyAttendence] = useState<MyAttendenceResponseInterface[]>([])

  const retriveAttendenceHandler = async () => {
    try {
      const response = await retriveAttendenceApi(`?startDate=${getMonthStartAndEndDates().start}&endDate=${getMonthStartAndEndDates().currentDate}`)
      const attenData = response?.data?.data.reverse();
      setMyAttendence(attenData)
    } catch (error) {
      console.log("some thing is wrong", error)
    }
  }


  useEffect(() => {
    retriveAttendenceHandler()
  }, [])

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">S.no</TableHead>
            <TableHead className="w-[200px]">Date</TableHead>
            <TableHead>CheckIn</TableHead>
            <TableHead>CheckOut</TableHead>
            <TableHead className=" text-center w-[100px]">Hours</TableHead>
            <TableHead className="text-center w-[200px]">Status</TableHead>
         
          </TableRow>
        </TableHeader>
        <TableBody>
          {myAttendence?.map((invoice, index) => (
            <TableRow key={index} >
              <TableCell className="font-medium">{index+1}</TableCell>
              <TableCell className="font-medium">{invoice?.date}</TableCell>
              <TableCell>{invoice?.punch_in || "..."}</TableCell>
              <TableCell>{invoice?.punch_out || "..."}</TableCell>
              <TableCell className="text-center">{invoice?.hours_worked || "..."}</TableCell>
              <TableCell
                className={`text-center ${invoice?.status === "Present"
                  ? "text-green-500"
                  : invoice?.status === "Absent"
                    ? "text-red-600"
                    : ["Weekend", "Leave", "Holiday"].includes(invoice?.status)
                      ? "text-blue-500"
                      : "text-gray-500"
                  }`}
              >
                {invoice?.status || "..."}
              </TableCell>

            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default MyAttendence

