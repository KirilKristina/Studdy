import {
  Outlet,
  createFileRoute,
} from "@tanstack/react-router"

export const Route = createFileRoute(
  "/_layout/courses",
)({
  component: CoursesLayout,
  staticData: {
  title: "Courses",
}
})


function CoursesLayout() {
  return <Outlet />
}


