'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, GitBranch, Server, Shield } from 'lucide-react'

const steps = [
  {
    title: 'Development',
    description: 'Write clean, efficient code following best practices',
    icon: Code2,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Version Control',
    description: 'Manage code changes with Git',
    icon: GitBranch,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Deployment',
    description: 'Deploy applications to production',
    icon: Server,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Security',
    description: 'Ensure robust security measures',
    icon: Shield,
    color: 'from-green-500 to-emerald-500'
  }
]

export default function Workflow() {
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
          <h2 className='text-4xl font-bold text-white mb-6'>Our Workflow</h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            A streamlined process that ensures quality and efficiency in every project.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5'
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                <step.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>{step.title}</h3>
              <p className='text-white/70'>{step.description}</p>
              {index < steps.length - 1 && (
                <div className='absolute top-1/2 -right-4 transform -translate-y-1/2'>
                  <ArrowRight className='w-6 h-6 text-white/50' />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

