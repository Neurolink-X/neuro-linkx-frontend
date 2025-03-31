'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Layout, Code, Smartphone, Tablet, Globe, Zap, Users, BarChart2, Settings, Lock, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function FrontEndDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden min-h-[60vh] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative"
        >
          <Link 
            href="/web-development"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Services
          </Link>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="inline-block mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
              <Monitor className="w-24 h-24 text-indigo-600 animate-float" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-indigo-600"
            >
              Front-End Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Create beautiful, responsive, and user-friendly web interfaces
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Responsive Design */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Responsive Design</h3>
            </div>
            <p className="text-gray-600">
              Mobile-first approach ensuring perfect display across all devices and screen sizes.
            </p>
          </motion.div>

          {/* Modern UI/UX */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Modern UI/UX</h3>
            </div>
            <p className="text-gray-600">
              Cutting-edge design patterns and user experience best practices.
            </p>
          </motion.div>

          {/* Cross-browser Compatibility */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Cross-browser Compatibility</h3>
            </div>
            <p className="text-gray-600">
              Consistent performance and appearance across all major browsers.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <h2 className="text-4xl font-bold text-[#1e2942] mb-12 text-center">Why Choose Our Front-End Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Fast Performance</h3>
            <p className="text-gray-600">Optimized for speed and smooth interactions.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">User-Friendly</h3>
            <p className="text-gray-600">Intuitive and accessible interfaces.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Easy Maintenance</h3>
            <p className="text-gray-600">Clean, maintainable code structure.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4">
              <BarChart2 className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">SEO Optimized</h3>
            <p className="text-gray-600">Search engine friendly structure.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <h2 className="text-4xl font-bold text-[#1e2942] mb-12 text-center">Additional Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4">
              <Smartphone className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Mobile-First</h3>
            <p className="text-gray-600">Optimized for mobile devices and tablets.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Secure</h3>
            <p className="text-gray-600">Built with security best practices.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Progressive Web Apps</h3>
            <p className="text-gray-600">Support for modern PWA features.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Front-End?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create stunning web interfaces that engage your users and drive results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
              <ArrowLeft className="w-5 h-5 ml-2 transform rotate-180" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 