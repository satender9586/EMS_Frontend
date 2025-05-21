"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputTextField from "@/components/InputTextField"
import { basicInputFields, FormSchema } from "@/lib/AddNewEmployee"
import SelectOptionField from "@/components/SelectOptionField"



const AddNewEmployee = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { 
            first_name: "",
            last_name: "",
            gender: "",
            marital_status: "",
            blood_group: "",
            date_of_birth: "",
            phoneNumber:"",
            alterEmail:"",
            emergencyNumber:"",
            address:"",
            bank_name:"",
            bank_number:"",
            ifsc_number:"",
            pan_number:"",
            pf_number:""
         },
    })


    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("data", data)
    }



    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <div className="border bg-white rounded-sm border-[#E5E5E5] p-3">
                        <h1 className="text-[14px]">Personal </h1>
                        <div className="grid mt-2 grid-cols-3 gap-4">
                            {
                                basicInputFields?.slice(0,6)?.map(({ name, label, placeholder, type, options }) =>
                                    type === "text" || type == "date" || type == "number" || type == "email" ? (
                                        <InputTextField
                                            key={name}
                                            form={form}
                                            name={name}
                                            label={label}
                                            type={type}
                                            placeholder={placeholder}
                                        />
                                    ) : type === "select" ? (
                                        <SelectOptionField
                                            key={name}
                                            form={form}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                            options={options || []}
                                        />
                                    ) : null
                                )
                            }
                        </div>
                    </div>
                    <div className="border mt-2 bg-white rounded-sm border-[#E5E5E5] p-3">  
                        <h1 className="text-[14px]">Contact </h1>
                        <div className="grid mt-2 grid-cols-3 gap-4">
                            {
                                basicInputFields.slice(6,10)?.map(({ name, label, placeholder, type, options }) =>
                                    type === "text" || type == "date" || type == "number" || type == "email" ? (
                                        <InputTextField
                                            key={name}
                                            form={form}
                                            name={name}
                                            label={label}
                                            type={type}
                                            placeholder={placeholder}
                                        />
                                    ) : type === "select" ? (
                                        <SelectOptionField
                                            key={name}
                                            form={form}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                            options={options || []}
                                        />
                                    ) : null
                                )
                            }
                        </div>
                    </div>
                    <div className="border mt-2 bg-white rounded-sm border-[#E5E5E5] p-3">  
                        <h1 className="text-[14px]">Bank Details </h1>
                        <div className="grid mt-2 grid-cols-3 gap-4">
                            {
                                basicInputFields.slice(10   )?.map(({ name, label, placeholder, type, options }) =>
                                    type === "text" || type == "date" || type == "number" || type == "email" ? (
                                        <InputTextField
                                            key={name}
                                            form={form}
                                            name={name}
                                            label={label}
                                            type={type}
                                            placeholder={placeholder}
                                        />
                                    ) : type === "select" ? (
                                        <SelectOptionField
                                            key={name}
                                            form={form}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                            options={options || []}
                                        />
                                    ) : null
                                )
                            }
                        </div>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default AddNewEmployee
