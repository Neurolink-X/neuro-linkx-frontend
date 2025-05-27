'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Code, Server } from 'lucide-react'

const stats = [
  {
    title: '400+ Engineers',
    description: 'Our team of skilled professionals',
    icon: Users,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: '3M+ Man Hours',
    description: 'Dedicated to client success',
    icon: Clock,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: '60+ Product Lifecycles',
    description: 'Successfully delivered',
    icon: Code,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: '40+ Live Projects',
    description: 'Currently in production',
    icon: Server,
    color: 'from-green-500 to-emerald-500'
  }
]

export default function Stats() {
  return (
    <section className='w-full max-w-[100vw] overflow-x-hidden py-20 px-4 bg-gradient-to-b from-[#1e2942] via-[#1a2436] to-[#0e1421]'>
      <div className='container mx-auto max-w-7xl'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-white mb-6'>Our Impact</h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Numbers that speak for themselves. Our commitment to excellence has helped us achieve remarkable milestones.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5'
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>{stat.title}</h3>
              <p className='text-white/70'>{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

