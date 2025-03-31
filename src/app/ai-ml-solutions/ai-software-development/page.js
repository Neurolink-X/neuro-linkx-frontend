'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Code, 
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
  Database,
  Cpu,
  BarChart
} from 'lucide-react';
import Link from 'next/link';

export default function AISoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden min-h-[60vh] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative"
        >
          <Link 
            href="/ai-ml-solutions"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8 group"
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
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
              <Code className="w-24 h-24 text-yellow-600 animate-float" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-yellow-600"
            >
              AI Software Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Create AI-powered software solutions for various industries
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
          {/* AI Integration */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg text-white">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">AI Integration</h3>
            </div>
            <p className="text-gray-600">
              Seamless integration of AI capabilities into software systems.
            </p>
          </motion.div>

          {/* API Development */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg text-white">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">API Development</h3>
            </div>
            <p className="text-gray-600">
              Robust APIs for AI-powered services and applications.
            </p>
          </motion.div>

          {/* System Architecture */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">System Architecture</h3>
            </div>
            <p className="text-gray-600">
              Scalable and efficient AI system architecture design.
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
        <h2 className="text-4xl font-bold text-[#1e2942] mb-12 text-center">Why Choose Our AI Software Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-lg w-fit mb-4">
              <Target className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Custom Solutions</h3>
            <p className="text-gray-600">Tailored AI software for your needs.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4">
              <BarChart className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Performance</h3>
            <p className="text-gray-600">Optimized for speed and efficiency.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-lg w-fit mb-4">
              <LineChart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Scalability</h3>
            <p className="text-gray-600">Built to grow with your business.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-lg w-fit mb-4">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Security</h3>
            <p className="text-gray-600">Enterprise-grade security features.</p>
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
            <div className="p-3 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-lg w-fit mb-4">
              <GitBranch className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Version Control</h3>
            <p className="text-gray-600">Advanced version control for AI models.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4">
              <Lock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Data Protection</h3>
            <p className="text-gray-600">Secure handling of sensitive data.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-lg w-fit mb-4">
              <Settings className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Easy Integration</h3>
            <p className="text-gray-600">Seamless integration with existing systems.</p>
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
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build AI-Powered Software?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create innovative software solutions that leverage AI technology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
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