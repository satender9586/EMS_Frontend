"use client"
import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { allEmployeeListApi } from "@/services/GET_API";



const OrganizationEmployees = () => {

    const [employeeCardData,setEmployeeCardDate]=useState([])

    const employeeListHandler = async ()=>{
        try {
            const response = await allEmployeeListApi()
            // console.log("res",response.data.data)
            const data = response?.data?.data
            setEmployeeCardDate(data)
        } catch (error) {
            console.log("errror",error)
        }
    }

useEffect(()=>{
    employeeListHandler()
},[])


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
            employeeCardData?.map((data)=>(
                 <EmployeeCard  />
            ))
           }

        </div>
    );
}

export default OrganizationEmployees;
