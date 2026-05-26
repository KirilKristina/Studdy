const notes = [
  {
    id: 1,
    text: "Подивитися Auto Layout",
    date: "Сьогодні, 10:15",
  },

  {
    id: 2,
    text: "Узгодити тему проекту",
    date: "Вчора, 16:40",
  },
]

function NotesCard() {

  return (
    <div className="rounded-3xl border border-dashed bg-muted/20 p-6 shadow-sm">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-2xl font-semibold">
          Нотатки
        </h3>

        <button className="text-2xl text-violet-600">

          ＋
        </button>
      </div>

      <div className="space-y-4">

        {notes.map((note) => (

          <div
            key={note.id}
            className="rounded-2xl bg-background p-4 shadow-sm"
          >

            <p className="text-sm">
              {note.text}
            </p>

            <div className="mt-3 flex items-center justify-between">

              <span className="text-xs uppercase text-muted-foreground">

                {note.date}
              </span>

              <button className="text-red-500">

                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotesCard