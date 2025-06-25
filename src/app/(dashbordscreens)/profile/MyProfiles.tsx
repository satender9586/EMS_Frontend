"use client";
import React, { useEffect, useState } from "react";
import { loggedInfoApi } from "@/services/GET_API";
import { authInfoInterface } from "@/types/profile";
import { authInfoStateData } from "@/lib/DefaultStateValues";
import ProfilesCards from "@/components/ProfilesCards";

const MyProfiles = () => {
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



  return (
    <>
      <ProfilesCards profileData={authInfo} />
    </>
  );
};

export default MyProfiles;
