import {
  Outlet,
  createFileRoute,
} from "@tanstack/react-router"

export const Route = createFileRoute(
  "/_layout/courses/$courseId/tasks/$taskId",
)({
  component: TermLayout,

})

function TermLayout() {
  return <Outlet />
}