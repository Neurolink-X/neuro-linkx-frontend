'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain, Zap, LineChart, ChevronRight, Sparkles, Code2, Database, Network,
  Shield, Cpu, Cloud, GitBranch, Boxes, Server, Globe, Rocket, BarChart,
  
} from 'lucide-react'
import Link from "next/link"

const tabs = ['Gen AI', 'DevOps', 'CloudOps', 'Data Engineering', 'Product Lifecycle', 'Enterprise App']

const tabContent = {
  'Gen AI': {
    title: 'Transforming Business with Generative AI',
    description:
      'Our Gen AI solutions leverage cutting-edge artificial intelligence to generate new content, ideas, and solutions. From natural language processing to image generation, our AI services help businesses automate creative processes, enhance customer experiences, and drive innovation across all departments.',
    features: [
      { id: '01', title: 'Natural Language Processing', icon: Brain, color: 'from-blue-500 to-indigo-500' },
      { id: '02', title: 'Image & Content Generation', icon: Zap, color: 'from-purple-500 to-pink-500' },
      { id: '03', title: 'Predictive Analytics', icon: LineChart, color: 'from-orange-500 to-red-500' },
      { id: '04', title: 'AI Model Training & Deployment', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    ],
  },
  'DevOps': {
    title: 'Streamlining Development with DevOps Excellence',
    description:
      'Our DevOps practices bridge the gap between development and operations, creating a seamless pipeline for software delivery. By automating workflows, implementing continuous integration and delivery, and fostering collaboration, we help organizations release high-quality software faster and more reliably.',
    features: [
      { id: '01', title: 'CI/CD Pipeline Automation', icon: GitBranch, color: 'from-blue-500 to-indigo-500' },
      { id: '02', title: 'Infrastructure as Code', icon: Code2, color: 'from-purple-500 to-pink-500' },
      { id: '03', title: 'Monitoring & Observability', icon: BarChart, color: 'from-orange-500 to-red-500' },
      { id: '04', title: 'Container Orchestration', icon: Boxes, color: 'from-green-500 to-emerald-500' },
    ],
  },
  'CloudOps': {
    title: 'Enabling Seamless Operations with Precision and Agility',
    description:
      'Mastering cloud operations goes beyond routine management: it\'s about creating a strategic advantage. Our CloudOps services are crafted with a deep understanding of your unique operational challenges, focusing on delivering tailored solutions that balance agility, security, and efficiency.',
    features: [
      { id: '01', title: 'Cloud Infrastructure Management', icon: Cloud, color: 'from-blue-500 to-indigo-500' },
      { id: '02', title: 'Cloud Cost Management', icon: BarChart, color: 'from-purple-500 to-pink-500' },
      { id: '03', title: 'Cloud Monitoring & Performance', icon: Server, color: 'from-orange-500 to-red-500' },
      { id: '04', title: 'Cloud Automation & Orchestration', icon: Network, color: 'from-green-500 to-emerald-500' },
    ],
  },
  'Data Engineering': {
    title: 'Building Robust Data Foundations',
    description:
      'Our Data Engineering services transform raw data into valuable business insights. We design and implement scalable data pipelines, data lakes, and warehousing solutions that enable organizations to harness the full potential of their data assets.',
    features: [
      { id: '01', title: 'Data Pipeline Development', icon: Database, color: 'from-blue-500 to-indigo-500' },
      { id: '02', title: 'Data Warehousing', icon: Database, color: 'from-purple-500 to-pink-500' },
      { id: '03', title: 'Big Data Processing', icon: Server, color: 'from-orange-500 to-red-500' },
      { id: '04', title: 'Data Governance & Quality', icon: Shield, color: 'from-green-500 to-emerald-500' },
    ],
  },
  'Product Lifecycle': {
    title: 'Managing Products from Concept to Retirement',
    description:
      'Our Product Lifecycle Management services provide end-to-end support for your product journey. From initial concept and design to development, deployment, maintenance, and eventual retirement, we ensure each phase is optimized for success.',
    features: [
      { id: '01', title: 'Product Strategy & Roadmapping', icon: Rocket, color: 'from-blue-500 to-indigo-500' },
      { id: '02', title: 'Agile Development', icon: Code2, color: 'from-purple-500 to-pink-500' },
      { id: '03', title: 'Quality Assurance', icon: Shield, color: 'from-orange-500 to-red-500' },
      { id: '04', title: 'Product Analytics', icon: BarChart, color: 'from-green-500 to-emerald-500' },
    ],
  },
  'Enterprise App': {
    title: 'Building Powerful Enterprise Applications',
    description:
      'Our Enterprise Application services deliver custom, scalable solutions designed to address your organization\'s specific challenges. We develop robust, secure, and user-friendly applications that integrate seamlessly with your existing systems.',
    features: [
      { id: '01', title: 'Custom Application Development', icon: Code2, color: 'from-blue-500 to-indigo-500' },
      { id: '02', title: 'Legacy System Modernization', icon: Server, color: 'from-purple-500 to-pink-500' },
      { id: '03', title: 'Enterprise Integration', icon: Network, color: 'from-orange-500 to-red-500' },
      { id: '04', title: 'Mobile Enterprise Solutions', icon: Globe, color: 'from-green-500 to-emerald-500' },
    ],
  },
}


export default function Services() {
  const [activeTab, setActiveTab] = useState('Gen AI')
  const [isCompactView, setIsCompactView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='relative w-full max-w-[100vw] overflow-x-hidden py-32 px-4 bg-gradient-to-b from-[#1e2942] via-[#1a2436] to-[#0e1421] overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,48,0.05),transparent_50%)]' />
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]' />
      </div>

      <div className='container relative mx-auto max-w-7xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-20'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-lg shadow-[#ff3b30]/5'
          >
            <Sparkles className='w-4 h-4 text-[#ff3b30]' />
            <span className='text-white/90 text-sm font-medium tracking-wide'>Our Services</span>
          </motion.div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
            Crafted by Talent,{' '}
            <span className='bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient'>
              Perfected in Services
            </span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Leverage cutting-edge technologies to transform your business operations and drive innovation.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className='flex justify-center mb-12'>
          <div className='flex flex-row max-w-min justify-evenly gap-2 py-2 px-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 overflow-x-auto'>
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-orange-500 to-[#ff3b30] text-white shadow-lg shadow-[#ff3b30]/20'
                    : 'bg-transparent text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <p className='text-nowrap'>{tab}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className='grid lg:grid-cols-2 gap-12 items-center'
          >
            {/* Left: Text */}
            <div className='order-2 lg:order-1'>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='text-3xl md:text-4xl font-bold text-white mb-6'
              >
                {tabContent[activeTab].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='text-white/70 text-lg mb-8'
              >
                {tabContent[activeTab].description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='group relative px-8 py-4 rounded-full font-medium overflow-hidden transition-all duration-300 shadow-lg shadow-[#ff3b30]/10'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ff3b30] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute inset-0 bg-[#ff3b30] group-hover:bg-transparent transition-colors duration-300'></div>
                <Link href='/about'
                 className='relative text-white text-lg flex items-center gap-2'>
                  Learn More
                  <ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Link>
              </motion.button>
            </div>

            {/* Right: Feature Boxes */}
            <div className={`relative ${isCompactView ? '' : 'h-[600px]'}`}>
            <div className={`${isCompactView ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center' : ''}`}>

                {tabContent[activeTab].features.map((feature, index) => {
                  const pos = !isCompactView
                    ? {
                        position: 'absolute',
                        top:
                          index === 0 ? '5%' :
                          index === 1 ? '55%' :
                          index === 2 ? '25%' : '75%',
                        left: index === 0 || index === 1 ? '0%' : '55%',
                      }
                    : {}

                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className='group'
                      style={pos}
                    >
                      <div className='relative max-w-[250px] p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5 overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='relative flex items-center gap-4'>
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className='w-6 h-6 text-white' />
                          </div>
                          <div>
                            <p className='text-white font-medium'>{feature.title}</p>
                          </div>
                        </div>
                      </div>
                      {!isCompactView && (
                        <motion.div
                          className='absolute -top-8 -left-8 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {feature.id}
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
              {!isCompactView && (
                <svg className='absolute inset-0 w-full h-full z-20' viewBox='0 0 400 400'>
                  <path
                    d='M100,100 C150,50 250,50 300,100 C350,150 350,250 300,300 C250,350 150,350 100,300 C50,250 50,150 100,100'
                    fill='none'
                    stroke='rgba(255,255,255,0.1)'
                    strokeWidth='2'
                    strokeDasharray='5,5'
                  />
                </svg>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
