type Props = {
  taskType: any
}

function ProjectCard({
  taskType,
}: Props) {

  return (
    <div className="rounded-3xl border-l-4 border-amber-500 bg-amber-50/20 p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">

          🚀
        </div>

        <h3 className="text-2xl font-semibold">
          {taskType.name}
        </h3>
      </div>

      <p className="text-sm text-muted-foreground">
        Розробка освітнього додатку
      </p>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-muted">

        <div className="h-full w-[35%] rounded-full bg-amber-500" />
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        Прогрес: 35%
      </p>
    </div>
  )
}

export default ProjectCard