export async function askAI(message: string) {
  const res = await fetch("http://localhost:8000/api/v1/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  })

  return res.json()
}