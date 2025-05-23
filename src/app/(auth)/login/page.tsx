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
  const router = useRouter()

  // Form change handler 
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFieldFormData({ ...inputFieldsFormData, [name]: value })
  }

  // Form submit and Login Api integration
  const formHandler = async () => {
     
    try {
      const isFieldEmpty = Object.values(inputFieldsFormData).some((val) => val == "")
      if (!isFieldEmpty) {
        const response = await loginApi(inputFieldsFormData)
        if (response?.status === 200) {
          const accessToken = response?.data?.accessToken
          const refreshToken = response?.data?.refreshToken
          const auth = response?.data?.data
          storeAuthInLocalStorage(auth)
          await setToken("accessToken",accessToken)
          await setToken("refreshToken",refreshToken)
          toast.success("Login Successfullt!..",{autoClose:500})
          router.push("/dashboard")
         
        }
      } else {
        toast.error("Field are missing!")
      }
    } catch (error: any) {
      const message = error?.response?.data.message;
       toast.error(message)
      alert(message)
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen pt-[400px]">
      <div className="flex w-full max-w-3xl p-8 space-x-8 bg-white rounded-lg shadow-lg">
        
        {/* Form Section */}
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Paytel-EMS</h2>
          <form onSubmit={(e) => { e.preventDefault(), formHandler() }}>
            <div>
              <label>Username</label>
              <Input placeholder="username" name='email' value={inputFieldsFormData?.email || ""} onChange={changeHandler} />
            </div>
            <div className="mt-2">
              <label>Password</label>
              <Input placeholder="password" type='password' name='password' value={inputFieldsFormData?.password || ""} onChange={changeHandler} />
            </div>
            <Button className="mt-2" type='submit'>Submit</Button>
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
  )
}

export default Login  