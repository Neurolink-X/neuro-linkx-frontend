"use client"

import { useState } from "react"
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Globe,
  Building2,
  Briefcase,
  Award,
  Clock,
  Users,
  Target,
  Lightbulb,
  LineChart,
  Shield,
  Cloud,
  Database,
  GitBranch,
  Brain,
  Zap,
  Network,
  Server,
  Cpu,
  Code2,
  DatabaseZap,
  Network2,
  ShieldCheck,
  Globe2,
  CpuIcon,
  Cloud2,
  GitBranch2,
  Boxes2,
  Server2,
  Code,
  CircuitBoard,
  Binary,
  CpuIcon2,
  Network3,
  DatabaseZap2,
  Server3,
  Cloud3,
  GitBranch3,
  Boxes3,
  Code3,
  Brain2,
  Zap2,
  Shield2,
  Globe3,
  Database2,
  Network4,
  Server4,
  Cpu2,
  Code4,
  DatabaseZap3,
  Network5,
  Shield3,
  Globe4,
  Cpu3,
  Cloud4,
  GitBranch4,
  Boxes4,
  Server5,
  Code5
} from "lucide-react"

const testimonials = [
  {
    name: "Arjun Chaurasiya",
    role: "Founder & CEO at Neurolink",
    image: "/testimonials/arjun.jpg",
    content: "At Neurolink, we're revolutionizing technology solutions with our cutting-edge AI and cloud-native expertise. Our commitment to innovation and excellence has helped us build a global presence while maintaining our Indian roots.",
    rating: 5,
    company: "Neurolink",
    industry: "Technology Innovation",
    technologies: ["AI/ML", "Cloud Native", "Global Solutions"],
    achievements: ["Global Expansion", "Innovation Leadership", "Digital Transformation"]
  },
  {
    name: "Rajesh Kumar",
    role: "CTO at TechIndia Solutions",
    image: "/testimonials/rajesh.jpg",
    content: "Neurolink's expertise in AI and cloud solutions has transformed our traditional Indian business into a digital-first enterprise. Their understanding of both global and local market needs is exceptional.",
    rating: 5,
    company: "TechIndia Solutions",
    industry: "Enterprise Technology",
    technologies: ["AI/ML", "Cloud Computing", "Digital Transformation"],
    achievements: ["Digital Modernization", "Cost Optimization", "Market Expansion"]
  },
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp Global",
    image: "/testimonials/sarah.jpg",
    content: "Neurolink's AI solutions have transformed our business operations. Their expertise in machine learning and cloud architecture has helped us achieve unprecedented efficiency.",
    rating: 5,
    company: "TechCorp Global",
    industry: "Global Technology",
    technologies: ["AI/ML", "Cloud Computing", "Data Analytics"],
    achievements: ["60% Efficiency Increase", "Real-time Processing", "Cost Optimization"]
  },
  {
    name: "Priya Sharma",
    role: "Head of Innovation at Digital India",
    image: "/testimonials/priya.jpg",
    content: "The team's expertise in cutting-edge technologies and their commitment to innovation has been instrumental in our digital transformation journey. Neurolink's solutions perfectly blend global best practices with Indian market needs.",
    rating: 5,
    company: "Digital India",
    industry: "Digital Innovation",
    technologies: ["DevOps", "Cloud Native", "Security"],
    achievements: ["Zero Trust Implementation", "Automated Workflows", "Enhanced Security"]
  },
  {
    name: "Michael Chen",
    role: "Director of Engineering at GlobalTech",
    image: "/testimonials/michael.jpg",
    content: "Neurolink's solutions have significantly improved our development workflow. Their DevOps practices and automation tools have reduced our deployment time by 60%.",
    rating: 5,
    company: "GlobalTech",
    industry: "Software Development",
    technologies: ["DevOps", "Automation", "CI/CD"],
    achievements: ["60% Faster Deployment", "99.9% Uptime", "Automated Testing"]
  },
  {
    name: "Amit Patel",
    role: "VP of Technology at SecureIndia",
    image: "/testimonials/amit.jpg",
    content: "Their expertise in enterprise security and compliance has given us peace of mind. The implementation of zero-trust architecture was seamless, and their understanding of both global and Indian security standards is impressive.",
    rating: 5,
    company: "SecureIndia",
    industry: "Cybersecurity",
    technologies: ["Security", "Compliance", "Zero Trust"],
    achievements: ["Zero Trust Architecture", "Compliance Automation", "Threat Detection"]
  }
]

const stats = [
  {
    title: "Global Reach",
    value: "50+",
    description: "Countries Served",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
    details: ["Multi-region Deployment", "Global CDN", "Edge Computing"]
  },
  {
    title: "Enterprise Clients",
    value: "100+",
    description: "Fortune 500 Companies",
    icon: Building2,
    color: "from-purple-600 to-pink-600",
    details: ["Enterprise Solutions", "Custom Integration", "24/7 Support"]
  },
  {
    title: "Projects Delivered",
    value: "500+",
    description: "Successful Implementations",
    icon: Briefcase,
    color: "from-orange-600 to-red-600",
    details: ["Digital Transformation", "Cloud Migration", "Security Implementation"]
  },
  {
    title: "Industry Awards",
    value: "25+",
    description: "Recognitions Received",
    icon: Award,
    color: "from-green-600 to-emerald-600",
    details: ["Innovation Awards", "Technology Excellence", "Customer Satisfaction"]
  }
]

const technologies = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-blue-600 to-indigo-600",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Edge AI Computing",
      "Quantum Machine Learning",
      "Neural Networks"
    ],
    future: ["AGI Research", "Brain-Computer Interface", "Autonomous Systems"]
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "from-purple-600 to-pink-600",
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
    color: "from-orange-600 to-red-600",
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
    color: "from-green-600 to-emerald-600",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Automated Testing",
      "DevSecOps Integration",
      "Platform Engineering",
      "GitOps"
    ],
    future: ["AI-Driven DevOps", "Autonomous Operations", "Self-Healing Systems"]
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentTestimonial = testimonials[currentIndex]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative w-full max-w-[100vw] overflow-x-hidden py-32 bg-white overflow-hidden">
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
            <span className="text-blue-700 text-sm font-medium tracking-wide">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted by Industry{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
              Leaders
            </span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-900 mb-1">{stat.title}</p>
              <p className="text-gray-600 mb-4">{stat.description}</p>
              <ul className="space-y-2">
                {stat.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-3xl backdrop-blur-sm" />
          <div className="relative p-12 rounded-3xl border border-blue-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center border-4 border-blue-100 shadow-lg shadow-blue-500/20">
                <div className="text-white text-3xl font-bold">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mx-auto md:mx-0 mb-4" />
                <p className="text-gray-600 text-lg mb-6 italic">
                  &quot;{currentTestimonial.content}&quot;
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {currentTestimonial.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {currentTestimonial.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                  <p className="text-gray-500 text-sm">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white border border-gray-200 hover:border-blue-200 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white border border-gray-200 hover:border-blue-200 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-3xl backdrop-blur-sm" />
          <div className="relative p-12 rounded-3xl border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advanced Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={tech.title}
                  className="group relative p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-500 mb-2">Current Features</h5>
                      <ul className="space-y-2">
                        {tech.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-500 mb-2">Future Roadmap</h5>
                      <ul className="space-y-2">
                        {tech.future.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
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
        </div>
      </div>
    </section>
  )
}

