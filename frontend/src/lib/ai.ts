export async function askAI(message: string) {

  const isImage =
    message.toLowerCase().includes(".png") ||
    message.toLowerCase().includes(".jpg") ||
    message.toLowerCase().includes(".jpeg") ||
    message.toLowerCase().includes(".gif") ||
    message.toLowerCase().includes("намалюй") ||
    message.toLowerCase().includes("draw") ||
    message.toLowerCase().includes("згенеруй") ||
    message.toLowerCase().includes("generate") ||
    message.toLowerCase().includes("зобрази") ||
    message.toLowerCase().includes("show") ||
    message.toLowerCase().includes("юмл") ||
    message.toLowerCase().includes("uml") ||
    message.toLowerCase().includes("картинк") ||
    message.toLowerCase().includes("picture") ||
    message.toLowerCase().includes("діаграм") ||
    message.toLowerCase().includes("diagram")

  const url = isImage
    ? "http://localhost:8000/api/v1/ai/image"
    : "http://localhost:8000/api/v1/ai/chat"

  const body = { message }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })

  return res.json()
}