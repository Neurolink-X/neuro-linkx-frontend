'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BrainCircuit, 
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
  CheckCircle2,
  Globe,
  Languages,
  Clock,
  Users2,
  Code2,
  Database,
  Workflow
} from 'lucide-react';
import Link from 'next/link';

export default function CustomAIDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden min-h-[80vh] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative"
        >
          <Link 
            href="/ai-ml-solutions"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 group"
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl"></div>
              <BrainCircuit className="w-24 h-24 text-purple-600" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-purple-600"
            >
              Custom AI Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Tailored AI solutions designed to meet your specific business needs and challenges
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
          {/* Custom AI Models */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Custom AI Models</h3>
            </div>
            <p className="text-gray-600">
              Develop specialized AI models tailored to your specific use cases and business requirements.
            </p>
          </motion.div>

          {/* Business Process Automation */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Process Automation</h3>
            </div>
            <p className="text-gray-600">
              Automate complex business processes with intelligent AI solutions for improved efficiency.
            </p>
          </motion.div>

          {/* AI Integration */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">AI Integration</h3>
            </div>
            <p className="text-gray-600">
              Seamlessly integrate AI capabilities into your existing systems and workflows.
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
        <h2 className="text-4xl font-bold text-[#1e2942] mb-12 text-center">Why Choose Our Custom AI Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Tailored Solutions</h3>
            <p className="text-gray-600">Custom AI solutions designed specifically for your business needs.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">High Performance</h3>
            <p className="text-gray-600">Optimized AI models delivering superior accuracy and speed.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Enterprise Security</h3>
            <p className="text-gray-600">Robust security measures protecting your sensitive data and AI models.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4">
              <LineChart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Scalable Architecture</h3>
            <p className="text-gray-600">Flexible solutions that grow with your business needs.</p>
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
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Code2 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Model Training</h3>
            <p className="text-gray-600">Custom training on your specific data and use cases.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4">
              <Database className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Data Processing</h3>
            <p className="text-gray-600">Advanced data processing and feature engineering capabilities.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Easy Integration</h3>
            <p className="text-gray-600">Seamless integration with your existing systems and workflows.</p>
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Custom AI Solution?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a tailored AI solution that transforms your business operations and drives growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
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