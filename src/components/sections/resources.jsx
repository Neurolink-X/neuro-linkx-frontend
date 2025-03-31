"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, BookOpen, Clock, Tag, Sparkles, TrendingUp, Bookmark } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Reverse ETL: Operationalizing Data for Real-Time Business Decisions",
    category: "Data Analytics",
    readTime: "5 min read",
    description: "Learn how to leverage reverse ETL to make data-driven decisions in real-time.",
    color: "from-[#1e2942] to-[#2d3748]",
    trending: true
  },
  {
    id: 2,
    title: "The HR Prompt Handbook: 200+ Prompts For ChatGPT/Gemini and Your Own or Private LLMs",
    category: "AI & Machine Learning",
    readTime: "8 min read",
    description: "A comprehensive guide to using AI prompts effectively in HR processes.",
    color: "from-[#1e2942] to-[#2d3748]",
    trending: true
  },
  {
    id: 3,
    title: "Leveraging Generative AI for Advanced Anti-Money Laundering and Fraud Detection",
    category: "Security",
    readTime: "6 min read",
    description: "Discover how AI is revolutionizing fraud detection and AML processes.",
    color: "from-[#1e2942] to-[#2d3748]"
  },
  {
    id: 4,
    title: "Edge Computing in Green IoT: Reducing Energy Use in Data Processing",
    category: "IoT",
    readTime: "7 min read",
    description: "Explore sustainable IoT solutions through edge computing technology.",
    color: "from-[#1e2942] to-[#2d3748]"
  },
]

export default function Resources() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1e2942]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2d3748]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ff3b30]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff3b30]/5 rounded-full mb-6 border border-[#ff3b30]/10 shadow-sm">
            <Sparkles className="w-5 h-5 text-[#ff3b30]" />
            <span className="text-[#ff3b30] font-medium">Resources & Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e2942]">
            The Edge of Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover cutting-edge insights and resources to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#ff3b30]/20 overflow-hidden relative"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to bottom right, #1e2942, #2d3748)`
                }}
              ></div>

              <div className="p-8 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#ff3b30]/5 rounded-full text-sm font-medium text-[#ff3b30] flex items-center gap-1 shadow-sm">
                      <Tag className="w-3 h-3" />
                      {resource.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {resource.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {resource.trending && (
                      <span className="px-2 py-1 bg-[#ff3b30]/5 rounded-full text-xs font-medium text-[#ff3b30] flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                    <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                      <Bookmark className="w-4 h-4 text-gray-400 group-hover:text-[#ff3b30]" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#1e2942] mb-3 group-hover:text-[#ff3b30] transition-colors line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {resource.description}
                </p>
                <button className="inline-flex items-center gap-2 text-[#ff3b30] font-medium hover:text-[#ff3b30]/80 transition-colors group">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

