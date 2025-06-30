"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Globe,
  Building2,
  Briefcase,
  Award,
  Brain,
  Cloud,
  Database,
  GitBranch,
} from "lucide-react"

const testimonials = [
  {
    name: "Arjun Chaurasiya",

    role: "Founder & CEO at NeurolinkX",
    image: "https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "At Neurolinkx, we're revolutionizing technology solutions with our cutting-edge AI and cloud-native expertise.",

    rating: 5,
    company: "NeuroLinkX",
    industry: "Technology Innovation",
    technologies: ["AI/ML", "Cloud Native", "Global Solutions"],
    achievements: ["Global Expansion", "Innovation Leadership", "Digital Transformation"]
  },
  {

    name: "Rishabh Kumar",
    role: "Co-Founder at NeurolinkX",
    image: "https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "At Neurolinkx, we're revolutionizing technology solutions with our cutting-edge AI and cloud-native expertise.",
    rating: 5,
    company: "Neurolinkx",
    industry: "Technology Innovation",
    technologies: ["AI/ML", "Cloud Native", "Global Solutions"],
    achievements: ["Global Expansion", "Innovation Leadership", "Digital Transformation"]

  },
  
  {

    name: "Anshika Rajput",
    role: "HR at NeuroLinkX",
    image: "/testimonials/riya.jpg",
    content: "CloudNova's partnership with NeurolinkX accelerated our cloud-native transformation beyond expectations.",

    rating: 5,
    company: "CloudNova",
    industry: "Cloud Infrastructure",
    technologies: ["DevOps", "Kubernetes", "Cloud Native"],
    achievements: ["Performance Boost", "Cost Reduction", "Rapid Deployment"]
  },
  {
    name: "David Kim",
    role: "Director of AI at SynthMind",
    image: "/testimonials/david.jpg",
    content: "We integrated advanced NLP models with real-time data analytics thanks to NeurolinkX’s AI team.",
    rating: 5,
    company: "SynthMind",
    industry: "Artificial Intelligence",
    technologies: ["NLP", "Big Data", "Predictive Modeling"],
    achievements: ["Model Accuracy", "Customer Insights", "Automation"]
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
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    future: ["AGI Research", "Brain-Computer Interface"]
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "from-purple-600 to-pink-600",
    features: ["Multi-Cloud Strategy", "Serverless Architecture"],
    future: ["Cloud-Native AI", "Quantum Cloud"]
  },
  {
    title: "Data Analytics",
    icon: Database,
    color: "from-orange-600 to-red-600",
    features: ["Big Data Processing", "Real-time Analytics"],
    future: ["Prescriptive Analytics", "Cognitive Computing"]
  },
  {
    title: "DevOps & Automation",
    icon: GitBranch,
    color: "from-green-600 to-emerald-600",
    features: ["CI/CD Pipelines", "Infrastructure as Code"],
    future: ["AI-Driven DevOps", "Self-Healing Systems"]
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderIndex, setSliderIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full max-w-[100vw] overflow-x-hidden py-32 bg-white overflow-hidden">
 {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]" />
      </div>

      {/* Transparent Building Background */}
      {/* <img 
  src="https://images.unsplash.com/photo-1572451517745-feff8e0b205c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Building Background"
  className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none z-0"
/> */}

      <div className="container relative mx-auto max-w-7xl px-4 z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
              Leaders
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
               <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.title} className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:border-blue-200 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-900">{stat.title}</p>
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
            )
          })}
        </div>

        {/* STATS MOBILE SLIDER */}
        <div className="lg:hidden mb-20 relative max-w-sm mx-auto">
          <AnimatePresence mode="wait">
            {stats[sliderIndex] && (
              <motion.div
                key={stats[sliderIndex].title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stats[sliderIndex].color} flex items-center justify-center mb-4`}>
                    {(() => {
                      const Icon = stats[sliderIndex].icon
                      return <Icon className="w-6 h-6 text-white" />
                    })()}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stats[sliderIndex].value}</h3>
                  <p className="text-lg font-semibold text-gray-900">{stats[sliderIndex].title}</p>
                  <p className="text-gray-600 mb-4">{stats[sliderIndex].description}</p>
                  <ul className="space-y-2">
                    {stats[sliderIndex].details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={() => setSliderIndex((sliderIndex - 1 + stats.length) % stats.length)}
              className="p-2 rounded-full bg-white border border-gray-300 hover:border-blue-300 shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setSliderIndex((sliderIndex + 1) % stats.length)}
              className="p-2 rounded-full bg-white border border-gray-300 hover:border-blue-300 shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>


        {/* Testimonial Card */}
        <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-3xl backdrop-blur-sm" />
        <div className="relative p-12 rounded-3xl border border-blue-200 overflow-hidden">
          {/* Full Card Background Image */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center border-4 border-blue-100 shadow-lg">
                  <div className="text-white text-3xl font-bold">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-600 text-lg mb-6 italic">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {testimonials[currentIndex].technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {testimonials[currentIndex].achievements.map((ach) => (
                      <span key={ach} className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium">
                        {ach}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8 relative z-10">
            <button onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full bg-white border border-gray-200 hover:border-blue-200">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)} className="p-2 rounded-full bg-white border border-gray-200 hover:border-blue-200">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slider arrows */}
     
{/* Technologies */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-3xl backdrop-blur-sm" />
          <div className="relative p-12 rounded-3xl border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advanced Technologies</h3>
            <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech) => {
                const Icon = tech.icon
                return (
                  <div key={tech.title} className="group relative p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-500 mb-2">Current Features</h5>
                        <ul className="space-y-2">
                          {tech.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-500 mb-2">Future Roadmap</h5>
                        <ul className="space-y-2">
                          {tech.future.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile slider */}
          <div className="lg:hidden relative max-w-sm mx-auto">
  <AnimatePresence mode="wait">
    {technologies[sliderIndex] && (
      <motion.div
        key={technologies[sliderIndex].title}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center" // Add this
      >
        {(() => {
          const tech = technologies[sliderIndex]
          const Icon = tech.icon
          return (
            <div className="w-full group relative p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100 transition-all">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
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
                    {tech.future.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })()}
      </motion.div>
    )}
  </AnimatePresence>

               <div className="lg:hidden flex justify-center gap-6 mt-6">
        <button
          onClick={() => setSliderIndex((sliderIndex - 1 + technologies.length) % technologies.length)}
          className="p-2 rounded-full bg-white border border-gray-300 hover:border-blue-300 shadow"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={() => setSliderIndex((sliderIndex + 1) % technologies.length)}
          className="p-2 rounded-full bg-white border border-gray-300 hover:border-blue-300 shadow"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
