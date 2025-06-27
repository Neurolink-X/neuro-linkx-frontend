"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
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
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollStep = () => {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "auto" })
      } else {
        container.scrollBy({ left: 350, behavior: "smooth" })
      }
    }

    const interval = setInterval(scrollStep, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -400, behavior: "smooth" })
  }

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 400, behavior: "smooth" })
  }

  const repeatedList = [...industries, ...industries]

  return (
    <section className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black py-24 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-white text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empowering Industries with AI
        </motion.h2>
        <p className="text-white/70 text-lg md:text-xl">
          We transform real-world problems into powerful AI-driven solutions.
        </p>
      </div>



      <div className="relative mt-16">
        {!isMobile && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-6 top-1/2 z-20 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-6 top-1/2 z-20 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md"
            >
              <ChevronRight className="text-white" />
            </button>
          </>
        )}


       <motion.div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar px-6 lg:px-16"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >

          {repeatedList.map((item, i) => (
            <motion.div
              key={`${item.name}-${i}`}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[calc((100%-4rem)/3)] rounded-2xl overflow-hidden bg-black shadow-xl transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div
                className="relative h-[420px] bg-cover bg-center"
                style={{ backgroundImage: `url('${item.bgImage}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
                <div className="absolute bottom-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                  <span className="inline-block mt-4 text-cyan-400 text-xs uppercase tracking-wide font-medium">
                    {item.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
