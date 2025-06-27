'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Cloud, GitBranch, Server, Shield, Zap, BarChart2, Settings, Lock, Cpu, Database, Network, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function DataBackupPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/*Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden flex items-center'
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
            href='/cloud-consultation'
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
              <Database className='w-24 h-24 text-indigo-600 animate-float max-sm:h-20 max-sm:w-20' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-indigo-600 max-sm:text-3xl'
            >
              Data Backup
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 max-sm:text-xl'
            >
              Secure and automated data backup solutions
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
          {/* Secure Data Backup Solutions*/}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white'>
                <GitBranch className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Secure Data Backup Solutions</h3>
            </div>
            <p className='text-gray-600'>
              Protect your critical business data with automated, encrypted, and reliable backup services.
            </p>
          </motion.div>

          {/* Automated Backup Services */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white'>
                <Server className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Automated Backup Services</h3>
            </div>
            <p className='text-gray-600'>
              Ensure continuous protection with scheduled and real-time data backups across all environments.
            </p>
          </motion.div>

          {/* Disaster Recovery Ready */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white'>
                <Shield className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942]'>Disaster Recovery Ready</h3>
            </div>
            <p className='text-gray-600'>
              Quickly recover lost or corrupted data and resume operations without major disruption.
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
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Why Choose Our  Data Backup Services?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4'>
              <Zap className='w-6 h-6 text-indigo-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Reliable & Consistent Backups</h3>
            <p className='text-gray-600'>Automated and routine backups to safeguard your files, databases, and applications.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4'>
              <BarChart2 className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Encrypted & Secure Storage</h3>
            <p className='text-gray-600'>End-to-end encryption and compliance with data security standards ensure full protection.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Settings className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Multi-Environment Support</h3>
            <p className='text-gray-600'>Support for databases, file systems, virtual machines, and cloud-native storage.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4'>
              <Lock className='w-6 h-6 text-indigo-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Fast Recovery & Restore</h3>
            <p className='text-gray-600'>Rapid data restoration to minimize downtime and maintain business continuity.</p>
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
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Versioning & Retention Policies</h3>
            <p className='text-gray-600'>Access multiple versions of your data with flexible retention management.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4'>
              <Network className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Cloud & Hybrid Backup Options</h3>
            <p className='text-gray-600'>Backup to cloud storage, local servers, or hybrid models to suit your infrastructure.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4'>
              <Wrench className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Monitoring & Alerts</h3>
            <p className='text-gray-600'>Get real-time alerts and detailed backup reports for complete transparency.</p>
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
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Safeguard Your Data?</h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
             Ensure business continuity with secure and scalable data backup solutions.
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