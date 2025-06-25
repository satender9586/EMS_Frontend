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
import { getMonthStartAndEndDates } from '@/utils/Methods';
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
            <TableHead className="w-[80px] font-serif">S.no</TableHead>
            <TableHead className="w-[200px] font-serif">Date</TableHead>
            <TableHead className='font-serif'>CheckIn</TableHead>
            <TableHead className='font-serif'>CheckOut</TableHead>
            <TableHead className=" text-center w-[100px] font-serif">Hours</TableHead>
            <TableHead className="text-center w-[200px] font-serif">Status</TableHead>
         
          </TableRow>
        </TableHeader>
        <TableBody>
          {myAttendence?.map((invoice, index) => (
            <TableRow key={index} >
              <TableCell className="font-medium font-sans">{index+1}</TableCell>
              <TableCell className="font-medium font-sans">{invoice?.date}</TableCell>
              <TableCell className='font-sans'>{invoice?.punch_in || "..."}</TableCell>
              <TableCell className='font-sans'>{invoice?.punch_out || "..."}</TableCell>
              <TableCell className="text-center font-sans">{invoice?.hours_worked || "..."}</TableCell>
              <TableCell
                className={`text-center font-sans ${invoice?.status === "Present"
                  ? "text-green-500"
                  : invoice?.status === "Absent"
                    ? "text-red-600 font-sans"
                    : ["Weekend", "Leave", "Holiday"].includes(invoice?.status)
                      ? "text-blue-500 font-sans"
                      : "text-gray-500 font-sans"
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

