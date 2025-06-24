'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  Settings,
  Database,
  Shield,
  Workflow,
  Target,
  Cloud,
  BarChart2,
  Users2,
  Globe,
  Clock,
  Target as TargetIcon
} from 'lucide-react'

const challenges = [
  {
    title: 'Legacy Systems',
    icon: <Settings className='w-5 h-5' />, 
    color: 'from-cyan-500 to-blue-600',
    description: 'Modernize outdated systems to boost productivity.',
    stats: '40% faster ops'
  },
  {
    title: 'Data Silos',
    icon: <Database className='w-5 h-5' />, 
    color: 'from-pink-500 to-purple-600',
    description: 'Integrate disconnected data sources seamlessly.',
    stats: '60% better access'
  },
  {
    title: 'Cybersecurity',
    icon: <Shield className='w-5 h-5' />, 
    color: 'from-rose-500 to-red-600',
    description: 'Fortify your infrastructure against threats.',
    stats: '99.9% secure'
  },
  {
    title: 'Inefficiencies',
    icon: <Workflow className='w-5 h-5' />, 
    color: 'from-lime-500 to-green-600',
    description: 'Automate and optimize your workflows.',
    stats: '50% cost savings'
  },
  {
    title: 'Tech Debt',
    icon: <Target className='w-5 h-5' />, 
    color: 'from-yellow-500 to-orange-600',
    description: 'Refactor legacy codebases for scalability.',
    stats: '45% faster dev'
  },
  {
    title: 'Cloud Chaos',
    icon: <Cloud className='w-5 h-5' />, 
    color: 'from-indigo-500 to-blue-700',
    description: 'Simplify and secure multi-cloud setups.',
    stats: '35% cost savings'
  }
]

const benefits = [
  {
    title: 'Efficiency',
    icon: <BarChart2 className='w-5 h-5' />, 
    description: 'Smarter operations for better output.'
  },
  {
    title: 'Cost Savings',
    icon: <TargetIcon className='w-5 h-5' />, 
    description: 'Strategically reduce overhead.'
  },
  {
    title: 'Customer Focus',
    icon: <Users2 className='w-5 h-5' />, 
    description: 'Prioritize user experience.'
  },
  {
    title: 'Security',
    icon: <Shield className='w-5 h-5' />, 
    description: 'Protect data and infrastructure.'
  },
  {
    title: 'Scalable',
    icon: <Globe className='w-5 h-5' />, 
    description: 'Grow without tech bottlenecks.'
  },
  {
    title: 'Agility',
    icon: <Clock className='w-5 h-5' />, 
    description: 'Respond swiftly to market needs.'
  }
]

export default function DigitalTransformation() {
  return (
    <section className='relative w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-6 overflow-hidden'>
      {/* Floating shapes background */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none -z-10'>
        <div className='absolute w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 top-[-5rem] left-[-5rem]'></div>
        <div className='absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 bottom-[-5rem] right-[-5rem]'></div>
      </div>

      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-[#1e2942]/5 rounded-full border border-[#1e2942]/10 mb-4'>
            <Sparkles className='w-4 h-4 text-[#1e2942]' />
            <span className='text-sm font-medium text-[#1e2942]'>Next-Gen Solutions</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-extrabold text-[#1e2942] mb-4'>
            Empowering Digital Transformation
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            We craft future-proof, agile and intelligent digital solutions for modern enterprises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-2xl mb-16 border border-gray-200'
        >
          <h3 className='text-2xl font-semibold text-[#1e2942] mb-6 text-center'>
            Key Digital Challenges
          </h3>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {challenges.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className={`p-2 rounded-md bg-gradient-to-br ${c.color} text-white w-fit mb-3`}>
                  {c.icon}
                </div>
                <h4 className='font-semibold text-[#1e2942]'>{c.title}</h4>
                <p className='text-sm text-gray-600 mt-1'>{c.description}</p>
                <p className='text-sm text-[#1e2942] font-medium mt-2'>{c.stats}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h3 className='text-2xl font-bold text-[#1e2942] mb-6'>Strategic Benefits</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='flex items-start gap-4 p-6 bg-white border rounded-xl hover:bg-gray-50 transition-colors shadow-md'
              >
                <div className='p-2 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 text-white'>
                  {b.icon}
                </div>
                <div className='text-left'>
                  <p className='text-sm font-semibold text-[#1e2942]'>{b.title}</p>
                  <p className='text-xs text-gray-500 mt-1'>{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
