"use client"
import React, { useEffect, useState } from 'react'
import { loggedInfoApi } from '@/services/GET_API'
import { authInfoInterface } from '@/types/profile'
import { authInfoStateData } from '@/utils/defaultStateValues'


const MyProfileCards = () => {

  const [authInfo, setAuthInfo] = useState<authInfoInterface>({ ...authInfoStateData });

  const loggedInfoHandler = async () => {
    try {
      const response = await loggedInfoApi();
      const resData = response?.data?.data;
      const {bank_info,contact_info,personal_info,user_info} = resData;
      setAuthInfo({bank_info: { ...bank_info },contact_info: { ...contact_info },personal_info: { ...personal_info },user_info: { ...user_info }});
    
    } catch (error) {
      console.error("Error fetching logged user info:", error);
    }
  };


  useEffect(() => {
    loggedInfoHandler()
  }, [])

  return (
    <div className="">
      <div className="shadow rounded-sm bg-white">
        <div className="flex gap-1 items-center hover:shadow-xl">
          <div className="min-w-[80px] p-2.5">
            <div className="bg-[#CCCCCC] w-full min-h-[60px] rounded-full"></div>
          </div>
          <div>
            <h1 className="font-[popplins] font-bold text-[#777777]">{authInfo?.personal_info?.first_name + " " + authInfo?.personal_info?.last_name}</h1>
            <div className="flex items-center gap-2">
              <h1 className="font-[popplins] text-[#777777] text-sm border-r border-[#CCCCCC] pr-2">
                {authInfo?.user_info?.employee_id}
              </h1>
              <h1 className="font-[popplins] text-[#777777] text-sm border-r border-[#CCCCCC] pr-2">
                {authInfo?.user_info?.department == "1" ? "Human Resource" : authInfo?.user_info?.department == "2" ? "Infomation Techonologies" : "none"}
              </h1>
              <h1 className="font-[popplins] text-[#777777] text-sm">React Developer</h1>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-[popplins] text-[#777777] text-sm border-r border-[#CCCCCC] pr-2">
                +91{authInfo?.contact_info?.phone_number}
              </h1>
              <h1 className="font-[popplins] text-[#777777] text-sm">{authInfo?.user_info?.email}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Details Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 my-3 gap-3">
        <div className="shadow p-3 hover:shadow-xl bg-white rounded-sm">
          <h1 className="font-[popplins] text-[18px] font-[600] text-[#212121]">Personal Details</h1>
          {[
            ['Personal Mobile', '9810411724'],
            ['Personal Email', 'finogel725@erapk.com'],
            ['Date of Join', '25/04/2022'],
            ['Blood Group', '-'],
            ['Date of Birth', '25/04/2022'],
            ['Gender', 'Male'],
            ['Reporting To', 'Anamika Thakur']
          ].map(([label, value], index) => (
            <div key={index} className="flex mt-1 items-center">
              <div className="min-w-[35%]">
                <h1 className="text-[14px] font-[popplins] font-[500] text-[#656464]">{label}</h1>
              </div>
              <div>
                <h1 className="text-[14px] font-[popplins] font-[600] text-[#333232]">{value}</h1>
              </div>
            </div>
          ))}
        </div>

    
        <div className="shadow p-3 hover:shadow-xl bg-white rounded-sm">
          <h1 className="font-[popplins] text-[18px] font-[600] text-[#212121]">Address</h1>
          {[
            ['Permanent Address', '-'],
            ['Present Address', '-'],
            ['City', '25/04/2022'],
            ['State', '-'],
            ['Country', '25/04/2022'],
            ['Zipcode', '-'],
            ['Nationality', '-']
          ].map(([label, value], index) => (
            <div key={index} className="flex mt-1 items-center">
              <div className="min-w-[35%]">
                <h1 className="text-[14px] font-[popplins] font-[500] text-[#656464]">{label}</h1>
              </div>
              <div>
                <h1 className="text-[14px] font-[popplins] font-[600] text-[#333232]">{value}</h1>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Other Details Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="shadow p-3 hover:shadow-xl bg-white rounded-sm">
          <h1 className="font-[popplins] text-[18px] font-[600] text-[#212121]">Other Details</h1>
          {[
            ['Passport Number', '-'],
            ['Bank Name', '-'],
            ['Account Number', '-'],
            ['IFSC Number', '-']
          ].map(([label, value], index) => (
            <div key={index} className="flex mt-1 items-center">
              <div className="min-w-[35%]">
                <h1 className="text-[14px] font-[popplins] font-[500] text-[#656464]">{label}</h1>
              </div>
              <div>
                <h1 className="text-[14px] font-[popplins] font-[600] text-[#333232]">{value}</h1>
              </div>
            </div>
          ))}
        </div>


        <div className="shadow p-3 hover:shadow-xl bg-white rounded-sm">
          <h1 className="font-[popplins] text-[18px] font-[600] text-[#212121]">Identity Information</h1>
          <div className="flex mt-1 items-center">
            <div className="min-w-[35%]">
              <h1 className="text-[14px] font-[popplins] font-[500] text-[#656464]">Passport Number</h1>
            </div>
            <div>
              <h1 className="text-[14px] font-[popplins] font-[600] text-[#333232]">-</h1>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default MyProfileCards
