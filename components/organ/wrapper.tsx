import { SidebarProvider} from "@/components/atom/sidebar"
import {AppSidebar} from "@/components/mollecul/app-sidebar"

type PagesProps = {
    children: React.ReactNode
}
export default function Wrapper({ children } : PagesProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
            {children}
      </main>
    </SidebarProvider>
  );
}
