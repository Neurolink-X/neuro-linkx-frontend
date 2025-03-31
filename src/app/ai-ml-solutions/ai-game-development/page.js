'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Gamepad2, 
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
  Users,
  Trophy,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function AIGameDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden min-h-[60vh] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative"
        >
          <Link 
            href="/ai-ml-solutions"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
              <Gamepad2 className="w-24 h-24 text-blue-600 animate-float" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-blue-600"
            >
              AI Game Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Create immersive gaming experiences with AI-powered features
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
          {/* NPC Behavior */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">NPC Behavior</h3>
            </div>
            <p className="text-gray-600">
              Create intelligent non-player characters with realistic behaviors and decision-making.
            </p>
          </motion.div>

          {/* Procedural Generation */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Procedural Generation</h3>
            </div>
            <p className="text-gray-600">
              Generate unique game content dynamically using AI algorithms.
            </p>
          </motion.div>

          {/* Game AI Systems */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2942]">Game AI Systems</h3>
            </div>
            <p className="text-gray-600">
              Implement advanced AI systems for game mechanics and player interactions.
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
        <h2 className="text-4xl font-bold text-[#1e2942] mb-12 text-center">Why Choose Our AI Game Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Enhanced Gameplay</h3>
            <p className="text-gray-600">Create more engaging and dynamic gaming experiences.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Unique Content</h3>
            <p className="text-gray-600">Generate endless variations of game content.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4">
              <LineChart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Performance Optimization</h3>
            <p className="text-gray-600">Efficient AI systems that run smoothly.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Player Engagement</h3>
            <p className="text-gray-600">Keep players engaged with intelligent features.</p>
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
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4">
              <GitBranch className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">AI Training</h3>
            <p className="text-gray-600">Custom AI models trained for your game.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Anti-Cheat Systems</h3>
            <p className="text-gray-600">AI-powered security and anti-cheat solutions.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4">
              <Settings className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e2942] mb-2">Easy Integration</h3>
            <p className="text-gray-600">Seamless integration with game engines.</p>
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your AI-Powered Game?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's bring your game ideas to life with cutting-edge AI technology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
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