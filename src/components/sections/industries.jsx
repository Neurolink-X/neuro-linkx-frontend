"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const industries = [
  {
    name: "InsurTech",
    title: "Claims made easy, peace made real",
    description:
      "AI and analytics simplify claims and modernize insurance workflows for better user experience.",
    bgImage: "/images/InsurTech.png",
    textColor: "text-white",
  },
  {
    name: "HRTech",
    title: "Making HR less 'ugh' & more 'aha!'",
    description:
      "We streamline hiring, onboarding, and engagement with intelligent automation.",
    bgImage: "/images/HrTech.png",
    textColor: "text-white",
  },
  {
    name: "FinTech",
    title: "Turning financial blah into financial yay",
    description:
      "Secure, compliant, and innovative FinTech apps driven by Data & AI.",
    bgImage: "/images/fintech.png",
    textColor: "text-white",
  },
  {
    name: "HealthTech",
    title: "Healthcare reimagined for everyone",
    description:
      "Digital tools that personalize care, enhance diagnostics, and improve outcomes.",
    bgImage: "/images/Health-tech.png",
    textColor: "text-white",
  },
  {
    name: "CleanTech",
    title: "Sustainable solutions for a greener future",
    description:
      "We build intelligent platforms to optimize energy and lower environmental impact.",
    bgImage: "/images/cleanTech.png",
    textColor: "text-white",
  },
]

export default function Industries() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  const next = () => setIndex((i) => (i + 1) % industries.length)
  const prev = () => setIndex((i) => (i - 1 + industries.length) % industries.length)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next()
    }, 5000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [index])

  return (
    <section className="relative w-full py-20 bg-[#0f172a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transforming Industries with Enterprise AI
        </motion.h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          From healthcare to clean energy — solving real-world challenges with smart tech.
        </p>
      </div>

      <div className="relative mt-16 flex justify-center items-center min-h-[460px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={industries[index].name}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 px-6 max-w-5xl w-full"
          >
            {[0, 1].map((offset) => {
              const i = (index + offset) % industries.length
              return (
                <div
                  key={industries[i].name}
                  className="relative h-[420px] rounded-3xl shadow-2xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url('${industries[i].bgImage}')` }}
                >
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end text-left text-white">
                    <h3 className={`text-xl font-semibold ${industries[i].textColor}`}>
                      {industries[i].title}
                    </h3>
                    <p className="text-sm mt-2 mb-4">{industries[i].description}</p>
                    <span className="text-cyan-400 text-sm font-medium">{industries[i].name}</span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Gradient Pills as Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {industries.map((_, i) => (
          <motion.button
            key={`dot-${i}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              index === i
                ? "w-6 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
                : "w-2.5 bg-white/20"
            }`}
            whileHover={{ scale: 1.15 }}
          />
        ))}
      </div>

      {/* Left Navigation Arrow */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10">
        <button
          onClick={prev}
          className="group relative p-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-lg transition shadow-xl"
        >
          <ChevronLeft size={20} className="text-white group-hover:scale-110 transition" />
          <span className="absolute inset-0 rounded-full ring-2 ring-white/10 group-hover:ring-cyan-400 transition" />
        </button>
      </div>

      {/* Right Navigation Arrow */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10">
        <button
          onClick={next}
          className="group relative p-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-lg transition shadow-xl"
        >
          <ChevronRight size={20} className="text-white group-hover:scale-110 transition" />
          <span className="absolute inset-0 rounded-full ring-2 ring-white/10 group-hover:ring-cyan-400 transition" />
        </button>
      </div>
    </section>
  )
}
