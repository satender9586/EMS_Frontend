"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputTextField from "@/components/InputTextField"
import { basicInputFields, FormSchema } from "@/lib/AddNewEmployee"
import SelectOptionField from "@/components/SelectOptionField"
import { addEmpPersonalApi,addEmpContactApi,addEmpBankApi} from "@/services/POST_API"

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
            phoneNumber: "",
            alterEmail: "",
            emergencyNumber: "",
            address: "",
            bank_name: "",
            bank_number: "",
            ifsc_number: "",
            pan_number: "",
            pf_number: ""
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            
            const personalDetails = {
                first_name: data.first_name,
                last_name: data.last_name,
                gender: data.gender,
                marital_status: data.marital_status,
                blood_group: data.blood_group,
                date_of_birth: data.date_of_birth,
               
            }

            const contactDetails = {
                phoneNumber: data.phoneNumber,
                alterEmail: data.alterEmail,
                emergencyNumber: data.emergencyNumber,
                address: data.address
            }

            const bankDetails = {
                bank_name: data.bank_name,
                bank_number: data.bank_number,
                ifsc_number: data.ifsc_number,
                pan_number: data.pan_number,
                pf_number: data.pf_number
            }

            // Making API calls
            const personalRes = await addEmpPersonalApi({...personalDetails, employee_id:"PTY-0002"})
            const contactRes = await addEmpContactApi({...contactDetails,employee_id:"PTY-0002"})
            const bankRes = await addEmpBankApi({...bankDetails, employee_id:"PTY-0002"})

            console.log("Personal API Response:", personalRes)
            console.log("Contact API Response:", contactRes)
            console.log("Bank API Response:", bankRes)

            alert("Employee data submitted successfully!")

        } catch (error) {
            console.error("Submission error:", error)
            alert("Failed to submit employee data.")
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <div className="border bg-white rounded-sm border-[#E5E5E5] p-3">
                        <h1 className="text-[20px] solid">Personal Details</h1>
                        <div className="grid mt-2 grid-cols-3 gap-4">
                            {basicInputFields?.slice(0, 6)?.map(({ name, label, placeholder, type, options }) =>
                                type === "text" || type === "date" || type === "number" || type === "email" ? (
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
                            )}
                        </div>
                    </div>

                    <div className="border mt-2 bg-white rounded-sm border-[#E5E5E5] p-3">
                        <h1 className="text-[14px]">Contact</h1>
                        <div className="grid mt-2 grid-cols-3 gap-4">
                            {basicInputFields.slice(6, 10)?.map(({ name, label, placeholder, type, options }) =>
                                type === "text" || type === "date" || type === "number" || type === "email" ? (
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
                            )}
                        </div>
                    </div>

                    <div className="border mt-2 bg-white rounded-sm border-[#E5E5E5] p-3">
                        <h1 className="text-[14px]">Bank Details</h1>
                        <div className="grid mt-2 grid-cols-3 gap-4">
                            {basicInputFields.slice(10)?.map(({ name, label, placeholder, type, options }) =>
                                type === "text" || type === "date" || type === "number" || type === "email" ? (
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
                            )}
                        </div>
                    </div>

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default AddNewEmployee
