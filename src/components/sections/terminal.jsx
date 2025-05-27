'use client'

import { motion } from 'framer-motion'
import { Terminal, ChevronRight } from 'lucide-react'

const commands = [
  {
    command: 'git clone https://github.com/yourusername/yourproject.git',
    description: 'Clone the repository'
  },
  {
    command: 'cd yourproject',
    description: 'Navigate to project directory'
  },
  {
    command: 'npm install',
    description: 'Install dependencies'
  },
  {
    command: 'npm run dev',
    description: 'Start development server'
  }
]

export default function TerminalDemo() {
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
          <h2 className='text-4xl font-bold text-white mb-6'>Get Started</h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Follow these simple steps to get your project up and running in minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-[#ff3b30]/5'
        >
          <div className='absolute top-4 left-4 flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-500'></div>
            <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
          </div>

          <div className='mt-12 space-y-4'>
            {commands.map((cmd, index) => (
              <motion.div
                key={cmd.command}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='flex items-center gap-4'
              >
                <Terminal className='w-5 h-5 text-[#ff3b30]' />
                <div className='flex-1'>
                  <code className='text-white font-mono'>{cmd.command}</code>
                  <p className='text-white/70 text-sm mt-1'>{cmd.description}</p>
                </div>
                <ChevronRight className='w-5 h-5 text-white/50' />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
  
  