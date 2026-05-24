import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"

export const Route = createFileRoute("/terms")({
  component: Terms,
})

function Terms() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["terms"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/terms`)
      return res.json()
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading terms</div>

  return <div>{data?.text}</div>
}