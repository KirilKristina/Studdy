type Props = {
  taskType: any
}

function LectureCard({
  taskType,
}: Props) {

  return (
    <div className="rounded-3xl border-l-4 border-primary bg-card p-6 shadow-sm">

      <div className="mb-6 flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">

            📘
          </div>

          <h3 className="text-2xl font-semibold">
            {taskType.name}
          </h3>
        </div>

        <span className="text-sm text-muted-foreground">
          12 матеріалів
        </span>
      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl p-3 transition hover:bg-muted">

          <div>

            <p className="font-medium">
              Вступ до UX
            </p>

            <p className="text-sm text-muted-foreground">
              PDF • 4.2 MB
            </p>
          </div>

          <button>
            ⬇
          </button>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl border py-2 transition hover:bg-muted">

        Переглянути всі
      </button>
    </div>
  )
}

export default LectureCard