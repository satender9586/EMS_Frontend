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
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>CheckIn</TableHead>
            <TableHead>CheckOut</TableHead>
            <TableHead className=" text-center w-[100px]">Hours</TableHead>
            <TableHead className="text-center w-[200px]">Status</TableHead>
            <TableHead className="text-end pr-6.5">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myAttendence?.map((invoice, index) => (
            <TableRow key={index} >
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

              <TableCell className="flex justify-end">
                <Button className="bg-gray-100  hover:bg-gray-200 text-gray-800 text-[10px] px-3 py-1 rounded-md h-auto flex items-center gap-1.5 shadow-sm">
                  <Eye className="w-3 h-3" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default MyAttendence

// Absent Absent Weekend leave, Holiday 