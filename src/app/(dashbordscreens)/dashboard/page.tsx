import React from "react";
import Layout from "@/components/common_layout/Layout";
import AnnouncementsCards from "./AnnouncementsCards";
import ShowLeaveStaus from "./ShowLeaveStaus";
import DashbordCelibrationCards from "./DashbordCelibrationCards";
import TopCards from "./TopCards";


const Dashboard = () => {
  return (
    <Layout>

      <TopCards />
      <div className="mt-2  gap-2 grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-5 lg:col-span-4">
          <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-lg">
            <AnnouncementsCards />
          </div>
          <div className="mt-2 bg-white border border-[#E5E5E5] rounded-lg shadow-lg">
            <ShowLeaveStaus />
          </div>
        </div>
        <div className=" col-span-5 lg:col-span-1">
          <DashbordCelibrationCards />
        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;
