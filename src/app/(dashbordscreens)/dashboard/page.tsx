import React from "react";
import Layout from "@/components/common_layout/Layout";
import AnnouncementsCards from "./AnnouncementsCards";
import ShowLeaveStaus from "./ShowLeaveStaus";
import DashbordCelibrationCards from "./DashbordCelibrationCards";
import TopCards from "./TopCards";

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <TopCards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-3">
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
            <AnnouncementsCards />
          </div>
          <div>
            <ShowLeaveStaus />
          </div>
        </div>
        <div>
            <DashbordCelibrationCards />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
