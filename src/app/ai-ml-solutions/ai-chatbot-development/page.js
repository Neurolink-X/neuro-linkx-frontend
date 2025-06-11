'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MessageSquare, 
  Cpu, 
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
  Users2
} from 'lucide-react';
import Link from 'next/link';

export default function AIChatbotDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative"
        >
          <Link 
            href="/ai-ml-solutions"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Services
          </Link>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="inline-block mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
              <MessageSquare className="w-24 h-24 text-green-600 max-sm:h-20" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-green-600 max-sm:text-3xl"
            >
              AI Chatbot Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 max-sm:text-xl"
            >
              Transform your customer service with intelligent conversational AI
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
          {/* Natural Language Processing */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Natural Language Processing</h3>
            </div>
            <p className="text-gray-600">
              Advanced NLP capabilities for understanding and processing human language with high accuracy and context awareness.
            </p>
          </motion.div>

          {/* Multi-language Support */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Multi-language Support</h3>
            </div>
            <p className="text-gray-600">
              Seamless support for multiple languages and regional variations, ensuring global accessibility.
            </p>
          </motion.div>

          {/* Context Awareness */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Context Awareness</h3>
            </div>
            <p className="text-gray-600">
              Maintains conversation context for more natural and meaningful interactions.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <h2 className="text-4xl font-bold text-[#1e2942] mb-12 text-center">Why Choose Our AI Chatbot Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Always available to assist your customers, reducing response times and improving satisfaction.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Languages className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Multi-language</h3>
            <p className="text-gray-600">Support for multiple languages and dialects, expanding your global reach.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <LineChart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Analytics</h3>
            <p className="text-gray-600">Comprehensive insights into customer interactions and behavior patterns.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4">
              <Users2 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">Enhanced customer experience leading to increased satisfaction and loyalty.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <h2 className="text-4xl font-bold text-[#1e2942] mb-12 text-center">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4">
              <GitBranch className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Custom Training</h3>
            <p className="text-gray-600">Tailored training on your specific domain knowledge and business processes.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Data Security</h3>
            <p className="text-gray-600">Enterprise-grade security ensuring the protection of sensitive information.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Easy Integration</h3>
            <p className="text-gray-600">Seamless integration with your existing platforms and workflows.</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Service?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s create an intelligent chatbot that delivers exceptional customer experiences and drives business growth.
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