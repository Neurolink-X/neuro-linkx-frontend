'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Layers, Code, Server, Database, Shield, Zap, GitBranch, Lock, Settings, Globe, Cpu, BarChart2, Network } from 'lucide-react';
import Link from 'next/link';

export default function FullStackSolutionsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden min-h-[60vh] flex items-center'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 animate-gradient-x'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'
        >
          <Link 
            href='/web-development'
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
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-2xl animate-pulse'></div>
              <Layers className='w-24 h-24 text-blue-600 animate-float' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-blue-600 max-sm:text-4xl'
            >
              Full Stack Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
            >
              End-to-end web development solutions for your business
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
          {/* Front-End Development */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white'>
                <Code className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Front-End Development</h3>
            </div>
            <p className='text-gray-600'>
              Modern, responsive, and user-friendly interfaces built with the latest technologies.
            </p>
          </motion.div>

          {/* Back-End Development */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white'>
                <Server className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Back-End Development</h3>
            </div>
            <p className='text-gray-600'>
              Scalable server-side solutions with robust architecture and security.
            </p>
          </motion.div>

          {/* Database Management */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white'>
                <Database className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Database Management</h3>
            </div>
            <p className='text-gray-600'>
              Efficient data storage, management, and optimization solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Why Choose Our Full Stack Solutions?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Zap className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Seamless Integration</h3>
            <p className='text-gray-600'>Perfect harmony between front-end and back-end.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4'>
              <Shield className='w-6 h-6 text-green-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>End-to-End Security</h3>
            <p className='text-gray-600'>Comprehensive security measures throughout.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4'>
              <Settings className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Easy Maintenance</h3>
            <p className='text-gray-600'>Streamlined maintenance and updates.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <BarChart2 className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Performance Analytics</h3>
            <p className='text-gray-600'>Comprehensive performance monitoring.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Additional Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Network className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Microservices</h3>
            <p className='text-gray-600'>Scalable microservices architecture.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4'>
              <Lock className='w-6 h-6 text-green-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Security</h3>
            <p className='text-gray-600'>Advanced security features and protocols.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4'>
              <Cpu className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Cloud Integration</h3>
            <p className='text-gray-600'>Seamless cloud service integration.</p>
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
        <div className='bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
          <div className='relative'>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Build Your Full Stack Solution?</h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Let &apos;s create a complete web solution that drives your business forward.
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