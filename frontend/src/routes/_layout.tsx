
import {
  createFileRoute,
  Outlet,
  redirect,
  useMatches,
} from "@tanstack/react-router"

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

const courses = [
  {
    id: 1,
    title: "Вища математика",
  },

  {
    id: 2,
    title: "Алгоритми",
  },

  {
    id: 3,
    title: "Фізика",
  },

  {
    id: 4,
    title: "English for IT",
  },
]

function Layout() {

  const matches = useMatches()

  const breadcrumbs: string[] = []

    matches.forEach((match) => {

      const staticTitle =
        (match.staticData as {
          title?: string
        })?.title

      if (
        staticTitle &&
        !breadcrumbs.includes(staticTitle)
      ) {
        breadcrumbs.push(staticTitle)
      }

      if ("courseId" in match.params) {

        const courseId = (
          match.params as {
            courseId: string
          }
        ).courseId

        const course = courses.find(
          (c) =>
            String(c.id) === courseId,
        )

        if (
          course?.title &&
          !breadcrumbs.includes(course.title)
        ) {
          breadcrumbs.push(course.title)
        }
      }
    })
    breadcrumbs.reverse()

  return (
    <SidebarProvider>

      <AppSidebar />

      <SidebarInset>

        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b bg-background px-6 shadow-sm">

          <div className="flex items-center gap-3">

            <SidebarTrigger className="text-muted-foreground" />

            <div className="flex items-center gap-2 text-sm">

              {breadcrumbs.map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-2"
                >

                  <span
                    className={
                      index === breadcrumbs.length - 1
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {item}
                  </span>

                  {index !== breadcrumbs.length - 1 && (

                    <span className="text-muted-foreground">
                      /
                    </span>
                  )}
                </div>
              ))}
            </div>
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

