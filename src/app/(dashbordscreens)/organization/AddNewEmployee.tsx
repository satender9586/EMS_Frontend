import { Input } from '@/components/ui/input'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'



const AddNewEmployee = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-3 w-full'>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <div>
                        <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Leave Request Type*</h1>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text'></Input>
                </div>
                <div className=' '>
                    <div className="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                               Onboard employee with probation
                            </label>
                            
                        </div>
                    </div>
                </div>
                <div className=' flex justify-end items-center pt-7 '>
                    <Button className='rounded-sm'>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewEmployee