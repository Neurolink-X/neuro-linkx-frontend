'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cloud, Server, Shield, Database, Calendar, Clock, Video, Check, X, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

function getServicePath(title) {
  const paths = {
    'Cloud Hosting': 'cloud-hosting',
    'Server Management': 'server-management',
    'Data Backup': 'data-backup',
    'Cloud Security': 'cloud-security'
  };
  return paths[title] || title.toLowerCase().replace(/\s+/g, '-');
}
export default function CloudConsultationPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
   const [activeService, setActiveService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showScheduler, setShowScheduler] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Here you can add your form submission logic
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });

    // Close modal after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setShowScheduler(false);
    }, 3000);
  };

  const services = [
    {
      icon: <Cloud className='w-8 h-8' />,
      title: 'Cloud Hosting',
      description: 'Scalable and reliable cloud hosting solutions for your applications'
    },
    {
      icon: <Server className='w-8 h-8' />,
      title: 'Server Management',
      description: 'Professional server management and maintenance services'
    },
    {
      icon: <Database className='w-8 h-8' />,
      title: 'Data Backup',
      description: 'Secure and automated data backup solutions'
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security and compliance services'
    }
  ];

  const consultationTypes = [
    {
      title: '30-Min Discovery Call',
      description: 'Quick consultation to understand your cloud needs',
      duration: '30 minutes',
      price: 'Free'
    },
    {
      title: '1-Hour Strategy Session',
      description: 'Detailed discussion about your cloud infrastructure',
      duration: '1 hour',
      price: '$99'
    },
    {
      title: '2-Hour Deep Dive',
      description: 'Comprehensive analysis and planning session',
      duration: '2 hours',
      price: '$199'
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden flex items-center'
        style={{ opacity, scale }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient-x'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white'></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative'
        >
          <div className='text-center'>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className='inline-block mb-6 relative'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#ff3b30]/20 to-orange-500/20 rounded-full blur-2xl animate-pulse'></div>
              <Cloud className='w-16 h-16 text-[#ff3b30] animate-float' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}

              className='text-5xl font-bold text-[#1e2942] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-[#ff3b30] max-sm:text-4xl'

            >
              Cloud Services Consultation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}

              className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed '

            >
              Get expert guidance on cloud solutions, server management, and security for your business
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='mt-8'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowScheduler(true)}
                className='bg-gradient-to-r from-[#ff3b30] to-orange-500 text-white px-8 py-4 rounded-full font-medium flex items-center space-x-2 hover:from-[#ff3b30]/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg shadow-[#ff3b30]/20 hover:shadow-xl hover:shadow-[#ff3b30]/30 mx-auto max-sm:px-4'
              >
                <Calendar className='w-5 h-5' />
                <span>Schedule Free Consultation</span>
                <ChevronRight className='w-5 h-5' />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Section with Enhanced Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative'
      >
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent'></div>
        <h2 className='text-3xl font-bold text-[#1e2942] mb-12 text-center relative'>
          Our Cloud Services
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#ff3b30] to-orange-500 rounded-full'
          />
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-[#ff3b30]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative mb-6'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#ff3b30]/20 to-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                <div className='relative text-[#ff3b30] transform group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>
              </div>
              <h3 className='text-xl font-semibold text-[#1e2942] mb-3'>{service.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{service.description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='mt-4 flex items-center text-[#ff3b30] group-hover:translate-x-2 transition-transform duration-300'
              >
                <Link href={`/cloud-consultation/${getServicePath(service.title)}`}
                className='text-sm font-medium'>Learn more</Link>
                <ChevronRight className='w-4 h-4 ml-1' />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Consultation Types with Enhanced Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-gray-50 rounded-3xl relative overflow-hidden mb-32'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-[#ff3b30]/5 to-orange-500/5'></div>
        <div className='text-center mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e2942] mb-12 text-center relative'>
            Consultation Options
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff3b30] to-orange-500 rounded-full'
            />
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Choose the consultation package that best fits your needs
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {consultationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-[#ff3b30]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-lg sm:text-xl font-semibold text-[#1e2942]'>{type.title}</h3>
                  <span className='text-[#ff3b30] font-semibold'>{type.price}</span>
                </div>
                <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>{type.description}</p>
                <div className='flex items-center text-gray-500 mb-6'>
                  <Clock className='w-4 h-4 mr-2' />
                  <span>{type.duration}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowScheduler(true)}
                  className='w-full bg-gradient-to-r from-[#ff3b30] to-orange-500 text-white py-3 rounded-xl hover:from-[#ff3b30]/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg shadow-[#ff3b30]/20 hover:shadow-xl hover:shadow-[#ff3b30]/30 flex items-center justify-center space-x-2'
                >
                  <Calendar className='w-5 h-5' />
                  <span>Schedule Consultation</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA Section with Enhanced Design */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}

        className='fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t shadow-lg py-4 z-50 max-sm:py-2'

      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4 max-sm:gap-3'>
            <div className='flex items-center space-x-2'>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Check className='w-5 h-5 text-green-500' />
              </motion.div>
              <span className='text-gray-600'>Free 30-minute consultation available</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowScheduler(true)}

              className='bg-gradient-to-r from-[#ff3b30] to-orange-500 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:from-[#ff3b30]/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg shadow-[#ff3b30]/20 hover:shadow-xl hover:shadow-[#ff3b30]/30 max-sm:px-2'

            >
              <Calendar className='w-5 h-5' />
<span className='text-sm sm:text-base'>Schedule Free Consultation</span>

              <ArrowRight className='w-5 h-5' />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Modal Design */}
      <AnimatePresence>
        {showScheduler && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className='bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-[#ff3b30]/5 to-orange-500/5'></div>
              <button
                onClick={() => setShowScheduler(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200'
              >
                <X className='w-6 h-6' />
              </button>

              <AnimatePresence>
                {showSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className='text-center py-12'
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                      className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'
                    >
                      <Check className='w-10 h-10 text-green-500' />
                    </motion.div>
                    <h2 className='text-2xl font-bold text-[#1e2942] mb-3'>Thank You!</h2>
                    <p className='text-gray-600 mb-4'>Your consultation request has been received.</p>
                    <p className='text-sm text-gray-500'>
                      We &apos;ll send you a confirmation email shortly with the next steps.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className='text-center mb-8'>
                      <h2 className='text-2xl font-bold text-[#1e2942] mb-3'>Schedule Your Free Consultation</h2>
                      <p className='text-gray-600'>Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your appointment.</p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                          <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent'
                            placeholder='Your name'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                          <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent'
                            placeholder='your@email.com'
                          />
                        </div>
                      </div>

                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>Company</label>
                          <input
                            type='text'
                            name='company'
                            value={formData.company}
                            onChange={handleInputChange}
                            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent'
                            placeholder='Your company name'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>Phone</label>
                          <input
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent'
                            placeholder='Your phone number'
                          />
                        </div>
                      </div>

                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>Preferred Date</label>
                          <input
                            type='date'
                            name='preferredDate'
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>Preferred Time</label>
                          <select
                            name='preferredTime'
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent'
                          >
                            <option value=''>Select a time</option>
                            <option value='09:00'>9:00 AM</option>
                            <option value='10:00'>10:00 AM</option>
                            <option value='11:00'>11:00 AM</option>
                            <option value='14:00'>2:00 PM</option>
                            <option value='15:00'>3:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
                        <textarea
                          name='message'
                          value={formData.message}
                          onChange={handleInputChange}
                          rows='3'
                          className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent'
                          placeholder='Tell us about your cloud needs...'
                        />
                      </div>

                      <div className='flex justify-end space-x-4 mt-6'>
                        <button
                          type='button'
                          onClick={() => setShowScheduler(false)}
                          className='px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50'
                        >
                          Cancel
                        </button>
                        <button
                          type='submit'
                          className='px-6 py-2 rounded-lg bg-[#ff3b30] text-white hover:bg-[#ff3b30]/90'
                        >
                          Schedule Consultation
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 