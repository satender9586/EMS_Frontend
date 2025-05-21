'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
// import { UserDetailsApi } from '@/services/POST_API'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

// TypeScript interface for user details payload
interface UserDetailsPayload {
    first_name: string | null
    last_name: string | null
    date_of_birth: string | null
    gender: string | null
    marital_status: string | null
    blood_group: string | null
}

const AddNewEmployee: React.FC = () => {
    // State for the required API fields
    const [firstName, setFirstName] = useState<string | null>(null)
    const [lastName, setLastName] = useState<string | null>(null)
    const [dob, setDob] = useState<string | null>(null)
    const [gender, setGender] = useState<string | null>(null)
    const [maritalStatus, setMaritalStatus] = useState<string | null>(null)
    const [bloodGroup, setBloodGroup] = useState<string | null>(null)

    // Submit handler
    const handleSubmit = async () => {
        const payload: UserDetailsPayload = {
            first_name: firstName,
            last_name: lastName,
            date_of_birth: dob,
            gender: gender,
            marital_status: maritalStatus,
            blood_group: bloodGroup,
        }

        // try {
        //     const response = await UserDetailsApi(payload)
        //     console.log('UserDetailsApi Response:', response)
        // } catch (error) {
        //     console.error('UserDetailsApi Error:', error)
        // }
    }

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee ID*</h1>
                    <Input type='text' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Leave Request Type*</h1>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Leave Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Employee Name*</h1>
                    <Input type='text' onChange={(e) => {
                        const fullName = e.target.value.split(' ')
                        setFirstName(fullName[0] || null)
                        setLastName(fullName.slice(1).join(' ') || null)
                    }} />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Department*</h1>
                    <Input type='text' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Position*</h1>
                    <Input type='text' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Salary*</h1>
                    <Input type='text' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Contact Number*</h1>
                    <Input type='text' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Email Address*</h1>
                    <Input type='email' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Date of Birth*</h1>
                    <Input type='date' onChange={(e) => setDob(e.target.value)} />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Joining Date*</h1>
                    <Input type='date' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Emergency Contact*</h1>
                    <Input type='text' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Address*</h1>
                    <Input type='text' />
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Gender</h1>
                    <Select onValueChange={(value) => setGender(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Marital Status</h1>
                    <Select onValueChange={(value) => setMaritalStatus(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Marital Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="single">Single</SelectItem>
                            <SelectItem value="married">Married</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <h1 className='py-1 text-[14px] font-[popplins] font-[500] text-[#656464]'>Blood Group</h1>
                    <Input type='text' placeholder="e.g. O+, A-" onChange={(e) => setBloodGroup(e.target.value)} />
                </div>
                <div className='col-span-1 sm:col-span-2 lg:col-span-3'>
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
                <div className='flex justify-end items-center pt-7 col-span-1 sm:col-span-2 lg:col-span-3'>
                    <Button className='rounded-sm' onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewEmployee
