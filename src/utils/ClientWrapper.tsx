"use client";
import { ReactNode, useEffect } from "react";
import { getToken } from "@/utils/cookies";
import { clearLocalStorage } from "@/utils/methods";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    const checkTokenAndClearStorage = async () => {
      const token = await getToken("accessToken");
      if (!token) {
        clearLocalStorage("user");
        console.log("No access token found — cleared user data");
      }
    };
    checkTokenAndClearStorage();
  }, []);

  return <>{children}</>;
}
