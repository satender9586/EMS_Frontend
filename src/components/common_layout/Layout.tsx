import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import logo from "../../assests/dashboard/Logo.webp"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Navbaar from "./Navbaar"


const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Attendence",
    url: "/attendence",
    icon: Inbox,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Calendar,
  },
  {
    title: "Organization",
    url: "/organization",
    icon: Calendar,
  },
  {
    title: "Logout",
    url: "#",
    icon: Search,
  },

]

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Image src={logo} alt="logo" objectFit="cover" width={180} height={180} />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className="hover:text-[#008AFF]" asChild>
                      <a  href={item.url}>
                       <item.icon />
                        <span >{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
        </SidebarFooter>
      </Sidebar>
      <main className="w-full h-full">
  <Navbaar />
  <div className="p-0 md:p-3">
    <div className=" sm:border rounded-sm border-[#E5E5E5] p-2 md:p-3">
      {children}
    </div>
  </div>
</main>

    </SidebarProvider>
  )
}

export default Layout