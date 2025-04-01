&apos;use client&apos;

import { Button } from &quot;@/components/ui/button&quot;
import { motion } from &quot;framer-motion&quot;
import { ArrowRight, Sparkles, Brain, Zap, LineChart, ChevronRight } from &quot;lucide-react&quot;

export default function Hero() {
  return (
    <section className=&quot;relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1e2942] via-[#1a2436] to-[#0e1421] overflow-hidden px-4&quot;>
      {/* Animated Background */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,48,0.1),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]&quot; />
      </div>

      {/* Content Container */}
      <div className=&quot;container relative mx-auto max-w-6xl&quot;>
        <div className=&quot;grid md:grid-cols-2 gap-12 items-center&quot;>
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=&quot;text-left&quot;
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-lg shadow-[#ff3b30]/5&quot;
            >
              <Sparkles className=&quot;w-4 h-4 text-[#ff3b30]&quot; />
              <span className=&quot;text-white/90 text-sm font-medium tracking-wide&quot;>Leading Enterprise AI Development Company</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=&quot;text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight&quot;
            >
              From{&apos; &apos;}
              <span className=&quot;relative inline-block group&quot;>
                <span className=&quot;relative z-10&quot;>What If?</span>
                <motion.div
                  className=&quot;absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff3b30] via-orange-500 to-[#ff3b30] rounded-full&quot;
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.div
                  className=&quot;absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff3b30] rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.div
                  className=&quot;absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
              </span>
              {&apos; &apos;}to{&apos; &apos;}
              <span className=&quot;relative inline-block group&quot;>
                <span className=&quot;relative z-10&quot;>Here&apos;s How</span>
                <motion.div
                  className=&quot;absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 rounded-full&quot;
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
                <motion.div
                  className=&quot;absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff3b30] rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
                <motion.div
                  className=&quot;absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=&quot;text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight&quot;
            >
              Powered by{&apos; &apos;}
              <span className=&quot;bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient&quot;>
                Data & AI
              </span>
            </motion.h2>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button className=&quot;group relative px-8 py-4 rounded-full font-medium overflow-hidden transition-all duration-300 shadow-lg shadow-[#ff3b30]/10&quot;>
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ff3b30] opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
                <div className=&quot;absolute inset-0 bg-[#ff3b30] group-hover:bg-transparent transition-colors duration-300&quot;></div>
                <span className=&quot;relative text-white text-lg flex items-center gap-2&quot;>
                  Explore More
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=&quot;space-y-6&quot;
          >
            {/* Data & AI Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className=&quot;group p-6 text-white bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5&quot;
            >
              <div className=&quot;flex items-start gap-4&quot;>
                <div className=&quot;w-12 h-12 rounded-xl bg-[#ff3b30]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                  <Brain className=&quot;w-6 h-6 text-[#ff3b30]&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-xl font-semibold mb-2&quot;>Data & AI</h3>
                  <p className=&quot;text-white/70&quot;>
                    Turn data into insights and insights into autonomous intelligence with data & AI.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GenAI Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className=&quot;group p-6 text-white bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5&quot;
            >
              <div className=&quot;flex items-start gap-4&quot;>
                <div className=&quot;w-12 h-12 rounded-xl bg-[#ff3b30]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                  <Zap className=&quot;w-6 h-6 text-[#ff3b30]&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-xl font-semibold mb-2&quot;>GenAI & Agentic AI</h3>
                  <p className=&quot;text-white/70&quot;>
                    Move past static automation with AI that generates insights & autonomously acts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MLOps Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className=&quot;group p-6 text-white bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5&quot;
            >
              <div className=&quot;flex items-start gap-4&quot;>
                <div className=&quot;w-12 h-12 rounded-xl bg-[#ff3b30]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                  <LineChart className=&quot;w-6 h-6 text-[#ff3b30]&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-xl font-semibold mb-2&quot;>MLOps</h3>
                  <p className=&quot;text-white/70&quot;>
                    Automate, monitor, and refine ML models with MLOps for continuous value delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

