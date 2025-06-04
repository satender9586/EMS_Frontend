"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { loginApi } from "@/services/POST_API";
import { setToken } from "@/utils/cookies";
import { storeAuthInLocalStorage } from "@/utils/methods";
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
        storeAuthInLocalStorage(auth);
        await setToken("accessToken", accessToken);
        await setToken("refreshToken", refreshToken);
        toast.success("Login Successfully!", { autoClose: 500 });
        router.push("/dashboard");
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || "Login failed";
      toast.error(message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen pt-[400px]">
      <div className="flex w-full max-w-3xl p-8 space-x-8 bg-white rounded-lg shadow-md">
        {/* Form Section */}
        <div className="w-full max-w-md space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <h2 className="text-3xl font-semibold text-center text-gray-800  pb-2">
                Paytel-HRMS
              </h2 >
              <h1 className="text-1xl font-semibold text-center text-gray-800 pb-2">
                Paytel-HRMS
              </h1 >
              <div className="">
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
              <Button type="submit" className="mt-4">
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
