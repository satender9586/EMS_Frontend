import React from "react";
import Layout from "@/components/common_layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyProfiles from "./MyProfiles";
import MyAttendence from "./MyAttendence";
import LeaveSummaryCart from "../leave/LeaveSummaryCart";
import MyLeaves from "./MyLeaves";


const Profile = () => {
  return (
    <Layout>
        <Tabs defaultValue="account">
          <TabsList className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
            <TabsTrigger
              value="account"
              className="text-sm font-[popplins] rounded-none w-full sm:w-auto"
            >
              My Profile
            </TabsTrigger>
            <TabsTrigger
              value="attendence"
              className="text-sm font-[popplins] rounded-none w-full sm:w-auto"
            >
              My Attendence
            </TabsTrigger>

            <TabsTrigger
              value="leaves"
              className="text-sm font-[popplins] rounded-none w-full sm:w-auto"
            >
              My Leaves
            </TabsTrigger>

          </TabsList>

          {/* Tab Content */}
          <TabsContent value="account">
            <div className="border bg-[#F2F3F6] rounded-sm p-3 border-[#E5E5E5] w-full">
              <MyProfiles />
            </div>
          </TabsContent>

          <TabsContent value="attendence">
            <div className="border  rounded-sm p-3 border-[#E5E5E5] w-full">
              <MyAttendence />
            </div>
          </TabsContent>
          <TabsContent value="leaves">
            <div className="border  rounded-sm p-3 border-[#E5E5E5] w-full">
              <MyLeaves />
            </div>
          </TabsContent>


        </Tabs>
    
    </Layout>
  );
};

export default Profile;
