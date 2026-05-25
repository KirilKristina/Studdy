import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

const tasks = [
  {
    id: 1,
    title: "Лабораторна робота №1",
    description: "Аналіз складності алгоритмів: Big O нотація",
    status: "completed",
    date: "12 Вересня",
    grade: "10/10",
  },

  {
    id: 2,
    title: "Лабораторна робота №2",
    description: "Динамічні структури даних: Зв'язні списки",
    status: "active",
    deadline: "через 2 дні",
    files: 3,
  },

  {
    id: 3,
    title: "Лабораторна робота №3",
    description: "Бінарні дерева пошуку та балансування",
    status: "locked",
    date: "15 Жовтня",
  },
]

export const Route = createFileRoute("/_layout/courses/$courseId/tasks/")({
  component: TaskPage,
})

function TaskPage() {
  const { courseId } = Route.useParams()
  return (
    <main className="grid grid-cols-12 gap-6">
      <section className="col-span-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Алгоритми та структури даних
            </h1>

            <p className="mt-2 text-muted-foreground">
              Перелік лабораторних робіт на поточний семестр
            </p>
          </div>

          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            60% Завершено
          </div>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <Link
              key={task.id}
              to="/courses/$courseId/tasks/$taskId"
              params={{
                courseId: String(courseId),
                taskId: String(task.id),
              }}
              className={`rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md ${
                task.status === "active"
                  ? "border-primary"
                  : ""
              }`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {task.title}
                  </h2>

                  <p className="mt-1 text-muted-foreground">
                    {task.description}
                  </p>
                </div>

                {task.status === "completed" && (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Завершено
                  </span>
                )}

                {task.status === "active" && (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    В процесі
                  </span>
                )}

                {task.status === "locked" && (
                  <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                    Заблоковано
                  </span>
                )}
              </div>

              {task.status === "active" && (
                <div className="mb-4 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-2/3 bg-primary" />
                </div>
              )}

              <div className="flex items-center justify-between border-t pt-4 text-sm text-muted-foreground">
                <div className="flex gap-4">
                  {task.date && (
                    <span>{task.date}</span>
                  )}

                  {task.grade && (
                    <span>
                      Оцінка: {task.grade}
                    </span>
                  )}

                  {task.deadline && (
                    <span className="text-red-500">
                      Дедлайн: {task.deadline}
                    </span>
                  )}

                  {task.files && (
                    <span>
                      {task.files} файли
                    </span>
                  )}
                </div>

                {task.status === "completed" && (
                  <button className="font-medium text-primary hover:underline">
                    Переглянути звіт
                  </button>
                )}

                {task.status === "active" && (
                  <button className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">
                    Продовжити
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <aside className="col-span-4 space-y-6">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Викладач курсу
          </h3>

          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
              OK
            </div>

            <div>
              <p className="font-semibold">
                Д-р Олександр Коваль
              </p>

              <p className="text-sm text-muted-foreground">
                Професор кафедри ПЗ
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 rounded-lg border px-4 py-2 hover:bg-muted">
              Написати
            </button>

            <button className="flex-1 rounded-lg border px-4 py-2 hover:bg-muted">
              Консультації
            </button>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Загальні файли
            </h3>

            <button className="text-primary">
              Upload
            </button>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border p-3 hover:bg-muted">
              Силабус_курсу.pdf
            </div>

            <div className="rounded-lg border p-3 hover:bg-muted">
              Підручник_Алгоритми.pdf
            </div>

            <div className="rounded-lg border p-3 hover:bg-muted">
              Шаблон_звіту.docx
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-primary p-6 text-primary-foreground">
          <h3 className="mb-4 text-xl font-semibold">
            Нотатки до курсу
          </h3>

          <textarea
            className="min-h-[140px] w-full rounded-lg border border-white/20 bg-white/10 p-4 placeholder:text-white/60"
            placeholder="Ваші нотатки..."
          />

          <button className="mt-4 w-full rounded-lg bg-white/10 py-3 hover:bg-white/20">
            Зберегти нотатки
          </button>
        </div>
      </aside>
    </main>
  )
}