import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;
import { Zap, Shield, Cloud, Code } from &quot;lucide-react&quot;

const features = [
  {
    icon: Zap,
    title: &quot;High Performance&quot;,
    description: &quot;Lightning-fast response times and optimal resource usage&quot;,
  },
  {
    icon: Shield,
    title: &quot;Enterprise Security&quot;,
    description: &quot;Advanced security features to protect your data&quot;,
  },
  {
    icon: Cloud,
    title: &quot;Cloud Native&quot;,
    description: &quot;Built for modern cloud infrastructure&quot;,
  },
  {
    icon: Code,
    title: &quot;Developer First&quot;,
    description: &quot;Designed with developers in mind&quot;,
  },
]

export default function Features() {
  return (
    <section className=&quot;py-20 px-4&quot;>
      <div className=&quot;container mx-auto&quot;>
        <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Features That Set Us Apart</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {features.map((feature) => (
            <Card key={feature.title} className=&quot;bg-slate-800 border-slate-700&quot;>
              <CardHeader>
                <feature.icon className=&quot;h-12 w-12 text-red-500 mb-4&quot; />
                <CardTitle className=&quot;text-white&quot;>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-slate-400&quot;>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

