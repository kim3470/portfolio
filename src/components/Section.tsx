import { useId } from 'react'

export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border p-8 rounded-lg md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 "
    >
      <h1
        id={id}
        className="text-xl pb-6 font-semibold text-zinc-800 dark:text-zinc-100"
      >
        {title}
      </h1>
      <div className="grid grid-cols-1 items-baseline p-3 pl-5 gap-y-8">
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
