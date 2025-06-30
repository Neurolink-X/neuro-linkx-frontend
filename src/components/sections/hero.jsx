'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Brain, Zap, LineChart, ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1e2942] via-[#1a2436] to-[#0e1421] overflow-hidden px-4'>
      {/*Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,48,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]' />
      </div>

      {/* Content Container */}
       <div className='container relative mx-auto pt-7 max-w-6xl'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-left'
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-lg shadow-[#ff3b30]/5'
            >
              <Sparkles className='w-4 h-4 text-[#ff3b30]' />
              <span className='text-white/90 text-sm font-medium tracking-wide'>Leading Enterprise AI Development Company</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-5xl max-md:text-3xl font-bold text-white leading-tight mb-6 tracking-tight'
            >
              From{' '}
              <span className='relative inline-block group'>
                <span className='relative z-10'>What If?</span>
                <motion.div
                  className='absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff3b30] via-orange-500 to-[#ff3b30] rounded-full'
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.div
                  className='absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff3b30] rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.div
                  className='absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
              </span>
              {' '}to{' '}
              <span className='relative inline-block group'>
                <span className='relative z-10'>Here&apos;s How</span>
                <motion.div
                  className='absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 rounded-full'
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
                <motion.div
                  className='absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff3b30] rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
                <motion.div
                  className='absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
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
              className='text-3xl max-md:text-xl   font-bold text-white mb-8 tracking-tight'
            >
              Powered by{' '}
              <span className='bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient'>
                Data & AI
              </span>
            </motion.h2>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button className='group relative px-8 py-4 max-md:px-5 rounded-full font-medium overflow-hidden transition-all duration-300 shadow-lg shadow-[#ff3b30]/10'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ff3b30] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute inset-0 bg-[#ff3b30] group-hover:bg-transparent transition-colors duration-300'></div>
                <span className='relative text-white text-lg max-md:text:md flex items-center gap-2'>
                  Explore More
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </span>
              </button>
            </motion.div>

            <p className='text-white/70 text-lg max-w-2xl mx-auto mt-10'>
              We&apos;re not just another tech company. We&apos;re your partner in innovation.
            </p>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-6 pb-10'
          >
            {/* Data & AI Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className='group p-6 text-white bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-[#ff3b30]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <Brain className='w-6 h-6 text-[#ff3b30]' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Data & AI</h3>
                  <p className='text-white/70'>
                    Turn data into insights and insights into autonomous intelligence with data & AI.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GenAI Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className='group p-6 text-white bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-[#ff3b30]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <Zap className='w-6 h-6 text-[#ff3b30]' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>GenAI & Agentic AI</h3>
                  <p className='text-white/70'>
                    Move past static automation with AI that generates insights & autonomously acts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MLOps Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className='group p-6 text-white bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-[#ff3b30]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <LineChart className='w-6 h-6 text-[#ff3b30]' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>MLOps</h3>
                  <p className='text-white/70'>
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