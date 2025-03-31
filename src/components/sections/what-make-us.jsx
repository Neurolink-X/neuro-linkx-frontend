'use client'

import { 
  Brain, 
  Zap, 
  LineChart, 
  ChevronRight, 
  Sparkles, 
  Code2, 
  Database, 
  Network, 
  Shield, 
  Cpu, 
  Cloud, 
  GitBranch, 
  Boxes, 
  Server, 
  Globe, 
  Lock, 
  Rocket, 
  BarChart,
  Users,
  Target,
  Clock,
  Award,
  Lightbulb,
  CircuitBoard,
  Binary,
  DatabaseZap,
  Network2,
  ShieldCheck,
  Globe2,
  CpuIcon,
  Cloud2,
  GitBranch2,
  Boxes2,
  Server2,
  Code
} from "lucide-react"

const features = [
  {
    title: "AI-Powered Innovation",
    description: "Leveraging cutting-edge artificial intelligence to drive business transformation and innovation.",
    icon: Brain,
    color: "from-blue-600 to-indigo-600",
    details: [
      "Advanced Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI Model Optimization",
      "Edge Computing AI"
    ]
  },
  {
    title: "Cloud-Native Architecture",
    description: "Building scalable and resilient applications using modern cloud technologies and best practices.",
    icon: Cloud,
    color: "from-purple-600 to-pink-600",
    details: [
      "Microservices Architecture",
      "Container Orchestration",
      "Serverless Computing",
      "Cloud Security",
      "Multi-Cloud Strategy",
      "Cloud Cost Optimization"
    ]
  },
  {
    title: "Data-Driven Insights",
    description: "Transforming raw data into actionable insights through advanced analytics and visualization.",
    icon: Database,
    color: "from-orange-600 to-red-600",
    details: [
      "Big Data Processing",
      "Real-time Analytics",
      "Data Visualization",
      "Business Intelligence",
      "Data Governance",
      "AI-Powered Analytics"
    ]
  },
  {
    title: "DevOps Excellence",
    description: "Streamlining development and operations with automated workflows and continuous delivery.",
    icon: GitBranch,
    color: "from-green-600 to-emerald-600",
    details: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Automated Testing",
      "Monitoring & Logging",
      "DevSecOps Integration",
      "Platform Engineering"
    ]
  },
  {
    title: "Enterprise Security",
    description: "Ensuring robust security measures to protect your business assets and data.",
    icon: Shield,
    color: "from-yellow-600 to-amber-600",
    details: [
      "Zero Trust Security",
      "Identity Management",
      "Threat Detection",
      "Compliance & Governance",
      "AI-Powered Security",
      "Quantum-Safe Encryption"
    ]
  },
  {
    title: "Global Scalability",
    description: "Enabling seamless scaling across global markets with distributed systems.",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    details: [
      "Multi-region Deployment",
      "Load Balancing",
      "CDN Integration",
      "Global Data Sync",
      "Edge Computing",
      "5G Integration"
    ]
  }
]

const advantages = [
  {
    title: "Expert Team",
    description: "Our team of certified professionals brings years of industry expertise.",
    icon: Users,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered solutions to Fortune 500 companies worldwide.",
    icon: Award,
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Innovation Focus",
    description: "Constantly exploring and implementing cutting-edge technologies.",
    icon: Lightbulb,
    color: "from-orange-600 to-red-600"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services.",
    icon: Clock,
    color: "from-green-600 to-emerald-600"
  }
]

export default function WhatMakeUs() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium tracking-wide">What Makes Us Different</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Crafting the Future of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
              Digital Innovation
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with industry expertise to deliver exceptional solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-3xl backdrop-blur-sm" />
          <div className="relative p-12 rounded-3xl border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className="group relative p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 