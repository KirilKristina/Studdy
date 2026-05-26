type Props = {
  taskType: any
}

function LabCard({
  taskType,
}: Props) {

  return (
    <div className="rounded-3xl border-l-4 border-emerald-500 bg-card p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">

          🧪
        </div>

        <h3 className="text-2xl font-semibold">
          {taskType.name}
        </h3>
      </div>

      <div className="space-y-4">

        <div className="rounded-xl bg-emerald-50 p-4">

          <p className="font-medium">
            ✅ Лабораторна №1
          </p>

          <p className="text-sm text-muted-foreground">
            Зараховано
          </p>
        </div>

        <div className="rounded-xl bg-muted p-4 opacity-70">

          <p className="font-medium">
            ⏳ Лабораторна №2
          </p>

          <p className="text-sm text-muted-foreground">
            В процесі
          </p>
        </div>
      </div>
    </div>
  )
}

export default LabCard