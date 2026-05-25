import {
  Outlet,
  createFileRoute,
} from "@tanstack/react-router"

export const Route = createFileRoute(
  "/_layout/courses/$courseId",
)({
  component: CourseLayout,

})

function CourseLayout() {
  return <Outlet />
}