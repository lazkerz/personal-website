import { SidebarProvider } from "@/components/atom/sidebar"
import { AppSidebar } from "@/components/mollecul/app-sidebar"

type PagesProps = {
  children: React.ReactNode
}
export default function Wrapper({ children }: PagesProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {children}
        <footer className="w-full bg-gray-100 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Nurul Lazira. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs">
                Software Developer • Making the web better, one line of code at a time
              </p>
            </div>
          </div>
        </footer>
      </main>
    </SidebarProvider>
  );
}
