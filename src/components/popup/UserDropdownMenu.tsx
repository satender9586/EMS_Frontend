
'use client'
import {
    LogOut,
    Settings,
    User,
    ChevronDown
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { loggedOutApi } from "@/services/POST_API"
import { clearLocalStorage } from "@/utils/methods"
import { deleteToken } from "@/utils/cookies"


export function UserDropdownMenu() {

    const loggedOutHandler = async () => {
        try {
            const response = await loggedOutApi()
            clearLocalStorage("user")
            deleteToken("accessToken")
            deleteToken("refreshToken")
        } catch (error) {
            console.log("something is wrong!")
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="flex   justify-end items-center p-0 min-h-0 border-1 px-6 py-5.5 rounded-full bg-white shadow-none hover:bg-transparent focus:border-0 focus:outline-none focus:visible:ring-[]"
                >
                    <div className="border p-2 rounded-full">
                        <User />
                    </div>
                    <h1 className="tracking-[1px] font-normal">Satish</h1>
                    <span>
                        <ChevronDown />
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-1">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>

                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => loggedOutHandler()}>
                    <LogOut />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
