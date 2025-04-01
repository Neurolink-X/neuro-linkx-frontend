&apos;use client&apos;

import { 
  Brain, 
  Users, 
  Target, 
  Lightbulb, 
  LineChart, 
  Shield, 
  Globe, 
  Award,
  ArrowRight,
  Smartphone,
  Code,
  Server,
  Zap,
  Cloud,
  Database,
  GitBranch,
  Cpu,
  Network,
  CircuitBoard
} from &apos;lucide-react&apos;

const stats = [
  {
    title: &quot;Automation Rate&quot;,
    value: &quot;95%&quot;,
    description: &quot;Tasks Automated Through AI & Robotics&quot;,
    icon: Zap,
    color: &quot;from-blue-600 to-indigo-600&quot;
  },
  {
    title: &quot;Cost Savings&quot;,
    value: &quot;60%+&quot;,
    description: &quot;Reduction in Operational Costs&quot;,
    icon: LineChart,
    color: &quot;from-purple-600 to-pink-600&quot;
  },
  {
    title: &quot;Future-Ready&quot;,
    value: &quot;100%&quot;,
    description: &quot;Robotics & AI Integration&quot;,
    icon: CircuitBoard,
    color: &quot;from-orange-600 to-red-600&quot;
  },
  {
    title: &quot;Customer Satisfaction&quot;,
    value: &quot;99%&quot;,
    description: &quot;AI & Robotics Support Success&quot;,
    icon: Users,
    color: &quot;from-green-600 to-emerald-600&quot;
  }
]

const values = [
  {
    title: &quot;Innovation First&quot;,
    description: &quot;Leading the future with cutting-edge robotics and AI solutions.&quot;,
    icon: Lightbulb,
    color: &quot;from-blue-600 to-indigo-600&quot;
  },
  {
    title: &quot;Cost-Effective&quot;,
    description: &quot;Maximizing ROI through intelligent automation and robotics.&quot;,
    icon: LineChart,
    color: &quot;from-purple-600 to-pink-600&quot;
  },
  {
    title: &quot;Customer-Centric&quot;,
    description: &quot;AI-powered support and personalized robotics solutions.&quot;,
    icon: Users,
    color: &quot;from-orange-600 to-red-600&quot;
  }
]

const services = [
  {
    title: &quot;Robotics Solutions&quot;,
    description: &quot;Advanced robotics systems for manufacturing, healthcare, and service industries.&quot;,
    features: [
      &quot;Industrial Automation&quot;,
      &quot;Medical Robotics&quot;,
      &quot;Service Robots&quot;,
      &quot;AI-Powered Control Systems&quot;,
      &quot;Robotic Process Automation&quot;,
      &quot;Human-Robot Collaboration&quot;
    ],
    icon: CircuitBoard,
    color: &quot;from-blue-600 to-indigo-600&quot;
  },
  {
    title: &quot;AI & Automation&quot;,
    description: &quot;Intelligent automation solutions that revolutionize business operations.&quot;,
    features: [
      &quot;Process Automation&quot;,
      &quot;Workflow Optimization&quot;,
      &quot;RPA Solutions&quot;,
      &quot;Task Automation&quot;,
      &quot;AI Decision Making&quot;,
      &quot;Smart Manufacturing&quot;
    ],
    icon: Brain,
    color: &quot;from-purple-600 to-pink-600&quot;
  },
  {
    title: &quot;Future-Ready SaaS&quot;,
    description: &quot;Cloud-based solutions with robotics and AI integration.&quot;,
    features: [
      &quot;Robotics as a Service&quot;,
      &quot;AI-Powered Analytics&quot;,
      &quot;Enterprise Solutions&quot;,
      &quot;Custom Integrations&quot;,
      &quot;Real-time Monitoring&quot;,
      &quot;Predictive Maintenance&quot;
    ],
    icon: Server,
    color: &quot;from-orange-600 to-red-600&quot;
  },
  {
    title: &quot;Smart Infrastructure&quot;,
    description: &quot;Intelligent systems for modern business operations.&quot;,
    features: [
      &quot;IoT Integration&quot;,
      &quot;Smart Buildings&quot;,
      &quot;Energy Management&quot;,
      &quot;Security Systems&quot;,
      &quot;Environmental Control&quot;,
      &quot;Resource Optimization&quot;
    ],
    icon: Network,
    color: &quot;from-green-600 to-emerald-600&quot;
  }
]

export default function About() {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-32&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]&quot; />
        </div>
        <div className=&quot;container relative mx-auto max-w-7xl px-4&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight&quot;>
              About{&apos; &apos;}
              <span className=&quot;bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient&quot;>
                Neurolink
              </span>
            </h1>
            <p className=&quot;text-gray-400 text-lg max-w-2xl mx-auto&quot;>
              Pioneering the future with robotics, AI, and automation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto max-w-7xl px-4&quot;>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {stats.map((stat) => (
              <div
                key={stat.title}
                className=&quot;group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300&quot;
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <stat.icon className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.value}</h3>
                <p className=&quot;text-xl font-semibold text-gray-300 mb-1&quot;>{stat.title}</p>
                <p className=&quot;text-gray-400&quot;>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto max-w-7xl px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Our Values</h2>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {values.map((value) => (
              <div
                key={value.title}
                className=&quot;group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300&quot;
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <value.icon className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{value.title}</h3>
                <p className=&quot;text-gray-400&quot;>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto max-w-7xl px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Our Core Services</h2>
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {services.map((service) => (
              <div
                key={service.title}
                className=&quot;group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300&quot;
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <service.icon className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{service.title}</h3>
                <p className=&quot;text-gray-400 mb-4&quot;>{service.description}</p>
                <ul className=&quot;space-y-2&quot;>
                  {service.features.map((feature) => (
                    <li key={feature} className=&quot;flex items-center gap-2 text-gray-300&quot;>
                      <div className=&quot;w-1.5 h-1.5 rounded-full bg-blue-500&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto max-w-7xl px-4&quot;>
          <div className=&quot;relative rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12&quot;>
            <div className=&quot;absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-3xl&quot; />
            <div className=&quot;relative&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Ready to Transform Your Business with Robotics?
              </h2>
              <p className=&quot;text-blue-100 text-lg mb-8 max-w-2xl&quot;>
                Join us in shaping the future of automation and robotics technology.
              </p>
              <button className=&quot;inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-300&quot;>
                Get Started
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}