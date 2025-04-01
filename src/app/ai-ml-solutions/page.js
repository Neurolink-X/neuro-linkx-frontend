'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Brain, 
  Gamepad2, 
  MessageSquare, 
  Cpu, 
  Code, 
  BarChart2, 
  Network, 
  Target, 
  Zap, 
  Shield, 
  Database, 
  LineChart, 
  BrainCircuit,
  Sparkles,
  Settings,
  Lock,
  GitBranch,
  CheckCircle2,
  Globe,
  Languages,
  Clock,
  Users2
} from 'lucide-react';

export default function AIMLSolutionsPage() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Custom AI Development',
      description: 'Tailored AI solutions designed for your specific business needs',
      icon: Brain,
      features: ['Custom AI Models', 'Business Process Automation', 'AI Integration'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 2,
      title: 'AI Game Development',
      description: 'Create immersive gaming experiences with AI-powered features',
      icon: Gamepad2,
      features: ['NPC Behavior', 'Procedural Generation', 'Game AI Systems'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'AI Chatbot Development',
      description: 'Build intelligent conversational agents for customer service',
      icon: MessageSquare,
      features: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'Custom Machine Learning Development',
      description: 'Develop and deploy custom ML models for your data',
      icon: Cpu,
      features: ['Model Training', 'Data Preprocessing', 'Model Deployment'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 5,
      title: 'AI Software Development',
      description: 'Create AI-powered software solutions for various industries',
      icon: Code,
      features: ['AI Integration', 'API Development', 'System Architecture'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 6,
      title: 'Predictive Analytics Solutions',
      description: 'Leverage data to make informed business decisions',
      icon: BarChart2,
      features: ['Data Analysis', 'Trend Prediction', 'Business Intelligence'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 7,
      title: 'Deep Learning Development',
      description: 'Implement advanced deep learning solutions',
      icon: Network,
      features: ['Neural Networks', 'Computer Vision', 'Natural Language Processing'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 8,
      title: 'AI Consultancy Services',
      description: 'Expert guidance for AI implementation and strategy',
      icon: BrainCircuit,
      features: ['Strategy Planning', 'Technology Selection', 'Implementation Support'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden min-h-screen flex items-center'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-gradient-x'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'
        >
          <div className='text-center'>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className='inline-block mb-8 relative'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse'></div>
              <Brain className='w-24 h-24 text-purple-600 animate-float' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-purple-600'
            >
              AI & ML Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
            >
              Transform your business with cutting-edge artificial intelligence and machine learning
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setActiveService(service.id)}
              onHoverEnd={() => setActiveService(null)}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
            >
              <div className='flex items-center space-x-3 mb-6'>
                <div className={`p-2 bg-gradient-to-br ${service.color} rounded-lg text-white`}>
                  <service.icon className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-semibold text-[#1e2942]'>{service.title}</h3>
              </div>
              <p className='text-gray-600 mb-6'>{service.description}</p>
              <ul className='space-y-3'>
                {service.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center space-x-2 text-gray-600'>
                    <div className='w-1.5 h-1.5 rounded-full bg-purple-600'></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/ai-ml-solutions/${service.title === 'Custom Machine Learning Development' ? 'custom-machine-learning' : service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className='mt-6 flex items-center text-purple-600 hover:text-purple-700 font-medium group'
              >
                <span>Learn more</span>
                <ArrowRight className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 