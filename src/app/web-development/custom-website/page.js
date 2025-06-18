'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Layout, Palette, Search, Shield, Zap, BarChart2, Settings, Lock, Cpu, Database, Network, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function CustomWebsitePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden min-h-[60vh] flex items-center'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-gradient-x'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'
        >
          <Link 
            href='/web-development'
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
              <Layout className='w-24 h-24 text-indigo-600 animate-float' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-indigo-600 max-sm:text-4xl'
            >
              Custom Website Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
            >
              Create unique, brand-aligned websites that stand out
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
          {/* Brand-aligned Design */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white'>
                <Palette className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Brand-aligned Design</h3>
            </div>
            <p className='text-gray-600'>
              Custom designs that perfectly match your brand identity and values.
            </p>
          </motion.div>

          {/* Responsive Layouts */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white'>
                <Layout className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Responsive Layouts</h3>
            </div>
            <p className='text-gray-600'>
              Perfect viewing experience across all devices and screen sizes.
            </p>
          </motion.div>

          {/* SEO Optimization */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white'>
                <Search className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>SEO Optimization</h3>
            </div>
            <p className='text-gray-600'>
              Built with search engine optimization best practices.
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
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Why Choose Our Custom Website Development?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4'>
              <Shield className='w-6 h-6 text-indigo-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Secure & Reliable</h3>
            <p className='text-gray-600'>Built with security best practices.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4'>
              <Zap className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Fast Performance</h3>
            <p className='text-gray-600'>Optimized for speed and efficiency.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Settings className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>User-Friendly</h3>
            <p className='text-gray-600'>Intuitive navigation and interface.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4'>
              <BarChart2 className='w-6 h-6 text-indigo-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Analytics Ready</h3>
            <p className='text-gray-600'>Track and analyze user behavior.</p>
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
            <div className='p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4'>
              <Database className='w-6 h-6 text-indigo-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Content Management</h3>
            <p className='text-gray-600'>Easy content updates and management.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4'>
              <Network className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Social Integration</h3>
            <p className='text-gray-600'>Connect with social media platforms.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Wrench className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Custom Features</h3>
            <p className='text-gray-600'>Tailored functionality for your needs.</p>
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
        <div className='bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
          <div className='relative'>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Create Your Custom Website?</h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Let &apos;s build a unique website that perfectly represents your brand.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300'
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