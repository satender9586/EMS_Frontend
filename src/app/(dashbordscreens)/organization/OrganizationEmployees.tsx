"use client"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { IoAddSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { allEmployeeListApi } from "@/services/GET_API";
import { authInfoInterface } from "@/types/profile";
import AddNewEmp from "./AddNewEmp";

const OrganizationEmployees = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [employeeCardData, setEmployeeCardDate] = useState<authInfoInterface[]>([]);

  const employeeListHandler = async () => {
    try {
      const response = await allEmployeeListApi();
      const data = response?.data?.data;
      if (Array.isArray(data)) {
        setEmployeeCardDate(data);
      } else {
        setEmployeeCardDate([data]);
      }
    } catch (error) {
      console.log("errror", error);
    }
  };

  // callback function when status will change
  const empListcallbackhandler = () => {
    employeeListHandler();
  };

  useEffect(() => {
    employeeListHandler();
  }, []);

  return (
    <div>
      <AlertDialog open={open}>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className={"fixed bottom-5 right-8 rounded-full p-5  bg-gradient-to-r from-[#008AFF] to-[#00C6FF]"}
            onClick={() => setOpen(true)}
          >
            <IoAddSharp className="text-white" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent >
          <AlertDialogHeader>
            <AlertDialogTitle className="font-serif">Employee</AlertDialogTitle>
            <AlertDialogDescription className="font-sans">
              Fill out the form below to add a  new employee registration.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div >
            <AddNewEmp  setOpen={setOpen}/>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {employeeCardData?.map((data, index) => (
          <EmployeeCard
            key={index}
            cardData={data}
            empListcallbackhandler={empListcallbackhandler}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationEmployees;
