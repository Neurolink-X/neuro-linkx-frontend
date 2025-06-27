'use client';

import { 
  Brain, 
  Network, 
  Shield, 
  Zap, 
  BarChart2, 
  Settings, 
  Lock, 
  GitBranch,
  Sparkles,
  Target,
  LineChart,
  BrainCircuit,
  CheckCircle2,
  Globe,
  Languages,
  Clock,
  Users2,
  CircuitBoard,
  Lightbulb,
  Server,
  Users,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
  {
    title: "Automation Rate",
    value: "95%",
    description: "Tasks Automated Through AI & Robotics",
    icon: Zap,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Cost Savings",
    value: "60%+",
    description: "Reduction in Operational Costs",
    icon: LineChart,
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Future-Ready",
    value: "100%",
    description: "Robotics & AI Integration",
    icon: CircuitBoard,
    color: "from-orange-600 to-red-600"
  },
  {
    title: "Customer Satisfaction",
    value: "99%",
    description: "AI & Robotics Support Success",
    icon: Users,
    color: "from-green-600 to-emerald-600"
  }
]

const values = [
  {
    title: "Innovation First",
    description: "Leading the future with cutting-edge robotics and AI solutions.",
    icon: Lightbulb,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Cost-Effective",
    description: "Maximizing ROI through intelligent automation and robotics.",
    icon: LineChart,
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Customer-Centric",
    description: "AI-powered support and personalized robotics solutions.",
    icon: Users,
    color: "from-orange-600 to-red-600"
  }
]

const services = [
  {
    title: "Robotics Solutions",
    description: "Advanced robotics systems for manufacturing, healthcare, and service industries.",
    features: [
      "Industrial Automation",
      "Medical Robotics",
      "Service Robots",
      "AI-Powered Control Systems",
      "Robotic Process Automation",
      "Human-Robot Collaboration"
    ],
    icon: CircuitBoard,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation solutions that revolutionize business operations.",
    features: [
      "Process Automation",
      "Workflow Optimization",
      "RPA Solutions",
      "Task Automation",
      "AI Decision Making",
      "Smart Manufacturing"
    ],
    icon: Brain,
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Future-Ready SaaS",
    description: "Cloud-based solutions with robotics and AI integration.",
    features: [
      "Robotics as a Service",
      "AI-Powered Analytics",
      "Enterprise Solutions",
      "Custom Integrations",
      "Real-time Monitoring",
      "Predictive Maintenance"
    ],
    icon: Server,
    color: "from-orange-600 to-red-600"
  },
  {
    title: "Smart Infrastructure",
    description: "Intelligent systems for modern business operations.",
    features: [
      "IoT Integration",
      "Smart Buildings",
      "Energy Management",
      "Security Systems",
      "Environmental Control",
      "Resource Optimization"
    ],
    icon: Network,
    color: "from-green-600 to-emerald-600"
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]"></div>
        </div>
        <div className="container relative mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight max-sm:text-3xl">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
                NeuroLinkX
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Pioneering the future with robotics, AI, and automation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-xl font-semibold text-gray-300 mb-1">{stat.title}</p>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
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
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with Robotics?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl">
                Join us in shaping the future of automation and robotics technology.
              </p>
              <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}