import React from 'react'
import Layout from '@/components/common_layout/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyProfileCards from './MyProfileCards'
import ProfileAttendenceTabs from './ProfileAttendenceTabs'

const Profile = () => {
  return (
    <Layout>
      <div className='grid rounded-sm h-[100%] '>
        <Tabs defaultValue="account" className="w-[100%] ">
          <TabsList>
            <TabsTrigger value="account" className='text-sm font-[popplins] rounded-none'>My Profile</TabsTrigger>
            <TabsTrigger value="attendence" className='text-sm font-[popplins] rounded-none'>Attendence</TabsTrigger>
            <TabsTrigger value="assests" className='text-sm font-[popplins] rounded-none'>Assests</TabsTrigger>
            <TabsTrigger value="documents" className='text-sm font-[popplins] rounded-none'>My Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className='border  bg-[#F2F3F6] rounded-sm p-3 border-[#E5E5E5] w-full'>
              <MyProfileCards />
            </div>
          </TabsContent>
          <TabsContent value="attendence">
            <ProfileAttendenceTabs />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

export default Profile