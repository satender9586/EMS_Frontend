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




const MyAttendence = () => {
  interface MyAttendenceResponseInterface{
    date:string,
    type: string,
    holiday_name:string,
    punch_in :string,
    punch_out:string,
    hours_worked :string,
    reason:string
    status:string
  }
  
  const [myAttendence, setMyAttendence]=useState<MyAttendenceResponseInterface[]>([])

  const retriveAttendenceHandler=async ()=>{
    try {
      const response = await retriveAttendenceApi("?startDate=2025-05-01&endDate=2025-05-30")
      const attenData = response?.data?.data;
      setMyAttendence(attenData)
    } catch (error) {
      console.log("some thing is wrong",error)
    }
  }

 

  useEffect(()=>{
    retriveAttendenceHandler()
  },[])
 
  



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
          {myAttendence.map((invoice,index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{invoice?.date}</TableCell>
              <TableCell>{invoice?.punch_in || "..."}</TableCell>
              <TableCell>{invoice?.punch_out || "..."}</TableCell>
              <TableCell className="text-center">{invoice?.hours_worked || "..."}</TableCell>
              <TableCell className="text-center">{invoice?.status || "..."}</TableCell>
              <TableCell className="flex justify-end">
                <Button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1.5 rounded-md h-auto flex items-center gap-1.5 shadow-sm">
                  <Eye className="w-3.5 h-3.5" />
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