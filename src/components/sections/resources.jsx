'use client'

import { motion } from 'framer-motion'
import { Book, FileText, Video, Users } from 'lucide-react'

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    icon: FileText,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Tutorials',
    description: 'Step-by-step learning resources',
    icon: Book,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Video Guides',
    description: 'Visual learning materials',
    icon: Video,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Community',
    description: 'Join our developer community',
    icon: Users,
    color: 'from-green-500 to-emerald-500'
  }
]

export default function Resources() {
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
          <h2 className='text-4xl font-bold text-white mb-6'>Resources</h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Access our comprehensive collection of learning materials and documentation.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5'
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4`}>
                <resource.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>{resource.title}</h3>
              <p className='text-white/70'>{resource.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

