"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const industries = [
  {
    name: "InsurTech",
    title: "Claims made easy, peace made real",
    description: "AI and analytics simplify claims and modernize insurance workflows.",
    bgImage: "/images/InsurTech.png",
  },
  {
    name: "HRTech",
    title: "Making HR less 'ugh' & more 'aha!'",
    description: "We streamline hiring, onboarding, and engagement with automation.",
    bgImage: "/images/HrTech.png",
  },
  {
    name: "FinTech",
    title: "Turning financial blah into financial yay",
    description: "Secure, compliant, and innovative FinTech apps driven by AI.",
    bgImage: "/images/fintech.png",
  },
  {
    name: "HealthTech",
    title: "Healthcare reimagined for everyone",
    description: "Digital tools that personalize care and improve outcomes.",
    bgImage: "/images/Health-tech.png",
  },
  {
    name: "CleanTech",
    title: "Sustainable solutions for a greener future",
    description: "Platforms to optimize energy and reduce environmental impact.",
    bgImage: "/images/cleanTech.png",
  },
]

export default function Industries() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef(null)


  const next = () => setIndex((i) => (i + 1) % industries.length)
  const prev = () => setIndex((i) => (i - 1 + industries.length) % industries.length)

  useEffect(() => {
    if (isHovered) return
    timeoutRef.current = setTimeout(next, 6000)
    return () => timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [index, isHovered])

  return (
    <section className="relative w-full bg-black overflow-hidden py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transforming Industries with AI
        </motion.h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
          From healthcare to clean energy — solving real-world challenges with intelligent tech.
        </p>
      </div>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative mt-20 flex justify-center items-center min-h-[500px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${industries[index].name}-${industries[(index + 1) % industries.length].name}`}
            initial={{ opacity: 0, y:40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-10 px-6 max-w-6xl w-full"
          >
            {[0, 1].map((offset) => {
              const i = (index + offset) % industries.length
              return (
                <div
                  key={industries[i].name}
                  className="group relative h-[460px] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center transition-transform hover:scale-[1.015]"
                  style={{ backgroundImage: `url('${industries[i].bgImage}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70 z-0" />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold group-hover:text-cyan-400 transition"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {industries[i].title}
                    </motion.h3>
                    <p className="text-sm md:text-base mt-3 mb-6 text-white/80">
                      {industries[i].description}
                    </p>
                    <span className="uppercase tracking-wider text-xs text-cyan-400 font-medium">
                      {industries[i].name}
                    </span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          aria-label="Previous Slide"
          onClick={prev}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg transition"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          aria-label="Next Slide"
          onClick={next}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg transition"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-10 gap-3">
        {industries.map((_, i) => (
          <motion.button
            key={`dot-${i}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${industries[i].name}`}
            className={`h-2.5 rounded-full transition-all ${
              index === i
                ? "w-6 bg-cyan-400 shadow-md"
                : "w-2.5 bg-white/20 hover:bg-white/40"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  )
}
