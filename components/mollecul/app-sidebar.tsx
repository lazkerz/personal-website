'use client'
import { Home, Leaf, Inbox, Send } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/atom/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/atom/avatar"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Resume",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Project",
    url: "#",
    icon: Leaf,
  },
  {
    title: "Contact",
    url: "#",
    icon: Send,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon" className="md:m-10 md:mt-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="flex items-center gap-3 border-b border-sidebar-border p-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/Nurul.jpg" alt="Nurul Fatma" />
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden duration-300 group-data-[collapsible=icon]:opacity-0">
              <p className="text-sm font-semibold truncate">Nurul Fatma Putri Lazira</p>
              <p className="text-xs font-medium text-muted-foreground truncate">Software Developer</p>
            </div>
          <SidebarTrigger />
          </SidebarHeader>
          <SidebarGroupLabel>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    tooltip={item.title}
                    size="lg"
                  >
                    <a href={item.url} className="flex items-center justify-center gap-4 px-4 py-3 h-14 group-data-[collapsible=icon]:px-0">
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="truncate text-base group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;