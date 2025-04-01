&apos;use client&apos;

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
} from &quot;lucide-react&quot;

const features = [
  {
    title: &quot;AI-Powered Innovation&quot;,
    description: &quot;Leveraging cutting-edge artificial intelligence to drive business transformation and innovation.&quot;,
    icon: Brain,
    color: &quot;from-blue-600 to-indigo-600&quot;,
    details: [
      &quot;Advanced Machine Learning Models&quot;,
      &quot;Natural Language Processing&quot;,
      &quot;Computer Vision Solutions&quot;,
      &quot;Predictive Analytics&quot;,
      &quot;AI Model Optimization&quot;,
      &quot;Edge Computing AI&quot;
    ]
  },
  {
    title: &quot;Cloud-Native Architecture&quot;,
    description: &quot;Building scalable and resilient applications using modern cloud technologies and best practices.&quot;,
    icon: Cloud,
    color: &quot;from-purple-600 to-pink-600&quot;,
    details: [
      &quot;Microservices Architecture&quot;,
      &quot;Container Orchestration&quot;,
      &quot;Serverless Computing&quot;,
      &quot;Cloud Security&quot;,
      &quot;Multi-Cloud Strategy&quot;,
      &quot;Cloud Cost Optimization&quot;
    ]
  },
  {
    title: &quot;Data-Driven Insights&quot;,
    description: &quot;Transforming raw data into actionable insights through advanced analytics and visualization.&quot;,
    icon: Database,
    color: &quot;from-orange-600 to-red-600&quot;,
    details: [
      &quot;Big Data Processing&quot;,
      &quot;Real-time Analytics&quot;,
      &quot;Data Visualization&quot;,
      &quot;Business Intelligence&quot;,
      &quot;Data Governance&quot;,
      &quot;AI-Powered Analytics&quot;
    ]
  },
  {
    title: &quot;DevOps Excellence&quot;,
    description: &quot;Streamlining development and operations with automated workflows and continuous delivery.&quot;,
    icon: GitBranch,
    color: &quot;from-green-600 to-emerald-600&quot;,
    details: [
      &quot;CI/CD Pipelines&quot;,
      &quot;Infrastructure as Code&quot;,
      &quot;Automated Testing&quot;,
      &quot;Monitoring & Logging&quot;,
      &quot;DevSecOps Integration&quot;,
      &quot;Platform Engineering&quot;
    ]
  },
  {
    title: &quot;Enterprise Security&quot;,
    description: &quot;Ensuring robust security measures to protect your business assets and data.&quot;,
    icon: Shield,
    color: &quot;from-yellow-600 to-amber-600&quot;,
    details: [
      &quot;Zero Trust Security&quot;,
      &quot;Identity Management&quot;,
      &quot;Threat Detection&quot;,
      &quot;Compliance & Governance&quot;,
      &quot;AI-Powered Security&quot;,
      &quot;Quantum-Safe Encryption&quot;
    ]
  },
  {
    title: &quot;Global Scalability&quot;,
    description: &quot;Enabling seamless scaling across global markets with distributed systems.&quot;,
    icon: Globe,
    color: &quot;from-cyan-600 to-blue-600&quot;,
    details: [
      &quot;Multi-region Deployment&quot;,
      &quot;Load Balancing&quot;,
      &quot;CDN Integration&quot;,
      &quot;Global Data Sync&quot;,
      &quot;Edge Computing&quot;,
      &quot;5G Integration&quot;
    ]
  }
]

const advantages = [
  {
    title: &quot;Expert Team&quot;,
    description: &quot;Our team of certified professionals brings years of industry expertise.&quot;,
    icon: Users,
    color: &quot;from-blue-600 to-indigo-600&quot;
  },
  {
    title: &quot;Proven Track Record&quot;,
    description: &quot;Successfully delivered solutions to Fortune 500 companies worldwide.&quot;,
    icon: Award,
    color: &quot;from-purple-600 to-pink-600&quot;
  },
  {
    title: &quot;Innovation Focus&quot;,
    description: &quot;Constantly exploring and implementing cutting-edge technologies.&quot;,
    icon: Lightbulb,
    color: &quot;from-orange-600 to-red-600&quot;
  },
  {
    title: &quot;24/7 Support&quot;,
    description: &quot;Round-the-clock technical support and maintenance services.&quot;,
    icon: Clock,
    color: &quot;from-green-600 to-emerald-600&quot;
  }
]

export default function WhatMakeUs() {
  return (
    <section className=&quot;relative py-32 bg-white overflow-hidden&quot;>
      {/* Background Elements */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]&quot; />
      </div>

      <div className=&quot;container relative mx-auto max-w-7xl px-4&quot;>
        {/* Section Header */}
        <div className=&quot;text-center mb-20&quot;>
          <div className=&quot;inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 mb-6&quot;>
            <Sparkles className=&quot;w-4 h-4 text-blue-600&quot; />
            <span className=&quot;text-blue-700 text-sm font-medium tracking-wide&quot;>What Makes Us Different</span>
          </div>
          <h2 className=&quot;text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight&quot;>
            Crafting the Future of{&apos; &apos;}
            <span className=&quot;bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient&quot;>
              Digital Innovation
            </span>
          </h2>
          <p className=&quot;text-gray-600 text-lg max-w-2xl mx-auto&quot;>
            We combine cutting-edge technology with industry expertise to deliver exceptional solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20&quot;>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className=&quot;group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl&quot; />
              <div className=&quot;relative&quot;>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <feature.icon className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-4&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-600 mb-6&quot;>{feature.description}</p>
                <ul className=&quot;space-y-3&quot;>
                  {feature.details.map((detail) => (
                    <li key={detail} className=&quot;flex items-center gap-2 text-gray-600&quot;>
                      <div className=&quot;w-1.5 h-1.5 rounded-full bg-blue-600&quot; />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className=&quot;relative&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-3xl backdrop-blur-sm&quot; />
          <div className=&quot;relative p-12 rounded-3xl border border-blue-200&quot;>
            <h3 className=&quot;text-3xl font-bold text-gray-900 mb-12 text-center&quot;>Why Choose Us</h3>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className=&quot;group relative p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-all duration-300&quot;
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                    <advantage.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <h4 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>{advantage.title}</h4>
                  <p className=&quot;text-gray-600&quot;>{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 