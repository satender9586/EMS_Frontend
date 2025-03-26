import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { TiPin } from "react-icons/ti";
import { PiWarning } from "react-icons/pi";

// Memoize OrganizationEmployees component to avoid unnecessary re-renders
const OrganizationEmployees = React.memo(() => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Employee 1 */}
            <div className="shadow border p-3 rounded-sm bg-white hover:shadow-xl transition-all">
                <div className="flex gap-2">
                    <div className="min-w-[40px] py-2">
                        <div className="bg-[#CCCCCC] w-full min-h-[40px] rounded-full"></div>
                    </div>
                    <div className="w-[160px]">
                        <h1 className="font-[popplins] text-sm font-bold">Raj Kumar</h1>
                        <h1 className="text-[#777777] text-[13px] font-[400] leading-[16px] break-words">
                            Information Technologies Department
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
                                        <DropdownMenuItem>
                                            Edit
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Delete
                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Login Disable
                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Mobile Login Disable
                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Download Profile
                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex items-center mt-2 gap-2">
                            <HoverCard>
                                <HoverCardTrigger className="bg-[#FFF2CA] p-2 rounded-full">
                                    <PiWarning />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    The React Framework – created and maintained by @vercel.
                                </HoverCardContent>
                            </HoverCard>
                            <h1 className="bg-[#D9EDDA] rounded-full text-green-600 p-1 px-3 text-[12px] font-[500]">
                                Active
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-[#777777] text-[14px] font-[500] leading-[14px] break-words">
                        EMP-12342123345
                    </h1>
                    <h1 className="mt-1.5 text-[#777777] text-[14px] font-[500] leading-[14px] break-words">
                        satender@paytelgroup.com
                    </h1>
                </div>
            </div>

            {/* Employee 2 */}
            <div className="shadow border p-3 rounded-sm bg-white hover:shadow-xl transition-all">
                <div className="flex gap-2">
                    <div className="min-w-[40px] py-2">
                        <div className="bg-[#CCCCCC] w-full min-h-[40px] rounded-full"></div>
                    </div>
                    <div className="w-[160px]">
                        <h1 className="font-[popplins] text-sm font-bold">Raj Kumar</h1>
                        <h1 className="text-[#777777] text-[13px] font-[400] leading-[16px] break-words">
                            Information Technologies Department
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
                                        <DropdownMenuItem>
                                            Edit
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Delete
                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Login Disable
                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Mobile Login Disable
                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Download Profile
                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex items-center mt-2 gap-2">
                            <HoverCard>
                                <HoverCardTrigger className="bg-[#FFF2CA] p-2 rounded-full">
                                    <PiWarning />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    {/* Empty Content */}
                                </HoverCardContent>
                            </HoverCard>
                            <h1 className="bg-[#D9EDDA] rounded-full text-green-600 p-1 px-3 text-[12px] font-[500]">
                                Active
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-[#777777] text-[14px] font-[500] leading-[14px] break-words">
                        EMP-12342123345
                    </h1>
                    <h1 className="mt-1.5 text-[#777777] text-[14px] font-[500] leading-[14px] break-words">
                        satender@paytelgroup.com
                    </h1>
                </div>
            </div>

             {/* Employee 2 */}
             <div className="shadow border p-3 rounded-sm bg-white hover:shadow-xl transition-all">
                <div className="flex gap-2">
                    <div className="min-w-[40px] py-2">
                        <div className="bg-[#CCCCCC] w-full min-h-[40px] rounded-full"></div>
                    </div>
                    <div className="w-[160px]">
                        <h1 className="font-[popplins] text-sm font-bold">Raj Kumar</h1>
                        <h1 className="text-[#777777] text-[13px] font-[400] leading-[16px] break-words">
                            Information Technologies Department
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
                                        <DropdownMenuItem>
                                            Edit
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Delete
                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Login Disable
                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Mobile Login Disable
                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Download Profile
                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex items-center mt-2 gap-2">
                            <HoverCard>
                                <HoverCardTrigger className="bg-[#FFF2CA] p-2 rounded-full">
                                    <PiWarning />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    {/* Empty Content */}
                                </HoverCardContent>
                            </HoverCard>
                            <h1 className="bg-[#D9EDDA] rounded-full text-green-600 p-1 px-3 text-[12px] font-[500]">
                                Active
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-[#777777] text-[14px] font-[500] leading-[14px] break-words">
                        EMP-12342123345
                    </h1>
                    <h1 className="mt-1.5 text-[#777777] text-[14px] font-[500] leading-[14px] break-words">
                        satender@paytelgroup.com
                    </h1>
                </div>
            </div>
        </div>
    );
});

export default OrganizationEmployees;
