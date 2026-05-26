type Props = {
  timeLeft: {
    days: number
    hours: number
  }
}

function ExamCountdownCard({
  timeLeft,
}: Props) {

  return (
    <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-sm">

      <div className="absolute -right-4 -top-4 text-[120px] opacity-10">

        ⏱
      </div>

      <h3 className="mb-4 text-sm uppercase tracking-widest opacity-80">

        До іспиту залишилось
      </h3>

      <div className="mb-4 flex items-center gap-4">

        <div className="text-center">

          <p className="text-5xl font-bold">
            {timeLeft.days}
          </p>

          <p className="text-sm">
            днів
          </p>
        </div>

        <div className="text-3xl opacity-50">
          :
        </div>

        <div className="text-center">

          <p className="text-5xl font-bold">
            {timeLeft.hours}
          </p>

          <p className="text-sm">
            годин
          </p>
        </div>

        <div className="ml-auto text-5xl">

          📅
        </div>
      </div>

      <div className="border-t border-white/20 pt-4 text-sm">

        <p>
          Дата іспиту:
          <span className="ml-2 font-bold">
            24 травня, 10:00
          </span>
        </p>

        <p className="mt-1">
          Аудиторія:
          <span className="ml-2 font-bold">
            402
          </span>
        </p>
      </div>
    </div>
  )
}

export default ExamCountdownCard