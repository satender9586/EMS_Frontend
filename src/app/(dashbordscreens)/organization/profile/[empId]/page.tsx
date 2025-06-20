"use client";
import React,{useEffect, useState} from 'react'
import ProfilesCards from '@/components/ProfilesCards'
import { retriveEmployeeProfilesApi } from '@/services/GET_API'
import { authInfoInterface } from '@/types/profile';
import { authInfoStateData } from '@/lib/DefaultStateValues';
import { useParams } from 'next/navigation';
import Layout from '@/components/common_layout/Layout';


const EmployeeDetails = () => {
      const [authInfo, setAuthInfo] = useState<authInfoInterface>({ ...authInfoStateData });
      const { empId } = useParams()

      const EmployeeProfileHandler = async (empId:string) => {
        try {
          const response = await retriveEmployeeProfilesApi(empId);
           const resData = response?.data?.data;
          const { bank_info, contact_info, personal_info, user_info } = resData;
          setAuthInfo({ bank_info, contact_info, personal_info, user_info });
        } catch (error) {
          console.error("Error fetching logged user info:", error);
            }
      };

      useEffect(() => {
        if (typeof empId === 'string') {
          EmployeeProfileHandler(empId);
        }
      }, [empId]);

    
  return (
    <Layout>
       <ProfilesCards profileData={authInfo}/>
    </Layout>
  )
}

export default EmployeeDetails