import { Card } from &quot;@/components/ui/card&quot;

const stats = [
  { label: &quot;Active Users&quot;, value: &quot;10M+&quot; },
  { label: &quot;Downloads&quot;, value: &quot;1B+&quot; },
  { label: &quot;Response Time&quot;, value: &quot;<100ms&quot; },
  { label: &quot;Uptime&quot;, value: &quot;99.99%&quot; },
]

export default function Stats() {
  return (
    <section className=&quot;py-20 px-4 bg-slate-900&quot;>
      <div className=&quot;container mx-auto&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {stats.map((stat) => (
            <Card key={stat.label} className=&quot;bg-slate-800 border-slate-700 p-6 text-center&quot;>
              <div className=&quot;text-2xl font-bold text-white mb-2&quot;>{stat.value}</div>
              <div className=&quot;text-slate-400&quot;>{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

