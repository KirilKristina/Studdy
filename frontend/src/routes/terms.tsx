import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"

export const Route = createFileRoute("/terms")({
  component: Terms,
})

function Terms() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["terms"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/terms`)
      return res.json()
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading terms</div>

  return <div>(
    <title>My Courses</title>
    <h1>This term courses:</h1>
    <div className="courses-list">
      {data?.courses.map((course: any) => (
        <div key={course.id} className="course-item">
          <h2>{course.name}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
    <h2>Success data getting:</h2>
    {data?.text} ) 
  </div>
}