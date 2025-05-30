'use client'

import { LogOut, Settings, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { loggedOutApi } from "@/services/POST_API"
import { clearLocalStorage, getLocalStrageData } from "@/utils/methods"
import { deleteToken } from "@/utils/cookies"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react"

export function UserDropdownMenu() {
    const router = useRouter()
<<<<<<< HEAD
    const datalocalStorage = getLocalStrageData("user")
<<<<<<< HEAD
<<<<<<< HEAD
    // const{role}=JSON.parse(datalocalStorage)
=======
    const{role}= JSON.parse(datalocalStorage)
>>>>>>> 60dc5c16127d5a31f9c216f208f876e1d6d3d3b7
=======
    const localStorageData= JSON.parse(datalocalStorage)
    // console.log("roles",localStorageData)
>>>>>>> e5f1e383d1bd1dd909d8fcca790ce3041fb5aa25
=======
    
    const [userData, setUserData] = useState<any>(null)



    useEffect(() => {
        const storedData = getLocalStrageData("user")
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData)
                setUserData(parsedData)
            } catch (error) {
                console.error("Error parsing user data from localStorage", error)
            }
        }
    }, [])
>>>>>>> 85ebdbaf35e22d02c2d7fa129bc2e8b2239730b8


    const loggedOutHandler = async () => {
        try {
            const response = await loggedOutApi()
            clearLocalStorage("user")
            deleteToken("accessToken")
            deleteToken("refreshToken")
            router.push("/dashboard")
        } catch (error) {
            console.log("something went wrong!")
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="flex justify-end items-center p-0 min-h-0 border-1 px-6 py-5.5 rounded-full bg-white shadow-none hover:bg-transparent focus:border-0 focus:outline-none focus:visible:ring-[]"
                >
                    <div className="border p-2 rounded-full">
                        <User />
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    {/* <h1 className="tracking-[1px] font-normal">{role}</h1> */}
=======
                    {/* <h1 className="tracking-[1px] font-normal">{localStorageData?.role}</h1> */}
>>>>>>> e5f1e383d1bd1dd909d8fcca790ce3041fb5aa25
                    <span>
=======
                    {/* Use the role from localStorage if available */}
                    <span className="flex items-center gap-1">
                        {userData ? userData.role : 'Loading...'}
>>>>>>> 85ebdbaf35e22d02c2d7fa129bc2e8b2239730b8
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
