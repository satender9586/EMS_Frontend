"use client";
import React, { useEffect, useState } from "react";
import { loggedInfoApi } from "@/services/GET_API";
import { authInfoInterface } from "@/types/profile";
import { authInfoStateData } from "@/utils/defaultStateValues";

const MyProfileCards = () => {
  const [authInfo, setAuthInfo] = useState<authInfoInterface>({ ...authInfoStateData });

  const loggedInfoHandler = async () => {
    try {
      const response = await loggedInfoApi();
      const resData = response?.data?.data;
      const { bank_info, contact_info, personal_info, user_info } = resData;
      setAuthInfo({ bank_info, contact_info, personal_info, user_info });
    } catch (error) {
      console.error("Error fetching logged user info:", error);
    }
  };

  useEffect(() => {
    loggedInfoHandler();
  }, []);

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-1 border-b border-gray-100 last:border-b-0">
      <span className="text-sm text-gray-500 font-medium">{label}</span>
      <span className="text-sm text-gray-800 font-semibold">{value || "-"}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Profile Summary */}
      <div className="bg-white shadow rounded-xl p-4 flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-gray-300" />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {authInfo?.personal_info?.first_name} {authInfo?.personal_info?.last_name}
          </h2>
          <div className="text-sm text-gray-600 flex flex-wrap gap-2 mt-1">
            <span>{authInfo?.user_info?.employee_id}</span>
            <span className="border-l border-gray-300 pl-2">
              {authInfo?.user_info?.department === "1"
                ? "Super Admin"
                : authInfo.user_info.department === "2"
                ? "Admin"
                : "Other"}
            </span>
            <span className="border-l border-gray-300 pl-2">React Developer</span>
          </div>
          <div className="text-sm text-gray-600 flex flex-wrap gap-2 mt-1">
            <span>+91 {authInfo?.contact_info?.phone_number}</span>
            <span className="border-l border-gray-300 pl-2">{authInfo.user_info.email}</span>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* Personal Details */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Details</h3>
          <div className="space-y-2">
            <InfoRow label="Mobile" value={authInfo?.contact_info?.phone_number || "-"} />
            <InfoRow label="Email" value={authInfo?.contact_info?.alternate_email || "-"} />
            <InfoRow label="Date of Join" value="-" />
            <InfoRow label="Blood Group" value={authInfo?.personal_info?.blood_group || "-"} />
            <InfoRow label="Date of Birth" value={authInfo?.personal_info?.date_of_birth?.split("T")[0] || "-"} />
            <InfoRow label="Gender" value={authInfo?.personal_info?.gender || "-"} />
            <InfoRow label="Reporting To" value="-" />
          </div>
        </div>

        {/* Address Details */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Address</h3>
          <div className="space-y-2">
            <InfoRow label="Permanent Address" value={authInfo?.contact_info?.address || "-"} />
            <InfoRow label="Present Address" value="-" />
            <InfoRow label="City" value="-" />
            <InfoRow label="State" value="-" />
            <InfoRow label="Country" value="-" />
            <InfoRow label="Zipcode" value="-" />
            <InfoRow label="Nationality" value="-" />
          </div>
        </div>

        {/* Other Details */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Details</h3>
          <div className="space-y-2">
            <InfoRow label="Passport Number" value="-" />
            <InfoRow label="Bank Name" value={authInfo?.bank_info?.bank_name || "-"} />
            <InfoRow label="Account Number" value={authInfo.bank_info.bank_number || "-"} />
            <InfoRow label="IFSC Code" value={authInfo.bank_info.ifsc_number || "-"} />
          </div>
        </div>

        {/* Identity Info */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Identity Information</h3>
          <div className="space-y-2">
            <InfoRow label="PAN Number" value={authInfo?.bank_info?.pan_number || "-"} />
            <InfoRow label="PF Number" value={authInfo?.bank_info?.pf_number || "-"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileCards;
