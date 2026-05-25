
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

export const Route = createFileRoute(
  "/_layout/courses/$courseId/",
)({
  component: CoursesPage,
})
const practices = [
  {
    id: 1,
    title: "Практична робота №4",
    description:
      "Створення інтерактивного прототипу",
    deadline: "Дедлайн: завтра, 18:00",
  },
]

const labs = [
  {
    id: 1,
    title: "Лабораторна №1",
    status: "Зараховано",
    completed: true,
  },

  {
    id: 2,
    title: "Лабораторна №2",
    status: "В процесі",
    completed: false,
  },
]

const courseProject = {
  title: "Курсовий проект",

  description:
    "Розробка дизайну мобільного додатку для управління освітнім процесом.",

  progress: 35,
}
const courses = [
  {
    id: 1,
    title: "Вища математика",
    category: "Математика",
  },

  {
    id: 2,
    title: "Алгоритми",
    category: "Програмування",
  },

  {
    id: 3,
    title: "Фізика",
    category: "Природничі науки",
  },

  {
    id: 4,
    title: "English for IT",
    category: "Мови",
  },
]

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

function CoursesPage() {

  const { courseId } = Route.useParams()

  const course = courses.find(
    (c) => String(c.id) === courseId,
  )

  const examDate = new Date(
    "2026-06-24T10:00:00",
  )

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

  if (!course) {
    return (
      <div className="p-8">
        Course not found
      </div>
    )
  }

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
              {course.category}
            </span>

            <span className="text-sm opacity-80">
              2025/2026 Навчальний рік
            </span>
          </div>

          <h1 className="text-5xl font-bold">
            {course.title}
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
                  {lectures.length} матеріалів
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

                    <button className="text-primary">
                      ⬇
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-card p-6 shadow-sm">

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-semibold">
                  Практичні
                </h2>

                <span className="text-sm text-muted-foreground">
                  {practices.length} занять
                </span>
              </div>

              <div className="space-y-4">

                {practices.map((practice) => (
                  <div
                    key={practice.id}
                    className="rounded-xl border bg-violet-50 p-4"
                  >

                    <p className="font-semibold">
                      {practice.title}
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {practice.description}
                    </p>

                    <p className="mt-3 text-sm italic text-violet-700">
                      {practice.deadline}
                    </p>

                    <button className="mt-4 w-full rounded-xl bg-indigo-600 py-2 font-semibold text-white">

                      Здати роботу
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-emerald-200 bg-card p-6 shadow-sm">

              <h2 className="mb-6 text-2xl font-semibold">
                Лабораторні
              </h2>

              <div className="space-y-4">

                {labs.map((lab) => (
                  <div
                    key={lab.id}
                    className={`rounded-xl p-4 ${
                      lab.completed
                        ? "bg-emerald-50"
                        : "bg-muted opacity-70"
                    }`}
                  >

                    <p className="font-medium">
                      {lab.completed ? "✅" : "⏳"}{" "}
                      {lab.title}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {lab.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-card p-6 shadow-sm">

              <h2 className="mb-6 text-2xl font-semibold">
                {courseProject.title}
              </h2>

              <p className="text-sm text-muted-foreground">
                {courseProject.description}
              </p>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-muted">

                <div
                  className="h-full rounded-full bg-amber-500"
                  style={{
                    width: `${courseProject.progress}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Прогрес: {courseProject.progress}%
                завершено
              </p>
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
                  24 червня, 10:00
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
