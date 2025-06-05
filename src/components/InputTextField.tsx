import React from 'react'
import {FormControl,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"

interface InputFieldProps {
  form: UseFormReturn<any>
  name: string
  label: string
  placeholder?: string
  type?: string
}


const InputTextField :React.FC<InputFieldProps> = ({form, name,placeholder="",type,label,}) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem >
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} type={type} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default InputTextField