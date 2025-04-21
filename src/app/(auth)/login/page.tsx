"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import loginimg from "../../../assests/auth/login-img.jpg"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { loginApi } from '@/services/POST_API'



const Login = () => {
  const [inputFieldsFormData,setInputFieldFormData]=useState({username:"sdf",password:"sdf"})

  const formHandler = async ()=>{
    try {
        const response = await loginApi(inputFieldsFormData)
        console.log(response)
    } catch (error) {
      console.log("Error in login Api : ",error)
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen pt-[400px]">
      <div className="flex w-full max-w-3xl p-8 space-x-8 bg-white rounded-lg shadow-lg">
        {/* Form Section */}
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Paytel-EMS</h2>
          <form onSubmit={(e)=>{e.preventDefault(),formHandler()}}>
            <div>
              <label>Username</label>
              <Input placeholder="username" />
            </div>
            <div className="mt-2">
              <label>Password</label>
              <Input placeholder="username" />
            </div>
            <Button className="mt-2">Submit</Button>
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