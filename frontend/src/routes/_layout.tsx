import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

import { Footer } from "@/components/Common/Footer"
import AppSidebar from "@/components/Sidebar/AppSidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { isLoggedIn } from "@/hooks/useAuth"


export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
})

function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b bg-background px-6 shadow-sm">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="text-muted-foreground" />

            <h1 className="text-lg font-semibold">
              Studdy
            </h1>
          </div>

          <div className="flex items-center gap-3">




            <button className="rounded-full transition hover:opacity-80">
              <img
                src="https://i.pravatar.cc/100"
                alt="User avatar"
                className="h-10 w-10 rounded-full border object-cover"
              />
            </button>
          </div>
        </header>
        <main className="flex-1 p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
