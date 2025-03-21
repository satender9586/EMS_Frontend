"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import loginimg from "../../../assests/auth/login-img.jpg"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  })
})

const Login = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = () => {
    console.log("form has been submit")

  }

  return (
    <div className="flex items-center justify-center min-h-screen pt-[400px]">
      <div className="flex w-full max-w-3xl p-8 space-x-8 bg-white rounded-lg shadow-lg">

        {/* Form Section */}
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Paytel-EMS</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username" className="text-sm text-gray-600">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        placeholder="Enter your Username"
                        {...field}
                        className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-600 mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password" className="text-sm text-gray-600">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your Password"
                        {...field}
                        className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-600 mt-1" />
                  </FormItem>
                )}
              />



              <Button
                // onClick={()=>   }
                type="submit"
                className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Login
              </Button>

            </form>
          </Form>
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