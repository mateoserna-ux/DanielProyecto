import { stats } from '@/lib/site-data'

export function StatsBar() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center md:grid-cols-5 md:px-6">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col gap-1">
            <span className="font-semibold text-primary">{stat.value}</span>
            <span className="text-sm text-ink-muted">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
