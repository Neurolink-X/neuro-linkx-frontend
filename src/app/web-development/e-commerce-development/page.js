'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, CreditCard, Package, ShoppingBag, Shield, Zap, Users, BarChart2, Globe, Lock, Settings } from 'lucide-react';
import Link from 'next/link';

export default function ECommerceDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden min-h-[60vh] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative"
        >
          <Link 
            href="/web-development"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 group"
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <ShoppingCart className="w-24 h-24 text-green-600 animate-float" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-green-600"
            >
              E-Commerce Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Build powerful online stores and shopping experiences
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
          {/* Payment Integration */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Payment Integration</h3>
            </div>
            <p className="text-gray-600">
              Seamless integration with multiple payment gateways, supporting various payment methods and currencies.
            </p>
          </motion.div>

          {/* Inventory Management */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Inventory Management</h3>
            </div>
            <p className="text-gray-600">
              Real-time inventory tracking, stock management, and automated reordering systems.
            </p>
          </motion.div>

          {/* Order Processing */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Order Processing</h3>
            </div>
            <p className="text-gray-600">
              Automated order processing, shipping integration, and order status tracking.
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
        <h2 className="text-4xl font-bold text-[#1e2942] mb-12 text-center">Why Choose Our E-Commerce Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Secure Transactions</h3>
            <p className="text-gray-600">SSL encryption and secure payment processing.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Fast Performance</h3>
            <p className="text-gray-600">Optimized for speed and smooth shopping experience.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Customer Management</h3>
            <p className="text-gray-600">Customer profiles, order history, and loyalty programs.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4">
              <BarChart2 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Analytics & Reporting</h3>
            <p className="text-gray-600">Detailed sales analytics and business insights.</p>
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
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Multi-language Support</h3>
            <p className="text-gray-600">Support for multiple languages and currencies.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Advanced Security</h3>
            <p className="text-gray-600">Fraud detection and prevention systems.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Easy Management</h3>
            <p className="text-gray-600">User-friendly admin dashboard for store management.</p>
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
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Online Store?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create an e-commerce platform that drives sales and grows your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
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