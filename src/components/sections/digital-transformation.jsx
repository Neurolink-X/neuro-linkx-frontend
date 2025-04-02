'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Database, Cloud, Settings, Target, Workflow, Sparkles, CheckCircle2, ArrowUpRight, BarChart2, Users2, Globe, Clock, Target as TargetIcon } from 'lucide-react'

const challenges = [
  {
    title: 'Legacy Systems & Infrastructure',
    icon: <Settings className='w-6 h-6' />,
    color: 'from-blue-500 to-blue-600',
    description: 'Modernize your existing systems for better efficiency',
    stats: '40% faster operations'
  },
  {
    title: 'Data Silos',
    icon: <Database className='w-6 h-6' />,
    color: 'from-purple-500 to-purple-600',
    description: 'Break down barriers and unify your data',
    stats: '60% better data access'
  },
  {
    title: 'Cybersecurity Threats',
    icon: <Shield className='w-6 h-6' />,
    color: 'from-red-500 to-red-600',
    description: 'Protect your digital assets with advanced security',
    stats: '99.9% security'
  },
  {
    title: 'Operational Inefficiencies',
    icon: <Workflow className='w-6 h-6' />,
    color: 'from-green-500 to-green-600',
    description: 'Streamline processes for maximum productivity',
    stats: '50% cost reduction'
  },
  {
    title: 'Tech Debt',
    icon: <Target className='w-6 h-6' />,
    color: 'from-orange-500 to-orange-600',
    description: 'Address technical debt for sustainable growth',
    stats: '45% faster development'
  },
  {
    title: 'Multi-Cloud Management',
    icon: <Cloud className='w-6 h-6' />,
    color: 'from-indigo-500 to-indigo-600',
    description: 'Optimize your cloud infrastructure',
    stats: '35% cost savings'
  },
]

const benefits = [
  {
    title: 'Increased Efficiency',
    icon: <BarChart2 className='w-5 h-5' />,
    description: 'Streamline operations and boost productivity'
  },
  {
    title: 'Cost Reduction',
    icon: <TargetIcon className='w-5 h-5' />,
    description: 'Optimize resources and reduce expenses'
  },
  {
    title: 'Better Customer Experience',
    icon: <Users2 className='w-5 h-5' />,
    description: 'Deliver exceptional service to your customers'
  },
  {
    title: 'Enhanced Security',
    icon: <Shield className='w-5 h-5' />,
    description: 'Protect your business with advanced security'
  },
  {
    title: 'Scalable Solutions',
    icon: <Globe className='w-5 h-5' />,
    description: 'Grow your business with flexible solutions'
  },
  {
    title: 'Competitive Advantage',
    icon: <Clock className='w-5 h-5' />,
    description: 'Stay ahead of your competition'
  }
]

export default function DigitalTransformation() {
  return (
    <section className='py-20 px-4 min-h-[90vh] bg-gradient-to-b from-white to-gray-50 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto max-w-7xl relative'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='inline-flex items-center gap-2 px-4 py-2 bg-[#1e2942]/5 rounded-full mb-6 border border-[#1e2942]/10'
          >
            <Sparkles className='w-5 h-5 text-[#1e2942]' />
            <span className='text-[#1e2942] font-medium'>Digital Excellence</span>
          </motion.div>
          <h2 className='text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1e2942] to-[#2d3748] bg-clip-text text-transparent'>
            Digital Transformation Services
          </h2>
          <h3 className='text-2xl md:text-4xl mb-4 text-[#1e2942]'>
            It's the nimble who triumph, not just the big!
          </h3>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Transform your business with cutting-edge digital solutions
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='relative h-[400px] bg-gradient-to-br from-[#1e2942] to-[#2d3748] rounded-2xl overflow-hidden shadow-2xl group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10'></div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Zap className='w-24 h-24 text-white' />
              </motion.div>
            </div>
            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent'>
              <h4 className='text-white text-xl font-semibold'>Transform Your Business</h4>
              <p className='text-white/80 mt-2'>Embrace the future of digital innovation</p>
            </div>
            <div className='absolute top-4 right-4'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='bg-white/10 backdrop-blur-sm p-2 rounded-lg'
              >
                <ArrowUpRight className='w-6 h-6 text-white' />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex flex-col justify-center items-center'
          >
            <div className='grid grid-cols-2 gap-4 w-full'>
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-100 hover:border-[#1e2942]/20 hover:bg-[#1e2942]/5'
                >
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    style={{
                      background: `linear-gradient(to bottom right, ${challenge.color.split(' ')[1]}, ${challenge.color.split(' ')[3]})`,
                      opacity: '0.1'
                    }}
                  ></div>
                  <div className='relative flex flex-col items-center text-center'>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${challenge.color} text-white mb-3`}>
                      {challenge.icon}
                    </div>
                    <h3 className='text-base font-semibold text-[#1e2942] transition-colors duration-300'>
                      {challenge.title}
                    </h3>
                    <p className='text-sm text-gray-600 mt-2 transition-colors duration-300'>
                      {challenge.description}
                    </p>
                    <div className='mt-3 px-3 py-1 bg-[#1e2942]/5 rounded-full group-hover:bg-[#1e2942]/10 transition-colors duration-300'>
                      <p className='text-sm font-medium text-[#1e2942] transition-colors duration-300'>
                        {challenge.stats}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className='w-full mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100'>
              <h4 className='text-lg font-semibold text-[#1e2942] mb-4'>Key Benefits</h4>
              <div className='grid grid-cols-2 gap-4'>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'
                  >
                    <div className='p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white'>
                      {benefit.icon}
                    </div>
                    <div>
                      <p className='text-sm font-medium text-[#1e2942]'>{benefit.title}</p>
                      <p className='text-xs text-gray-500 mt-1'>{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='w-full md:w-1/2 mx-auto my-8'>
              <Button 
                className='w-full bg-gradient-to-r from-[#1e2942] to-[#2d3748] text-white px-8 py-6 rounded-full font-medium hover:from-[#2d3748] hover:to-[#1e2942] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <span className='relative'>Achieve Digital Excellence</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform relative' />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

