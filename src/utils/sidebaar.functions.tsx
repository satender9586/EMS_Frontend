import { Calendar, Home, Inbox } from "lucide-react";
export interface SidebarItem {
  title: string;
  url: string;
  icon: any; 
}

export const ROLE_ITEMS: Record<string, SidebarItem[]> = {
  Super_Admin: [
    { title: "Home", url: "/dashboard", icon: Home },
    { title: "Attendence", url: "/attendence", icon: Inbox },
    { title: "Profile", url: "/profile", icon: Calendar },
    { title: "Organization", url: "/organization", icon: Calendar },
  ],
  Admin: [
    { title: "Home", url: "/dashboard", icon: Home },
    { title: "Attendence", url: "/attendence", icon: Home },
    { title: "Profile", url: "/profile", icon: Calendar },
    { title: "Organization", url: "/organization", icon:Calendar },
  ],
  Employee: [
    { title: "Attendence", url: "/attendence", icon: Inbox },
    { title: "Profile", url: "/profile", icon: Calendar },
  ],
};
