'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Brain,
  Network,
  Shield,
  Zap,
  BarChart2,
  Settings,
  Lock,
  GitBranch,
  Sparkles,
  Target,
  LineChart,
  BrainCircuit,
  CheckCircle2,
  Globe,
  Languages,
  Clock,
  Users2,
  Code2,
  Database,
  Workflow,
  LineChart as LineChartIcon,
  Lightbulb,
  Briefcase,
  Presentation,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function AIConsultancyServicesPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden min-h-[80vh] flex items-center'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'
        >
          <Link 
            href='/ai-ml-solutions'
            className='inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 group'
          >
            <ArrowLeft className='w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300' />
            Back to Services
          </Link>
          
          <div className='text-center'>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className='inline-block mb-8 relative'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl'></div>
              <Lightbulb className='w-24 h-24 text-orange-600' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-orange-600'
            >
              AI Consultancy Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
            >
              Expert guidance to help you navigate the AI landscape and implement effective solutions
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Strategy Development */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg text-white'>
                <Briefcase className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Strategy Development</h3>
            </div>
            <p className='text-gray-600'>
              Comprehensive AI strategy aligned with your business goals and objectives.
            </p>
          </motion.div>

          {/* Technology Assessment */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white'>
                <Presentation className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Technology Assessment</h3>
            </div>
            <p className='text-gray-600'>
              Evaluation of AI technologies and solutions best suited for your needs.
            </p>
          </motion.div>

          {/* Implementation Guidance */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg text-white'>
                <Users className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Implementation Guidance</h3>
            </div>
            <p className='text-gray-600'>
              Expert support throughout your AI implementation journey.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Why Choose Our AI Consultancy?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
              <Target className='w-6 h-6 text-orange-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Expert Guidance</h3>
            <p className='text-gray-600'>Professional advice from experienced AI consultants.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-lg w-fit mb-4'>
              <LineChartIcon className='w-6 h-6 text-red-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>ROI Focus</h3>
            <p className='text-gray-600'>Strategies focused on maximizing return on investment.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-lg w-fit mb-4'>
              <Shield className='w-6 h-6 text-yellow-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Risk Management</h3>
            <p className='text-gray-600'>Comprehensive risk assessment and mitigation strategies.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
              <Zap className='w-6 h-6 text-orange-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Innovation</h3>
            <p className='text-gray-600'>Access to cutting-edge AI technologies and solutions.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Our Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
              <Code2 className='w-6 h-6 text-orange-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>AI Strategy</h3>
            <p className='text-gray-600'>Custom AI roadmap development for your business.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-lg w-fit mb-4'>
              <Lock className='w-6 h-6 text-red-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Risk Assessment</h3>
            <p className='text-gray-600'>Comprehensive evaluation of AI implementation risks.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-lg w-fit mb-4'>
              <Settings className='w-6 h-6 text-yellow-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Implementation Support</h3>
            <p className='text-gray-600'>Expert guidance throughout your AI journey.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
          <div className='relative'>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Transform Your Business with AI?</h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Let&apos;s develop a comprehensive AI strategy that drives your business forward.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300'
            >
              Get Started
              <ArrowLeft className='w-5 h-5 ml-2 transform rotate-180' />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 