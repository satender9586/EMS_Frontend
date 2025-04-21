"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import loginimg from "../../../assests/auth/login-img.jpg";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { loginApi } from "@/services/POST_API";
import { LoginPayload } from "@/types/auth";

const Login = () => {
  const router = useRouter();

  const [inputFieldsFormData, setInputFieldFormData] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const formHandler = async () => {
    try {
      const response = await loginApi(inputFieldsFormData);

      console.log("Login successful:", response);

      
      router.push("/dashboard");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-[400px]">
      <div className="flex w-full max-w-3xl p-8 space-x-8 bg-white rounded-lg shadow-lg">
        {/* Form Section */}
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Paytel-EMS
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              formHandler();
            }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={inputFieldsFormData.email}
                onChange={(e) =>
                  setInputFieldFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={inputFieldsFormData.password}
                onChange={(e) =>
                  setInputFieldFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>

            <Button type="submit" className="mt-6 w-full">
              Submit
            </Button>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-[100%] pt-14">
          <Image
            src={loginimg}
            alt="Login Image"
            layout="responsive"
            width={700}
            height={700}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
