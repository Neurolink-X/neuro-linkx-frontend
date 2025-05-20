'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
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
  TrendingUp,
  PieChart,
  Cpu
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function PredictiveAnalyticsSolutionsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden min-h-[80vh] flex items-center'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-gradient-x'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        
        <motion.div
          style={{ opacity, scale }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'
        >
          <Link 
            href='/ai-ml-solutions'
            className='inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 group'
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
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse'></div>
              <BarChart2 className='w-24 h-24 text-indigo-600 animate-float' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-indigo-600'
            >
              Predictive Analytics Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
            >
              Transform your data into actionable insights with advanced predictive analytics
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Data Analysis */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300'>
                <BrainCircuit className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Advanced Data Analysis</h3>
            </div>
            <p className='text-gray-600'>
              Deep analysis of historical data to identify patterns and trends.
            </p>
          </motion.div>

          {/* Predictive Modeling */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300'>
                <TrendingUp className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Predictive Modeling</h3>
            </div>
            <p className='text-gray-600'>
              Build accurate models to forecast future outcomes and trends.
            </p>
          </motion.div>

          {/* Business Intelligence */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300'>
                <PieChart className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Business Intelligence</h3>
            </div>
            <p className='text-gray-600'>
              Transform complex data into actionable business insights.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section with Animated Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Why Choose Our Predictive Analytics?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300'>
              <Target className='w-6 h-6 text-indigo-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Accurate Predictions</h3>
            <p className='text-gray-600'>High-precision forecasting models.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300'>
              <Zap className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Real-time Insights</h3>
            <p className='text-gray-600'>Instant access to predictive data.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300'>
              <Globe className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Global Scale</h3>
            <p className='text-gray-600'>Analyze data from multiple sources.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300'>
              <Shield className='w-6 h-6 text-indigo-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Data Security</h3>
            <p className='text-gray-600'>Enterprise-grade data protection.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid with Hover Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Advanced Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300'>
              <Cpu className='w-6 h-6 text-indigo-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Machine Learning</h3>
            <p className='text-gray-600'>Advanced ML algorithms for predictions.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300'>
              <Network className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>API Integration</h3>
            <p className='text-gray-600'>Connect with your existing systems.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300'>
              <Settings className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Custom Dashboards</h3>
            <p className='text-gray-600'>Tailored visualization solutions.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden group'>
          <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
          <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          <div className='relative'>
            <motion.h2 
              className='text-4xl font-bold text-white mb-6'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Ready to Transform Your Data?
            </motion.h2>
            <motion.p 
              className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Let &apos;s create powerful predictive analytics solutions that drive your business forward.
            </motion.p>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 group'
            >
              Get Started
              <ArrowLeft className='w-5 h-5 ml-2 transform rotate-180 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 