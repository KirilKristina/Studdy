type Props = {
  items: string[]
}

function RouteHeader({
  items,
}: Props) {

  return (

    <header
      className="
        sticky
        top-16
        z-40
        mb-8
        rounded-xl
        border
        bg-background/90
        backdrop-blur
        px-6
        py-4
      "
    >

      <div className="flex items-center gap-2 text-sm">

        {items.map(
          (item, index) => (

            <div
              key={item}
              className="flex items-center gap-2"
            >

              <span
                className={
                  index === items.length - 1
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }
              >
                {item}
              </span>

              {index !== items.length - 1 && (

                <span className="text-muted-foreground">
                  /
                </span>
              )}
            </div>
          ),
        )}
      </div>
    </header>
  )
}

export default RouteHeader