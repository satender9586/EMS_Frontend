import React from "react";
import Layout from "@/components/common_layout/Layout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import MyProfiles from "./MyProfiles";
import MyAttendence from "./MyAttendence";
import MyLeaves from "./MyLeaves";

const Profile = () => {
  return (
    <Layout>
      <div className='grid h-full'>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 bg-white">
            <TabsTrigger
              value="account"
              className="text-sm font-medium font-sans rounded-md w-full py-2 transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              My Profile
            </TabsTrigger>
            <TabsTrigger
              value="attendence"
              className="text-sm font-medium font-sans rounded-md w-full py-2 transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              My Attendance
            </TabsTrigger>
            <TabsTrigger
              value="leaves"
              className="text-sm font-medium font-sans rounded-md w-full py-2 transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              My Leaves
            </TabsTrigger>
          </TabsList>

        
          <TabsContent value="account">
            <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
              <MyProfiles />
            </div>
          </TabsContent>

          <TabsContent value="attendence">
            <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
              <MyAttendence />
            </div>
          </TabsContent>

          <TabsContent value="leaves">
            <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
              <MyLeaves />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
