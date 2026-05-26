import { createFileRoute } from '@tanstack/react-router'
import { askAI } from "@/lib/ai"
import { useState } from "react"

export const Route = createFileRoute('/_layout/tasks/$taskId')({
  component: TaskPage,
})

function TaskPage() {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  async function handleAskAI(text?: string) {
  const query = text || message

  if (!query) return

  setLoading(true)

  try {
    const data = await askAI(query)
    // 🔥 тепер зберігаємо весь об'єкт (text/file)
    setResponse(data)
  } catch (e) {
    console.error(e)
  } finally {
    setLoading(false)
  }
}

  return (
    <main className="flex gap-6">
      <div className="flex-[2] flex flex-col gap-6">
        <section className="rounded-xl border bg-card p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Практика
            </span>

            <span className="text-muted-foreground">
              Курс: Проектування інтерфейсів
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-bold">
            Розробка інформаційної архітектури мобільного додатку
          </h1>

          <div className="space-y-4 text-muted-foreground">
            <p>
              Мета роботи: Спроектувати логічну структуру та навігаційну схему
              для додатку з управління освітніми процесами.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Аналіз цільової аудиторії</li>
              <li>Створення User Flow</li>
              <li>Побудова Sitemap</li>
              <li>Опис навігації та ієрархії контенту</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border bg-card p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">
            Матеріали до завдання
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-between rounded-lg border p-4 transition hover:border-primary">
              <div>
                <p className="font-medium">
                  Методичні_вказівки_IA.pdf
                </p>

                <p className="text-sm text-muted-foreground">
                  2.4 MB
                </p>
              </div>

              <button className="rounded-md border px-4 py-2 text-sm hover:bg-muted">
                Download
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4 transition hover:border-primary">
              <div>
                <p className="font-medium">
                  Шаблон_звіту.docx
                </p>

                <p className="text-sm text-muted-foreground">
                  1.1 MB
                </p>
              </div>

              <button className="rounded-md border px-4 py-2 text-sm hover:bg-muted">
                Download
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-dashed bg-card p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <h2 className="mb-3 text-2xl font-semibold">
              Завантажити звіт
            </h2>

            <p className="mb-6 text-muted-foreground">
              Перетягніть файл або натисніть кнопку
            </p>

            <button className="rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90">
              Обрати файл
            </button>

            <p className="mt-4 text-sm text-muted-foreground">
              PDF, DOCX, ZIP до 50MB
            </p>
          </div>
        </section>

        <section className="rounded-xl border bg-card p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">
            Особисті нотатки
          </h2>

          <textarea
            placeholder="Ваші нотатки..."
            className="min-h-[140px] w-full rounded-lg border bg-background p-4 outline-none transition focus:border-primary"
          />

          <div className="mt-4 flex justify-end">
            <button className="rounded-lg border px-4 py-2 hover:bg-muted">
              Зберегти
            </button>
          </div>
        </section>
      </div>

      <aside className="w-[340px] shrink-0 space-y-6">
        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                Статус
              </p>

              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="text-xl font-semibold">
                  У процесі
                </span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                Дедлайн
              </p>

              <p className="text-xl font-semibold text-red-500">
                15 Жовтня, 23:59
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                Викладач
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  OM
                </div>

                <div>
                  <p className="font-medium">
                    Олена Марченко
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Кафедра дизайну
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl bg-primary p-6 text-primary-foreground shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">
            AI Асистент
          </h2>

          <p className="mb-6 text-sm opacity-90">
            Я можу допомогти з User Flow, Sitemap або структурою застосунку.
          </p>

          {/* quick buttons */}
          <div className="space-y-3">
            <button
              onClick={() => handleAskAI("Що таке User Flow?")}
              className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-left transition hover:bg-white/20"
            >
              Що таке User Flow?
            </button>

            <button
              onClick={() => handleAskAI("Як створити Sitemap?")}
              className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-left transition hover:bg-white/20"
            >
              Як створити Sitemap?
            </button>
          </div>

          {/* input */}
          <div className="mt-6 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Запитати AI..."
              className="flex-1 rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder:text-white/60 outline-none"
            />

            <button
              onClick={() => handleAskAI()}
              className="rounded-lg bg-white/20 px-4 hover:bg-white/30"
            >
              →
            </button>
          </div>

          {/* response (FIXED) */}
          <div className="mt-6 rounded-lg bg-white/10 p-4 text-sm whitespace-pre-wrap">
            {loading && "AI думає..."}

            {response?.type === "text" && (
              <div>{response.content}</div>
            )}

            {response?.type === "file" && (
              <div>
                <p>📄 DOCX готовий</p>

                <a 
                  href={`http://localhost:8000${response.download_url}`} 
                  target="_blank"
                  rel="noreferrer" // Рекомендується додавати для безпеки
                >
                  Download file
                </a>
              </div>
            )}

            {response?.type === "image" && (
              <img
                src={response.url}
                className="rounded-lg"
              />
            )}
          </div>
        </section>
        
      </aside>
    </main>
  )
}
