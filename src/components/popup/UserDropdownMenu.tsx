'use client'

import { LogOut,  User, ChevronDown } from "lucide-react"
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
import Link from "next/link"


export function UserDropdownMenu() {
    const router = useRouter()
    const [userData, setUserData] = useState<any>(null)



    useEffect(() => {
        const storedData = getLocalStrageData("user")
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData)
                setUserData(parsedData)
            } catch (error) {
                console.error("Error  from localStorage", error)
            }
        }
    }, [])


const loggedOutHandler = async () => {
        try {
            const response = await loggedOutApi()
            clearLocalStorage("user")
            deleteToken("accessToken")
            deleteToken("refreshToken")
            router.push("/")
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
                    {/* Use the role from localStorage if available */}
                    <span className="flex items-center gap-1">
                        {userData ? userData.role : 'Loading...'}
                        <ChevronDown />
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-1">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={"/profile"}>
                        <DropdownMenuItem>
                            <User />
                            <span>Profile</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
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
