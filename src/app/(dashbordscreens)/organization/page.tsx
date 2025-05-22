import React from 'react'
import Layout from '@/components/common_layout/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrganizationEmployees from './OrganizationEmployees'
import AddNewEmp from './AddNewEmp'

const Organization = () => {
  return (
    <Layout>
      <div className='grid h-full'>
        <Tabs defaultValue="employees" className="w-full">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="employees" className='text-sm font-[popplins] rounded-none py-2 px-4'>
              Employees
            </TabsTrigger>
            <TabsTrigger value="addnewemp" className='text-sm font-[popplins] rounded-none py-2 px-4'>
              Add New User
            </TabsTrigger>
          </TabsList>
          <TabsContent value="employees">
            <div className='border bg-[#F2F3F6] rounded-sm p-3 border-[#E5E5E5] w-full'>
              <OrganizationEmployees />
            </div>
          </TabsContent>
          <TabsContent value="addnewemp">
            <div className='border bg-[#F2F3F6] rounded-sm p-3 border-[#E5E5E5] w-full'>
              <AddNewEmp />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

export default Organization
