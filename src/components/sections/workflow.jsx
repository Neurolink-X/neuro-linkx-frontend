import { Card } from &quot;@/components/ui/card&quot;
import { ArrowRight } from &quot;lucide-react&quot;

const steps = [
  {
    title: &quot;Plan&quot;,
    description: &quot;Define your project scope and requirements&quot;,
  },
  {
    title: &quot;Design&quot;,
    description: &quot;Create beautiful and functional interfaces&quot;,
  },
  {
    title: &quot;Develop&quot;,
    description: &quot;Build with modern tools and frameworks&quot;,
  },
  {
    title: &quot;Deploy&quot;,
    description: &quot;Ship to production with confidence&quot;,
  },
]

export default function Workflow() {
  return (
    <section className=&quot;py-20 px-4 bg-slate-900&quot;>
      <div className=&quot;container mx-auto max-w-6xl&quot;>
        <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Complete IT Tools Perfected to Succeed</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6&quot;>
          {steps.map((step, index) => (
            <div key={step.title} className=&quot;relative&quot;>
              <Card className=&quot;p-6 bg-slate-800 border-slate-700&quot;>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{step.title}</h3>
                <p className=&quot;text-slate-400&quot;>{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className=&quot;hidden md:block absolute top-1/2 -right-5 text-slate-600 transform -translate-y-1/2&quot; />
              )}
            </div>
          ))}
        </div>
        <div className=&quot;flex justify-center my-10&quot;>
          <button className=&quot;bg-[#ff3b30] text-white text-nowrap text-xl px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-transparent transition-colors&quot;>
              What is Your Engineering Problem? 
          </button>
        </div>
      </div>
    </section>
  )
}

