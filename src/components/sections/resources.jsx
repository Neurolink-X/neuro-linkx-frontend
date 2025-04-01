&quot;use client&quot;

import { motion } from &quot;framer-motion&quot;
import Image from &quot;next/image&quot;
import { ArrowRight, BookOpen, Clock, Tag, Sparkles, TrendingUp, Bookmark } from &quot;lucide-react&quot;

const resources = [
  {
    id: 1,
    title: &quot;Reverse ETL: Operationalizing Data for Real-Time Business Decisions&quot;,
    category: &quot;Data Analytics&quot;,
    readTime: &quot;5 min read&quot;,
    description: &quot;Learn how to leverage reverse ETL to make data-driven decisions in real-time.&quot;,
    color: &quot;from-[#1e2942] to-[#2d3748]&quot;,
    trending: true
  },
  {
    id: 2,
    title: &quot;The HR Prompt Handbook: 200+ Prompts For ChatGPT/Gemini and Your Own or Private LLMs&quot;,
    category: &quot;AI & Machine Learning&quot;,
    readTime: &quot;8 min read&quot;,
    description: &quot;A comprehensive guide to using AI prompts effectively in HR processes.&quot;,
    color: &quot;from-[#1e2942] to-[#2d3748]&quot;,
    trending: true
  },
  {
    id: 3,
    title: &quot;Leveraging Generative AI for Advanced Anti-Money Laundering and Fraud Detection&quot;,
    category: &quot;Security&quot;,
    readTime: &quot;6 min read&quot;,
    description: &quot;Discover how AI is revolutionizing fraud detection and AML processes.&quot;,
    color: &quot;from-[#1e2942] to-[#2d3748]&quot;
  },
  {
    id: 4,
    title: &quot;Edge Computing in Green IoT: Reducing Energy Use in Data Processing&quot;,
    category: &quot;IoT&quot;,
    readTime: &quot;7 min read&quot;,
    description: &quot;Explore sustainable IoT solutions through edge computing technology.&quot;,
    color: &quot;from-[#1e2942] to-[#2d3748]&quot;
  },
]

export default function Resources() {
  return (
    <section className=&quot;w-full py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden&quot;>
      {/* Background decorative elements */}
      <div className=&quot;absolute inset-0 overflow-hidden&quot;>
        <div className=&quot;absolute -top-40 -right-40 w-80 h-80 bg-[#1e2942]/5 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute -bottom-40 -left-40 w-80 h-80 bg-[#2d3748]/5 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute top-1/2 left-1/2 w-96 h-96 bg-[#ff3b30]/5 rounded-full blur-3xl&quot;></div>
      </div>

      <div className=&quot;container mx-auto px-4 max-w-6xl relative&quot;>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=&quot;text-center mb-16&quot;
        >
          <div className=&quot;inline-flex items-center gap-2 px-4 py-2 bg-[#ff3b30]/5 rounded-full mb-6 border border-[#ff3b30]/10 shadow-sm&quot;>
            <Sparkles className=&quot;w-5 h-5 text-[#ff3b30]&quot; />
            <span className=&quot;text-[#ff3b30] font-medium&quot;>Resources & Insights</span>
          </div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4 text-[#1e2942]&quot;>
            The Edge of Innovation
          </h2>
          <p className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;>
            Discover cutting-edge insights and resources to drive your business forward
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=&quot;group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#ff3b30]/20 overflow-hidden relative&quot;
            >
              {/* Gradient overlay */}
              <div className=&quot;absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300&quot;
                style={{
                  background: `linear-gradient(to bottom right, #1e2942, #2d3748)`
                }}
              ></div>

              <div className=&quot;p-8 relative&quot;>
                <div className=&quot;flex items-center justify-between mb-4&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <span className=&quot;px-3 py-1 bg-[#ff3b30]/5 rounded-full text-sm font-medium text-[#ff3b30] flex items-center gap-1 shadow-sm&quot;>
                      <Tag className=&quot;w-3 h-3&quot; />
                      {resource.category}
                    </span>
                    <span className=&quot;text-sm text-gray-500 flex items-center gap-1&quot;>
                      <Clock className=&quot;w-3 h-3&quot; />
                      {resource.readTime}
                    </span>
                  </div>
                  <div className=&quot;flex items-center gap-2&quot;>
                    {resource.trending && (
                      <span className=&quot;px-2 py-1 bg-[#ff3b30]/5 rounded-full text-xs font-medium text-[#ff3b30] flex items-center gap-1&quot;>
                        <TrendingUp className=&quot;w-3 h-3&quot; />
                        Trending
                      </span>
                    )}
                    <button className=&quot;p-2 hover:bg-gray-50 rounded-full transition-colors&quot;>
                      <Bookmark className=&quot;w-4 h-4 text-gray-400 group-hover:text-[#ff3b30]&quot; />
                    </button>
                  </div>
                </div>
                <h3 className=&quot;text-xl font-semibold text-[#1e2942] mb-3 group-hover:text-[#ff3b30] transition-colors line-clamp-2&quot;>
                  {resource.title}
                </h3>
                <p className=&quot;text-gray-600 mb-6 line-clamp-2&quot;>
                  {resource.description}
                </p>
                <button className=&quot;inline-flex items-center gap-2 text-[#ff3b30] font-medium hover:text-[#ff3b30]/80 transition-colors group&quot;>
                  <span>Read Article</span>
                  <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

