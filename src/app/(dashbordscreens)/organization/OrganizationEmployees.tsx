"use client";
import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { allEmployeeListApi } from "@/services/GET_API";
import { authInfoInterface } from "@/types/profile";

const OrganizationEmployees = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {employeeCardData?.map((data, index) => (
        <EmployeeCard
          key={index}
          cardData={data}
          empListcallbackhandler={empListcallbackhandler}
        />
      ))}
    </div>
  );
};

export default OrganizationEmployees;
