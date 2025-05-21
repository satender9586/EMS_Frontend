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
      const { bank_info, contact_info, personal_info, user_info } = resData;

      setAuthInfo({
        bank_info: { ...bank_info },
        contact_info: { ...contact_info },
        personal_info: { ...personal_info },
        user_info: { ...user_info }
      });
    } catch (error) {
      console.error("Error fetching logged user info:", error);
    }
  };


  useEffect(() => {
    loggedInfoHandler()
  }, [])

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Profile Card */}
     <div className="bg-white shadow-lg rounded-lg p-5 mb-6 flex items-center gap-4 transition hover:shadow-xl">
        <div className="w-[80px] h-[80px] rounded-full bg-gray-300 flex items-center justify-center text-white text-xl font-bold">
        {/* in future profile picture will be shown */}
          {authInfo?.user_info?.department || 'None'} 
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            {(authInfo?.personal_info?.first_name || '-') + " " + (authInfo?.personal_info?.last_name || '')}
          </h1>
          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
            <span className="pr-4 border-r border-gray-300">{authInfo?.user_info?.employee_id}</span>
            <span className="pr-4 border-r border-gray-300">
              {authInfo?.user_info?.department || 'None'}
            </span>
            <span className="pr-4 border-r border-gray-300">
              {authInfo?.user_info?.email || 'None'}
            </span>
            
          </div>
        </div>
      </div>


      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-1 ">
        {/* Personal Details */}
        <Card title="Personal Details">
          <Info label="Name" value={authInfo?.personal_info?.first_name + " " + authInfo?.personal_info?.last_name} />
          <Info label="Date of Birth" value={authInfo?.personal_info?.date_of_birth} />
          <Info label="Gender" value={authInfo?.personal_info?.gender} />
          <Info label="Marital Status" value={authInfo?.personal_info?.marital_status} />
          <Info label="Blood Group" value={authInfo?.personal_info?.blood_group} />
        </Card>

        {/* Bank Details */}
        <Card title="Bank Details">
          <Info label="Bank Name" value={authInfo?.bank_info?.bank_name} />
          <Info label="Account Number" value={authInfo?.bank_info?.bank_number} />
          <Info label="IFSC Code" value={authInfo?.bank_info?.ifsc_number} />
          <Info label="PAN Number" value={authInfo?.bank_info?.pan_number} />
          <Info label="PF Number" value={authInfo?.bank_info?.pf_number} />
        </Card>

        {/* Contact Details */}
        <Card title="Contact Details">
          <Info label="Phone Number" value={authInfo?.contact_info?.phone_number} />
          <Info label="Email" value={authInfo?.contact_info?.alternate_email} />
          <Info label="Address" value={authInfo?.contact_info?.address} />
          <Info label="Emergency Number" value={authInfo?.contact_info?.emergency_number} />
        </Card>
      </div>
    </div>
  )
}

const Card = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition duration-300">
    <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">{title}</h2>
    <div className="space-y-3">{children}</div>
  </div>
)

const Info = ({ label, value }: { label: string, value?: string | number }) => (
  <div className="flex justify-between items-center border-b pb-2 text-[16px]">
    <span className="text-gray-600 font-medium">{label}:</span>
    <span className="text-gray-800 font-semibold">{value || '-'}</span>
  </div>
)

export default MyProfileCards;
