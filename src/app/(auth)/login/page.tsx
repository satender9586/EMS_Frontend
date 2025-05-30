"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import loginimg from "../../../assests/auth/login-img.jpg"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { loginApi } from '@/services/POST_API'
import { LoginPayload } from '@/types/auth'
import { setToken } from '@/utils/cookies'
import { storeAuthInLocalStorage } from '@/utils/methods'
import { useRouter } from 'next/navigation'
  import {toast } from 'react-toastify';



const Login = () => {
  const [inputFieldsFormData, setInputFieldFormData] = useState<LoginPayload>({ email: "", password: "" })
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const router = useRouter()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFieldFormData({ ...inputFieldsFormData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }


  const formHandler = async () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!inputFieldsFormData.email) newErrors.email = "Email is required";
    if (!inputFieldsFormData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await loginApi(inputFieldsFormData);
      if (response?.status === 200) {
        const accessToken = response?.data?.accessToken;
        const refreshToken = response?.data?.refreshToken;
        const auth = response?.data?.data;
        storeAuthInLocalStorage(auth);
        await setToken("accessToken", accessToken);
        await setToken("refreshToken", refreshToken);
        toast.success("Login Successfully!", { autoClose: 500 });
        router.push("/dashboard");
      }
    } catch (error: any) {
      const message = error?.response?.data.message;
      toast.error(message);
      alert(message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen pt-[400px]">
      <div className="flex w-full max-w-3xl p-8 space-x-8 bg-white rounded-lg shadow-lg">
        
        {/* Form Section */}
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Paytel-EMS</h2>
          <form onSubmit={(e) => { e.preventDefault(); formHandler(); }}>
            <div>
              <label>Username</label>
              <Input
                placeholder="username"
                name='email'
                value={inputFieldsFormData.email}
                onChange={changeHandler}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div className="mt-2">
              <label>Password</label>
              <Input
                placeholder="password"
                type='password'
                name='password'
                value={inputFieldsFormData.password}
                onChange={changeHandler}
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>
            <Button className="mt-4" type='submit'>Submit</Button>
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
