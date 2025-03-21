import React from 'react'
import Layout from '@/app/common/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrganizationEmployees from '@/app/reused/OrganizationEmployees'


const Organization = () => {
  return (
    <Layout>
      <div className='grid rounded-sm h-[100%] bg-[#FAFAFA] border  border-[#E5E5E5] p-3'>
        <Tabs defaultValue="account" className="w-[100%] ">
          <TabsList>

            <TabsTrigger value="employees" className='text-sm font-[popplins] rounded-none'>Employees</TabsTrigger>
          </TabsList>

          <TabsContent value="employees">
            <div className='border bg-white rounded-sm p-3 border-[#E5E5E5] w-full'>
              <OrganizationEmployees />
            </div>

          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

export default Organization