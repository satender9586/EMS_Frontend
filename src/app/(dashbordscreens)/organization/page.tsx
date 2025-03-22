import React from 'react'
import Layout from '@/components/common_layout/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrganizationEmployees from './OrganizationEmployees'
import AddNewEmployee from './AddNewEmployee'


const Organization = () => {
  return (
    <Layout>
      <div className='grid h-[100%] '>
        <Tabs defaultValue="employees" className="w-[100%] ">
          <TabsList>
            <TabsTrigger value="employees" className='text-sm font-[popplins] rounded-none'>Employees</TabsTrigger>
            <TabsTrigger value="addemployee" className='text-sm font-[popplins] rounded-none'>Add New Employee</TabsTrigger>
          </TabsList>
          <TabsContent value="employees">
            <div className='border bg-[#F2F3F6] rounded-sm p-3 border-[#E5E5E5] w-full'>
              <OrganizationEmployees />
            </div>
          </TabsContent>
          <TabsContent value="addemployee">
            <div className='border bg-white rounded-sm p-3 border-[#E5E5E5] w-full'>
              <AddNewEmployee />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

export default Organization