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
  Brain as BrainIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Bot,
  CircuitBoard,
  Cpu as CpuIcon,
  Layers
} from 'lucide-react';
import Link from 'next/link';

export default function DeepLearningDevelopmentPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden  flex items-center'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'
        >
          <Link 
            href='/ai-ml-solutions'
            className='inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group'
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
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl'></div>
              <BrainIcon className='w-24 h-24 text-blue-600 max-sm:h-20' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-blue-600 max-sm:text-3xl'
            >
              Deep Learning Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 max-sm:text-xl'
            >
              Advanced neural networks and deep learning solutions for complex AI challenges
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
          {/* Neural Networks */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white'>
                <Layers className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Neural Networks</h3>
            </div>
            <p className='text-gray-600'>
              Design and implement advanced neural network architectures for complex tasks.
            </p>
          </motion.div>

          {/* Deep Learning Models */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg text-white'>
                <CpuIcon className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Deep Learning Models</h3>
            </div>
            <p className='text-gray-600'>
              Develop sophisticated deep learning models for image, text, and audio processing.
            </p>
          </motion.div>

          {/* Model Optimization */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white'>
                <Zap className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Model Optimization</h3>
            </div>
            <p className='text-gray-600'>
              Optimize deep learning models for performance and efficiency.
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
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Why Choose Our Deep Learning Development?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Target className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Advanced Solutions</h3>
            <p className='text-gray-600'>State-of-the-art deep learning implementations.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-lg w-fit mb-4'>
              <LineChartIcon className='w-6 h-6 text-cyan-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>High Accuracy</h3>
            <p className='text-gray-600'>Precise and reliable model predictions.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Shield className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Data Security</h3>
            <p className='text-gray-600'>Secure handling of sensitive training data.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-lg w-fit mb-4'>
              <Zap className='w-6 h-6 text-cyan-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Performance</h3>
            <p className='text-gray-600'>Optimized for speed and efficiency.</p>
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
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Advanced Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Code2 className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Model Training</h3>
            <p className='text-gray-600'>Custom training on your specific datasets.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-lg w-fit mb-4'>
              <Lock className='w-6 h-6 text-cyan-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Data Protection</h3>
            <p className='text-gray-600'>Enterprise-grade data security measures.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Settings className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Easy Integration</h3>
            <p className='text-gray-600'>Seamless integration with your systems.</p>
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
        <div className='bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
          <div className='relative'>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Leverage Deep Learning?</h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Let&apos;s create powerful deep learning solutions that transform your business.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300'
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