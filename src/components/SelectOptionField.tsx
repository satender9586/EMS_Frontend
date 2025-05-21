"use client"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { UseFormReturn } from "react-hook-form"

interface InputFieldProps {
  form: UseFormReturn<any>
  name: string
  label: string
  description?: string
  placeholder?: string
  type?: string,
  options: string[],
}

const SelectOptionField: React.FC<InputFieldProps> = ({ form, name, placeholder = "", label, options }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem >
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value} >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent >
              {
                options?.map((data) => (
                  <SelectItem  key={data} value={data}>{data}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default SelectOptionField