import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"


function getTimeRemaining(targetDate: Date) {
  const now = new Date()

  const difference =
    targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    return {
      months: 0,
      days: 0,
      hours: 0,
    }
  }

  const totalHours = Math.floor(
    difference / (1000 * 60 * 60),
  )

  const months = Math.floor(totalHours / (24 * 30))

  const days = Math.floor(
    (totalHours % (24 * 30)) / 24,
  )

  const hours = totalHours % 24

  return {
    months,
    days,
    hours,
  }
}
const lectures = [
  {
    id: 1,
    title: "01. Вступ до UX та дизайн-мислення",
    size: "PDF • 4.2 MB",
  },

  {
    id: 2,
    title: "02. Типографіка та сітки в UI",
    size: "PDF • 12.8 MB",
  },
]

const notes = [
  {
    id: 1,
    text: "Подивитися туторіал по Figma Auto Layout до четверга.",
    date: "Сьогодні, 10:15",
  },

  {
    id: 2,
    text: "Узгодити тему курсового проекту з Марією.",
    date: "Вчора, 16:40",
  },
]

const files = [
  {
    id: 1,
    name: "Силабус.pdf",
    size: "240 KB",
  },

  {
    id: 2,
    name: "Питання_до_іспиту.pdf",
    size: "1.1 MB",
  },

  {
    id: 3,
    name: "Шаблони_Figma.zip",
    size: "45.8 MB",
  },
]

export const Route = createFileRoute("/_layout/term")({
  component: CoursesPage,
})

function CoursesPage() {

  const examDate = new Date("2026-06-24T10:00:00")

  const [timeLeft, setTimeLeft] = useState(
    getTimeRemaining(examDate),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(
        getTimeRemaining(examDate),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Course banner"
          className="h-[260px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8 text-white">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-primary px-3 py-1 text-sm">
              Дизайн
            </span>

            <span className="text-sm opacity-80">
              2023/2024 Навчальний рік
            </span>
          </div>

          <h1 className="text-5xl font-bold">
            Проектування інтерфейсів (UI/UX)
          </h1>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  Лекції
                </h2>

                <span className="text-sm text-muted-foreground">
                  12 матеріалів
                </span>
              </div>

              <div className="space-y-4">
                {lectures.map((lecture) => (
                  <div
                    key={lecture.id}
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-muted"
                  >
                    <div>
                      <p className="font-medium">
                        {lecture.title}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {lecture.size}
                      </p>
                    </div>

                    <button className="text-primary hover:underline">
                      Download
                    </button>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full rounded-xl border py-3 hover:bg-muted">
                Переглянути всі лекції
              </button>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  Практики
                </h2>

                <span className="text-sm text-muted-foreground">
                  8 занять
                </span>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <h3 className="text-xl font-semibold">
                  Практична робота №4
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Створення інтерактивного прототипу
                </p>

                <p className="mt-4 font-medium text-primary">
                  Дедлайн: завтра, 18:00
                </p>

                <button className="mt-6 w-full rounded-xl bg-primary py-3 text-primary-foreground hover:opacity-90">
                  Здати роботу
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold">
                Лабораторні
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4">
                  <div className="h-3 w-3 rounded-full bg-green-500" />

                  <span>
                    Лабораторна №1 (Зараховано)
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-muted p-4">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />

                  <span>
                    Лабораторна №2 (В процесі)
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold">
                Курсовий проект
              </h2>

              <p className="text-muted-foreground">
                Розробка дизайну мобільного додатку для управління освітнім процесом.
              </p>

              <div className="mt-6">
                <div className="mb-2 h-3 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[35%] bg-amber-500" />
                </div>

                <p className="text-sm text-muted-foreground">
                  Прогрес: 35% завершено
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
              Загальні файли курсу
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="rounded-xl border p-4 transition hover:border-primary hover:bg-muted"
                >
                  <p className="font-medium">
                    {file.name}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {file.size}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="col-span-4 space-y-6">
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-sm">
            <h2 className="mb-6 text-sm uppercase tracking-widest opacity-80">
              До іспиту залишилось
            </h2>

            <div className="mb-6 flex items-center gap-6">
              <div>
                <p className="text-5xl font-bold">
                  {timeLeft.months}
                </p>

                <p className="text-sm opacity-80">
                  місяців
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">
                  {timeLeft.days}
                </p>

                <p className="text-sm opacity-80">
                  днів
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">
                  {timeLeft.hours}
                </p>

                <p className="text-sm opacity-80">
                  годин
                </p>
              </div>
              
            </div>

            <div className="border-t border-white/20 pt-4">
              <p>
                Дата іспиту:
                <span className="ml-2 font-semibold">
                  24 травня, 10:00
                </span>
              </p>

              <p className="mt-2">
                Аудиторія:
                <span className="ml-2 font-semibold">
                  402
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
              Викладачі
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  OK
                </div>

                <div>
                  <p className="font-semibold">
                    Проф. Олександр Коваль
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Лектор • Доктор наук
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  MS
                </div>

                <div>
                  <p className="font-semibold">
                    Марія Степаненко
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Практичні заняття
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Нотатки
              </h2>

              <button className="text-primary">
                Add
              </button>
            </div>

            <div className="space-y-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-xl border bg-muted/40 p-4"
                >
                  <p>{note.text}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs uppercase text-muted-foreground">
                      {note.date}
                    </span>

                    <button className="text-red-500 hover:opacity-70">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}