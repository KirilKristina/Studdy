type Props = {
  taskType: any
}

function PracticeCard({
  taskType,
}: Props) {

  return (
    <div className="rounded-3xl border-l-4 border-violet-500 bg-card p-6 shadow-sm">

      <div className="mb-6 flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">

            ✍
          </div>

          <h3 className="text-2xl font-semibold">
            {taskType.name}
          </h3>
        </div>

        <span className="text-sm text-muted-foreground">
          8 занять
        </span>
      </div>

      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">

        <p className="font-semibold">
          Практична робота №4
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Інтерактивний прототип
        </p>

        <p className="mt-3 text-sm italic text-violet-700">
          Дедлайн: завтра
        </p>
      </div>

      <button className="mt-4 w-full rounded-xl bg-violet-600 py-2 font-semibold text-white">

        Здати роботу
      </button>
    </div>
  )
}

export default PracticeCard