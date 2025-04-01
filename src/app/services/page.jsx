'use client'

import { 
  Brain, 
  Cloud, 
  Database, 
  GitBranch, 
  Shield, 
  Globe, 
  Cpu, 
  Network, 
  Server, 
  Code, 
  CircuitBoard, 
  Binary, 
  CpuIcon, 
  Network2, 
  DatabaseZap, 
  Cloud2, 
  GitBranch2, 
  Boxes2, 
  Code2, 
  Brain2, 
  Zap2, 
  Shield2, 
  Database2, 
  Network3, 
  Server3, 
  Cpu2, 
  Code3, 
  DatabaseZap2, 
  Network4, 
  Shield3, 
  Globe3, 
  Cpu3, 
  Cloud3, 
  GitBranch3, 
  Boxes3, 
  Server4, 
  Code4, 
  DatabaseZap3, 
  Network5, 
  Shield4, 
  Globe4, 
  Cpu4, 
  Cloud4, 
  GitBranch4, 
  Boxes4, 
  Server5, 
  Code5,
  Smartphone,
  Layout
} from 'lucide-react'

const services = [
  {
    title: "App Development",
    icon: Smartphone,
    color: "from-blue-600 to-indigo-600",
    features: [
      "iOS & Android Development",
      "Cross-platform Solutions",
      "Progressive Web Apps",
      "Enterprise Applications",
      "App Maintenance & Support",
      "App Store Optimization"
    ],
    future: ["AI-Powered Apps", "AR/VR Integration", "5G Optimization"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    features: [
      "Robotics",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Quantum Machine Learning",
      "Neural Networks"
    ],
    future: ["AGI Research", "Brain-Computer Interface", "Autonomous Systems"]
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "from-orange-600 to-red-600",
    features: [
      "Multi-Cloud Strategy",
      "Serverless Architecture",
      "Cloud Security",
      "Edge Computing",
      "Quantum Computing",
      "Green Computing"
    ],
    future: ["Cloud-Native AI", "Autonomous Cloud", "Quantum Cloud"]
  },
  {
    title: "Data Analytics",
    icon: Database,
    color: "from-green-600 to-emerald-600",
    features: [
      "Big Data Processing",
      "Real-time Analytics",
      "Business Intelligence",
      "Data Governance",
      "AI-Powered Analytics",
      "Predictive Modeling"
    ],
    future: ["Quantum Analytics", "Prescriptive Analytics", "Cognitive Computing"]
  },
  {
    title: "DevOps & Automation",
    icon: GitBranch,
    color: "from-yellow-600 to-amber-600",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security Automation",
      "DevSecOps"
    ],
    future: ["AIOps", "GitOps", "NoOps"]
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "from-red-600 to-pink-600",
    features: [
      "Threat Detection",
      "Vulnerability Assessment",
      "Identity Management",
      "Zero Trust Security",
      "Cloud Security",
      "Compliance"
    ],
    future: ["AI Security", "Quantum Security", "Biometric Security"]
  }
]

export default function Services() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Advanced{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
              Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our cutting-edge solutions powered by the latest technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Current Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Future Roadmap</h4>
                  <ul className="space-y-2">
                    {service.future.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 