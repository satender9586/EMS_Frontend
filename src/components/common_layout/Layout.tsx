'use client';
import type { SidebarItem } from "@/utils/sidebaar.functions";
import { useEffect, useState } from "react";
import logo from "../../assests/dashboard/Logo.webp";
import {
  SidebarProvider, Sidebar, SidebarContent, SidebarGroup,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem,
  SidebarMenuButton, SidebarHeader, SidebarFooter,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Navbaar from "./Navbaar";
import Link from "next/link";
import { getCookies } from "@/utils/cookies";
import { ROLE_ITEMS } from "@/utils/sidebaar.functions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState("Employee");
  const [items, setItems] = useState<SidebarItem[]>([]);


  useEffect(() => {
    const fetchRole = async () => {
      try {
        const auth = await getCookies("auth");
        if (auth) {
          const parsed = JSON.parse(auth);
          const parsedRole = parsed?.role || "Employee";
          setRole(parsedRole);
          setItems(ROLE_ITEMS[parsedRole] || []);
        }
      } catch (err) {
        console.error("Error reading role from cookies", err);
      }
    };

    fetchRole();
  }, []);

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
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <main className="w-full h-full">
        <Navbaar />
        <div className="p-0 md:p-3">
          <div className="sm:border rounded-sm border-[#E5E5E5] p-2 md:p-3">
            {children}
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
