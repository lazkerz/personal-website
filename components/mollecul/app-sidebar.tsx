'use client'

import { Home, Leaf, Inbox, Send } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
} from "@/components/atom/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atom/avatar"
import { cn } from "@/lib/utils"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: Inbox,
  },
  {
    title: "Project",
    url: "/project",
    icon: Leaf,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Send,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <>
      <Sidebar
        variant="sidebar"
        collapsible="icon"
        className="hidden md:flex md:m-10 md:mt-0"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarHeader className="flex items-center gap-3 border-b border-sidebar-border p-4">
              <Avatar className="w-20 h-20 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 transition-all duration-300">
                <AvatarImage src="/nurul.jpg" alt="Nurul Fatma" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center overflow-hidden duration-300 group-data-[collapsible=icon]:opacity-0">
                <p className="text-sm font-semibold truncate">
                  Nurul Fatma Putri Lazira
                </p>
                <p className="text-xs font-medium text-muted-foreground truncate">
                  Software Developer
                </p>
              </div>
              <SidebarTrigger />
            </SidebarHeader>
            <SidebarGroupLabel></SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title} size="lg">
                      <Link
                        href={item.url}
                        className={cn(
                          "flex items-center justify-center gap-4 px-4 py-3 h-14 group-data-[collapsible=icon]:px-0",
                          pathname === item.url ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span className="truncate text-base group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Mobile Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 md:hidden">
        <nav className="flex w-[95%] items-center justify-around rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border px-2 py-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={cn(
                "flex flex-col items-center gap-1 p-2 transition-colors",
                pathname === item.url 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default AppSidebar