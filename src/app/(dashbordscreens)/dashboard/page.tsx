import React from "react";
import Layout from "@/components/common_layout/Layout";
import TopCards from "./TopCards";
import AnnouncementsCards from "./AnnouncementsCards";
import LeaverequestCards from "./LeaverequestCards";
import DashbordCelibrationCards from "./DashbordCelibrationCards";

const Dashboard = () => {
  return (
    <Layout>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-2 ">
          <TopCards />
          {/* <TopCards />
          <TopCards />
          <TopCards />
          <TopCards /> */}
        </div>

        <div className="mt-2  gap-2 grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-5 lg:col-span-4">
            <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-lg">
              <AnnouncementsCards />
            </div>
            <div className="mt-2 bg-white border border-[#E5E5E5] rounded-lg shadow-lg">
              <LeaverequestCards />
            </div>
          </div>

          <div className=" col-span-5 lg:col-span-1">
            <DashbordCelibrationCards />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
