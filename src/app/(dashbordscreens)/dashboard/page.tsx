import React from "react";
import Layout from "@/components/common_layout/Layout";
import AnnouncementsCards from "./AnnouncementsCards";
import ShowLeaveStaus from "./ShowLeaveStaus";
import DashbordCelibrationCards from "./DashbordCelibrationCards";
import TopCards from "./TopCards";

const Dashboard = () => {
  return (
    <Layout>
     
      <div className="mb-4">
        <TopCards />
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
       
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
            <AnnouncementsCards />
          </div>

          <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
            <ShowLeaveStaus />
          </div>
        </div>

     
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
            <DashbordCelibrationCards />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
