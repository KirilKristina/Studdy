import {
  Outlet,
  createFileRoute,
} from "@tanstack/react-router"

export const Route = createFileRoute(
  "/_layout/courses/$courseId/tasks",
)({
  component: TermLayout,

  staticData: {
    title: "Tasks",
  },
})

function TermLayout() {
  return <Outlet />
}