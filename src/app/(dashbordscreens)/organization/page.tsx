import React from 'react'
import Layout from '@/components/common_layout/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrganizationEmployees from './OrganizationEmployees'
import AddNewEmp from './AddNewEmp'
import RequestedLeaves from './RequestedLeaves'
import CompanyHolidays from './profile-edit/CompanyHolidays'
import Annoucement from './Annoucement'

const Organization = () => {
  return (
    <Layout>
      <div className='h-screen w-full'>
        <Tabs defaultValue="employees" className="w-full h-[100%]">
          <TabsList className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-6 mb-6 bg-white">
            <TabsTrigger value="employees"  className="text-sm font-medium font-sans rounded-md w-full py-2 transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Employees
            </TabsTrigger>
            <TabsTrigger value="addnewemp"  className="text-sm font-medium font-sans rounded-md w-full py-2 transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Add New User
            </TabsTrigger>
            <TabsTrigger value="leaves"  className="text-sm font-medium font-sans rounded-md w-full py-2 transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Requested Leaves
            </TabsTrigger>
            <TabsTrigger value="addholiday"  className="text-sm font-medium font-sans rounded-md w-full py-2 transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Official Holidays
            </TabsTrigger>
            <TabsTrigger value="annoucement"  className="text-sm font-medium font-sans rounded-md w-full py-2 transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Annoucements
            </TabsTrigger>
          </TabsList>
          <TabsContent value="employees">
            <div className='border min-h-full  rounded-sm p-3 border-[#E5E5E5]'>
              <OrganizationEmployees />
            </div>
          </TabsContent>
          <TabsContent value="addnewemp">
            <div className='border min-h-full  rounded-sm p-3 border-[#E5E5E5]'>
              <AddNewEmp />
            </div>
          </TabsContent>
          <TabsContent value="leaves">
            <div className='border min-h-full  rounded-sm p-3 border-[#E5E5E5]'>
              <RequestedLeaves />
            </div>
          </TabsContent>
          <TabsContent value="addholiday">
            <div className='border min-h-full  rounded-sm p-3 border-[#E5E5E5]'>
              <CompanyHolidays/>
            </div>
          </TabsContent>
          <TabsContent value="annoucement">
            <div className='border min-h-full  rounded-sm p-3 border-[#E5E5E5]'>
              <Annoucement/>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

export default Organization
