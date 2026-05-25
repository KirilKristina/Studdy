import { createFileRoute } from "@tanstack/react-router"
import {
  BookOpen,
  Calendar,
  Code,
  FlaskConical,
  Globe,
  MoreVertical,
} from "lucide-react"
import { Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/courses/")({
  component: TermsPage,

  staticData: {
  title: "Courses",
},
})

const courses = [
  {
    id: 1,
    title: "Вища математика",
    category: "Математика",
    progress: 75,
    lesson: "Матричне числення",
    time: "Сьогодні, 10:00",
    icon: BookOpen,
    color: "bg-emerald-100 text-emerald-700",
  },

  {
    id: 2,
    title: "Алгоритми",
    category: "Програмування",
    progress: 42,
    lesson: "Сортування масивів",
    time: "Вівторок, 14:30",
    icon: Code,
    color: "bg-amber-100 text-amber-700",
  },

  {
    id: 3,
    title: "Фізика",
    category: "Природничі науки",
    progress: 15,
    lesson: "Оптичні явища",
    time: "Середа, 09:00",
    icon: FlaskConical,
    color: "bg-blue-100 text-blue-700",
  },

  {
    id: 4,
    title: "English for IT",
    category: "Мови",
    progress: 90,
    lesson: "Agile Methodologies",
    time: "Четвер, 16:00",
    icon: Globe,
    color: "bg-purple-100 text-purple-700",
  },
]

function TermsPage() {
  return (
    <main className="space-y-8">

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Семестр 4
          </p>

          <h1 className="text-4xl font-bold">
            Активні курси
          </h1>
        </div>

        <div className="flex items-center gap-2 rounded-xl border bg-card p-1">
          <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
            Поточні
          </button>

          <button className="rounded-lg px-5 py-2 text-sm text-muted-foreground hover:bg-muted">
            Архів
          </button>

          <button className="rounded-lg px-5 py-2 text-sm text-muted-foreground hover:bg-muted">
            Всі
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <BookOpen className="h-5 w-5" />
          </div>

          <p className="text-sm text-muted-foreground">
            Середній бал
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            94.2
          </h2>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Calendar className="h-5 w-5" />
          </div>

          <p className="text-sm text-muted-foreground">
            Годин цього тижня
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            24 год
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-sm md:col-span-2">

          <div className="relative z-10">
            <h2 className="text-2xl font-bold">
              Наступна лекція
            </h2>

            <p className="mt-2 opacity-90">
              Алгоритми та структури даних • 14:30
            </p>
          </div>

          <BookOpen className="absolute bottom-[-20px] right-[-20px] h-32 w-32 opacity-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        {courses.map((course) => {
          const Icon = course.icon

          return (
            <Link
              key={course.id}
              to="/courses/$courseId"
              params={{
                courseId: String(course.id),
              }}
              className="group rounded-3xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-primary">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <span className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${course.color}`}>
                      {course.category}
                    </span>

                    <h2 className="text-2xl font-bold">
                      {course.title}
                    </h2>
                  </div>
                </div>

                <button className="text-muted-foreground hover:text-primary">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6">

                <div className="mb-2 flex items-center justify-between text-sm font-medium">
                  <span className="text-muted-foreground">
                    Прогрес курсу
                  </span>

                  <span>
                    {course.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-muted/50 p-4">

                <div>
                  <p className="text-sm text-muted-foreground">
                    Наступна тема
                  </p>

                  <p className="font-semibold">
                    {course.lesson}
                  </p>
                </div>

                <p className="text-sm font-medium text-primary">
                  {course.time}
                </p>
              </div>

              <div className="mt-6 flex gap-3">

                <button className="flex-1 rounded-xl bg-primary py-3 font-medium text-primary-foreground transition hover:opacity-90">
                  Продовжити
                </button>

                <button className="flex-1 rounded-xl border py-3 font-medium transition hover:bg-muted">
                  Матеріали
                </button>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}