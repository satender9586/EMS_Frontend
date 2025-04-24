import React from 'react'
import Layout from '@/components/common_layout/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyProfileCards from './MyProfileCards'
import ProfileAttendenceTabs from './ProfileAttendenceTabs'


const Profile = () => {
  return (
    <Layout>
      <div className="grid rounded-sm h-full">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
          
            <TabsTrigger value="account" className="text-sm font-[popplins] rounded-none w-full sm:w-auto">
              My Profile
            </TabsTrigger>
            <TabsTrigger value="attendence" className="text-sm font-[popplins] rounded-none w-full sm:w-auto">
              Attendence
            </TabsTrigger>
            <TabsTrigger value="assests" className="text-sm font-[popplins] rounded-none w-full sm:w-auto">
              Assests
            </TabsTrigger>
            <TabsTrigger value="documents" className="text-sm font-[popplins] rounded-none w-full sm:w-auto">
              My Documents
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="account">
            <div className="border bg-[#F2F3F6] rounded-sm p-3 border-[#E5E5E5] w-full">
              <MyProfileCards />
            </div>
          </TabsContent>

          <TabsContent value="attendence">
            <ProfileAttendenceTabs />
          </TabsContent>

          <TabsContent value="assests">
          
          </TabsContent>

          <TabsContent value="documents">
          
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

export default Profile
