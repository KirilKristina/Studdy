function TeachersCard() {

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h3 className="mb-6 text-2xl font-semibold">

        Викладачі
      </h3>

      <div className="space-y-6">

        <div className="flex items-center gap-4">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Teacher"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>

            <p className="font-semibold text-primary">
              Проф. Олександр Коваль
            </p>

            <p className="text-sm text-muted-foreground">
              Лектор • Доктор наук
            </p>

            <button className="mt-2 text-sm text-violet-600 hover:underline">

              Написати
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">

          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="Teacher"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>

            <p className="font-semibold text-primary">
              Марія Степаненко
            </p>

            <p className="text-sm text-muted-foreground">
              Практичні заняття
            </p>

            <button className="mt-2 text-sm text-violet-600 hover:underline">

              Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachersCard