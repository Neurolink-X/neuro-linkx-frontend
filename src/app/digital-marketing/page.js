'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, 
  Facebook, 
  Instagram, 
  Search, 
  Target, 
  Users, 
  Globe, 
  LineChart,
  TrendingUp,
  Share2,
  Bell,
  Filter,
  Rocket,
  Sparkles,
  ArrowRight,
  BarChart,
  Users2,
  Calendar,
  Clock,
  Video,
  Check,
  X,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function DigitalMarketingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden min-h-[90vh] flex items-center'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent'></div>
        
        <motion.div
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'
        >
          <Link 
            href='/'
            className='inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 group'
          >
            <ArrowLeft className='w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300' />
            Back to Home
          </Link>
          
          <div className='text-center'>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className='inline-block mb-8 relative'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl'></div>
              <div className='relative'>
                <TrendingUp className='w-24 h-24 text-orange-600' />
                <div className='absolute -top-2 -right-2'>
                  <Sparkles className='w-8 h-8 text-yellow-400 animate-pulse' />
                </div>
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-7xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] via-orange-600 to-[#1e2942]'
            >
              Digital Marketing Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
            >
              Drive growth and engagement with our comprehensive digital marketing services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex justify-center gap-4'
            >
              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300 group'
              >
                Get Started
                <ArrowRight className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
              </Link>
              <Link
                href='#services'
                className='inline-flex items-center px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300'
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        id='services'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='text-center mb-16'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-4xl font-bold text-[#1e2942] mb-4'
          >
            Our Digital Marketing Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-xl text-gray-600 max-w-2xl mx-auto'
          >
            Comprehensive solutions to boost your online presence and drive results
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Meta Ads */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white'>
                  <Facebook className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-semibold text-[#1e2942]'>Meta Ads</h3>
              </div>
              <p className='text-gray-600 mb-6'>
                Reach your target audience on Facebook and Instagram with precision-targeted advertising campaigns.
              </p>
              <ul className='space-y-3'>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-blue-600'></div>
                  <span>Advanced Audience Targeting</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-blue-600'></div>
                  <span>Creative Ad Design</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-blue-600'></div>
                  <span>Performance Analytics</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Google Ads */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white'>
                  <Search className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-semibold text-[#1e2942]'>Google Ads</h3>
              </div>
              <p className='text-gray-600 mb-6'>
                Maximize your visibility on Google with strategic paid search campaigns.
              </p>
              <ul className='space-y-3'>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-red-600'></div>
                  <span>Keyword Research</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-red-600'></div>
                  <span>Ad Copy Optimization</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-red-600'></div>
                  <span>ROI Tracking</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Instagram Ads */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='p-2 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg text-white'>
                  <Instagram className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-semibold text-[#1e2942]'>Instagram Ads</h3>
              </div>
              <p className='text-gray-600 mb-6'>
                Engage your audience with visually stunning Instagram advertising campaigns.
              </p>
              <ul className='space-y-3'>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-pink-600'></div>
                  <span>Visual Content Creation</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-pink-600'></div>
                  <span>Story & Reel Ads</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-pink-600'></div>
                  <span>Engagement Analytics</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* SEO */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white'>
                  <Search className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-semibold text-[#1e2942]'>SEO</h3>
              </div>
              <p className='text-gray-600 mb-6'>
                Improve your website &apos;s visibility and rankings with our comprehensive SEO services.
              </p>
              <ul className='space-y-3'>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-green-600'></div>
                  <span>Technical SEO</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-green-600'></div>
                  <span>Content Optimization</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-600'>
                  <div className='w-1.5 h-1.5 rounded-full bg-green-600'></div>
                  <span>Keyword Research</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='text-center mb-16'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-4xl font-bold text-[#1e2942] mb-4'
          >
            Why Choose Our Digital Marketing Services?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-xl text-gray-600 max-w-2xl mx-auto'
          >
            Experience the difference with our comprehensive digital marketing solutions
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
                <Target className='w-6 h-6 text-orange-600' />
              </div>
              <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Precision Targeting</h3>
              <p className='text-gray-600'>Reach your ideal audience with advanced targeting.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
                <Users className='w-6 h-6 text-orange-600' />
              </div>
              <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Audience Growth</h3>
              <p className='text-gray-600'>Expand your reach and build your audience.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
                <Globe className='w-6 h-6 text-orange-600' />
              </div>
              <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Global Reach</h3>
              <p className='text-gray-600'>Connect with customers worldwide.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
                <LineChart className='w-6 h-6 text-orange-600' />
              </div>
              <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Measurable Results</h3>
              <p className='text-gray-600'>Track and optimize campaign performance.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='text-center mb-16'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-4xl font-bold text-[#1e2942] mb-4'
          >
            Advanced Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-xl text-gray-600 max-w-2xl mx-auto'
          >
            Powerful tools to enhance your digital marketing campaigns
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
                <Share2 className='w-6 h-6 text-orange-600' />
              </div>
              <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Social Media Integration</h3>
              <p className='text-gray-600'>Seamless integration across all social platforms.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
                <Bell className='w-6 h-6 text-orange-600' />
              </div>
              <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Real-time Monitoring</h3>
              <p className='text-gray-600'>Track campaign performance in real-time.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative'>
              <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
                <Filter className='w-6 h-6 text-orange-600' />
              </div>
              <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Advanced Analytics</h3>
              <p className='text-gray-600'>Comprehensive data analysis and insights.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent'></div>
          <div className='relative'>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className='inline-block mb-8'
            >
              <Rocket className='w-16 h-16 text-white' />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-4xl font-bold text-white mb-6'
            >
              Ready to Grow Your Digital Presence?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'
            >
              Let &apos;s create powerful digital marketing campaigns that drive results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 group'
              >
                Get Started
                <ArrowRight className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 