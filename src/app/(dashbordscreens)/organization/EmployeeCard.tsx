import React from 'react'
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TiPin } from "react-icons/ti";
import { authInfoInterface } from "@/types/profile";
import Link from 'next/link';
import { activeInctiveApi } from '@/services/PATCH_API';



interface EmployeeCardPropsInterface {
    cardData: authInfoInterface
}

const EmployeeCard: React.FC<EmployeeCardPropsInterface> = ({ cardData }) => {

    const { user_info, personal_info, bank_info, contact_info } = cardData
    const { department, email, employee_id, role, status } = user_info;
    const { } = personal_info;
    const { } = bank_info;
    const { } = contact_info;

    const activeInactiveHandler = async ()=>{
        try {
            const resposne = await activeInctiveApi({employeeId:employee_id})
            console.log("resposne",resposne)
        } catch (error) {
            console.log("error",error)
        }
    }


    return (
        <div className="shadow border p-3 rounded-sm bg-white hover:shadow-xl transition-all">
            <div className="flex gap-2">
                <div className="min-w-[40px] py-2">
                    <div className="bg-[#CCCCCC] w-full min-h-[40px] rounded-full"></div>
                </div>
                <div className="w-[160px]">
                    <h1 className="font-[popplins] text-sm font-bold">{personal_info?.first_name + " " + personal_info?.last_name}</h1>
                    <h1 className="text-[#777777] text-[13px] font-[400] leading-[16px] break-words">
                        {user_info?.department}
                    </h1>
                    <h1 className="font-bold text-[#777777] text-[13px] leading-[16px] break-words">
                        Frontend Developer
                    </h1>
                </div>
                <div className="flex-1 flex items-end flex-col">
                    <div className="flex items-center gap-3">
                        <div><TiPin className="text-[20px]" /></div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <HiOutlineDotsVertical className="text-[20px]" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <Link href={`/organization/profile-edit/${employee_id}`}>
                                        <DropdownMenuItem>
                                            Edit
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </Link>
                                    
                                    <DropdownMenuItem onClick={activeInactiveHandler}>
                                        status
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    {/* <DropdownMenuItem>
                                        Delete
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Login Disable
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                    </DropdownMenuItem> */}
                                    {/* <DropdownMenuItem>
                                        Mobile Login Disable
                                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Download Profile
                                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                    </DropdownMenuItem> */}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center mt-2 gap-2">

                        <h1 className={`bg-[#D9EDDA] rounded-full ${status == "active" ? "text-green-600" : "text-red-600"}  p-1 px-3 text-[12px] font-[500]`}>
                            {status}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h1 className="text-[#777777] text-[14px] font-[500] leading-[14px] break-words">
                    {employee_id}
                </h1>
                <h1 className="mt-1.5 text-[#777777] text-[14px] font-[500] leading-[14px] break-words">
                    {email}
                </h1>
            </div>
        </div>
    )
}

export default EmployeeCard