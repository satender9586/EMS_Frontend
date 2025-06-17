"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { loginApi } from "@/services/POST_API";
import { setCookies } from "@/utils/cookies";
import { setLocalStorage } from "@/utils/methods";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LoginBasicInputFields, LoginFormSchema } from "@/lib/LoginSchema";
import InputTextField from "@/components/InputTextField";



const Login = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    try {
      const response = await loginApi(data);
      if (response?.status === 200) {
        const accessToken = response?.data?.accessToken;
        const refreshToken = response?.data?.refreshToken;
        const auth = response?.data?.data;
        setLocalStorage(auth);
        await setCookies("auth",JSON.stringify({role:auth?.role,employeeId:auth?.employee_id}))
        await setCookies("accessToken", accessToken);
        await setCookies("refreshToken", refreshToken);
        toast.success("Login Successfully!", { autoClose: 500 });
        const defaultPath = auth?.role==="Super_Admin" || auth?.role==="Admin" ? "/dashboard" : "/attendence"
        router.push(defaultPath);
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || "Login failed";
      toast.error(message);
    }
  }

  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <div className="flex  p-5 min-w-[400px] space-x-8 bg-white rounded-lg shadow-lg">

        {/* Form Section */}
        <div className="w-full max-w-md">
          <div>
            <h2 className="text-[25px] font-semibold text-center text-gray-800 ">
              Welcome to Paytel-HRMS
            </h2 >
            <h1 className="text-[12px] font-semibold text-center text-gray-800 mt-1">
              Your secure gateway to employee management.
            </h1 >
          </div>
          <Form {...form}>
            <form className="p-4 flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div >
                {LoginBasicInputFields?.map(({ name, label, placeholder, type }) => (
                  <InputTextField
                    key={name}
                    form={form}
                    name={name}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                  />
                ))}
              </div>
              <Button type="submit" >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
