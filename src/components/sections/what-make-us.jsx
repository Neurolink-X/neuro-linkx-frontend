'use client'

import { motion } from 'framer-motion'
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
} from 'lucide-react'

const features = [
  {
    title: 'Expert Team',
    description: 'Our team of skilled professionals brings years of experience and expertise to every project.',
    icon: Users,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Client-Focused',
    description: 'We prioritize your needs and work closely with you to deliver solutions that exceed expectations.',
    icon: Target,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Innovation',
    description: 'We stay at the forefront of technology to provide cutting-edge solutions for your business.',
    icon: Zap,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Quality Assurance',
    description: 'Our rigorous quality control processes ensure reliable and secure solutions.',
    icon: Shield,
    color: 'from-green-500 to-emerald-500'
  }
]

const advantages = [
  {
    title: 'Proven Track Record',
    description: 'Successfully delivered solutions to Fortune 500 companies worldwide.',
    icon: Award,
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Innovation Focus',
    description: 'Constantly exploring and implementing cutting-edge technologies.',
    icon: Lightbulb,
    color: 'from-orange-600 to-red-600'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services.',
    icon: Clock,
    color: 'from-green-600 to-emerald-600'
  }
]

export default function WhatMakesUs() {
  return (
    <section className=' w-full max-w-[100vw] overflow-x-hidden py-20 px-4 bg-gradient-to-b from-[#1e2942] via-[#1a2436] to-[#0e1421]'>
      <div className='container mx-auto max-w-7xl'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-white mb-6'>What Makes Us Different</h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Our unique approach and commitment to excellence set us apart from the competition.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5'
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>{feature.title}</h3>
              <p className='text-white/70'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 