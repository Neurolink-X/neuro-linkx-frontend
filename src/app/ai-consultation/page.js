'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Brain, Code, Zap, Shield, BarChart, Calendar, Clock, Check, X, Sparkles, Star, ChevronRight, ArrowUpRight, Users, Target, Rocket } from 'lucide-react';


function getServicePath(title) {
  const paths = {
    'AI Strategy Development': 'ai-strategy-development',
    'Custom AI Solutions': 'custom-ai-solutions',
    'AI Integration': 'ai-itegration',
    'AI Security & Compliance': 'cloud-security',
    'AI Performance Analytics': 'ai-performance-analytics'
  };
  return paths[title] || title.toLowerCase().replace(/\s+/g, '-');
}
export default function AIConsultationPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const springConfig = { damping: 15, stiffness: 100 };
  const springScale = useSpring(scale, springConfig);
  
  const [showScheduler, setShowScheduler] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showScheduler) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showScheduler]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Here you can add your form submission logic
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
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setShowScheduler(false);
      }, 3000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting]);

  const handleCloseModal = useCallback(() => {
    setShowScheduler(false);
    setShowSuccess(false);
    setIsSubmitting(false);
  }, []);

  const services = [
    {
      id: 1,
      title: 'AI Strategy Development',
      description: 'Create a comprehensive AI roadmap aligned with your business goals',
      icon: Brain,
      color: 'from-blue-500 to-blue-600',
      link: '/services/ai-strategy',
      features: ['Custom AI Roadmap', 'Business Alignment', 'Resource Planning']
    },
    {
      id: 2,
      title: 'Custom AI Solutions',
      description: 'Develop tailored AI applications for your specific needs',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      link: '/services/custom-ai',
      features: ['Tailored Development', 'Integration Support', 'Performance Optimization']
    },
    {
      id: 3,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      link: '/services/ai-integration',
      features: ['System Integration', 'API Development', 'Testing & Validation']
    },
    {
      id: 4,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI solutions are secure and compliant with regulations',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      link: '/services/ai-security',
      features: ['Security Assessment', 'Compliance Checks', 'Risk Management']
    },
    {
      id: 5,
      title: 'AI Performance Analytics',
      description: 'Monitor and optimize your AI systems for maximum efficiency',
      icon: BarChart,
      color: 'from-red-500 to-red-600',
      link: '/services/ai-analytics',
      features: ['Performance Metrics', 'Optimization Tools', 'Reporting Dashboard']
    }
  ];

  const consultationTypes = [
    {
      id: 1,
      title: '30-Min Discovery Call',
      description: 'Quick overview of your AI needs and potential solutions',
      duration: '30 minutes',
      price: 'Free',
      features: ['Initial Assessment', 'Solution Overview', 'Next Steps Planning'],
      highlight: 'Perfect for exploring AI possibilities'
    },
    {
      id: 2,
      title: '1-Hour Strategy Session',
      description: 'Detailed discussion of your AI roadmap and implementation plan',
      duration: '1 hour',
      price: '$199',
      features: ['Detailed Analysis', 'Custom Roadmap', 'Resource Planning'],
      highlight: 'Most Popular Choice'
    },
    {
      id: 3,
      title: '2-Hour Deep Dive',
      description: 'Comprehensive analysis and detailed project planning',
      duration: '2 hours',
      price: '$399',
      features: ['In-depth Analysis', 'Detailed Implementation Plan', 'Risk Assessment', 'ROI Projection'],
      highlight: 'Best Value for Complex Projects',
      recommended: true
    }
  ];

  const stats = [
    { 
      icon: Users, 
      label: '500+', 
      text: 'Clients Served',
      description: 'Trusted by leading companies worldwide',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Target, 
      label: '98%', 
      text: 'Success Rate',
      description: 'Consistently delivering results',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: Rocket, 
      label: '24/7', 
      text: 'Support',
      description: 'Always here when you need us',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: Star, 
      label: '4.9/5', 
      text: 'Client Rating',
      description: 'Excellence in every project',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section with Enhanced Animations */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative overflow-hidden flex items-center"
  style={{ opacity, scale: springScale }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-gradient-x"></div>
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 relative"
  >
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.8, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="inline-block mb-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full animate-spin-slow"></div>
        <Brain className="w-20 sm:w-24 h-20 sm:h-24 text-purple-600 animate-float" />
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl max-sm:text-3xl md:text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-purple-600"
      >
        AI Solutions Consultation
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
      >
        Transform your business with cutting-edge AI solutions and expert guidance
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowScheduler(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 sm:px-10 py-3 sm:py-5 rounded-full font-medium flex items-center space-x-2.5 sm:space-x-3 hover:from-purple-600/90 hover:to-blue-600/90 transition-all duration-300 shadow-md sm:shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 text-sm sm:text-lg"
          >
          <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
          <span>Schedule Free Consultation</span>
          <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-5 sm:px-10 py-3 sm:py-5 rounded-full font-medium flex items-center space-x-2.5 sm:space-x-3 hover:bg-gray-50 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl border border-purple-100 text-sm sm:text-lg"
        >
          <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />
          <span>View Case Studies</span>
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
</motion.div>


      {/* Stats Section with Premium Design */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
  <div className="text-center mb-16 sm:mb-20">
    <div className="relative inline-block">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e2942] mb-2 sm:mb-6">
        Our Track Record
      </h2>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full mb-17"></div>
      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-600/30 to-transparent  "></div>
    </div>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
      Trusted by businesses worldwide for AI excellence
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group relative overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        <div className="relative">
          <div className="inline-block p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 mb-4 sm:mb-6 group-hover:from-purple-100 group-hover:to-blue-100 transition-colors duration-300">
            <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-[#1e2942] mb-2 sm:mb-3">{stat.label}</div>
          <div className="text-base sm:text-lg text-gray-800 font-medium mb-1 sm:mb-2">{stat.text}</div>
          <div className="text-sm text-gray-600">{stat.description}</div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

      {/* Services Section with Enhanced Layout */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative"
>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"></div>
  <div className="text-center mb-20 sm:mb-24">
    <div className="relative inline-block">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e2942] mb-4 sm:mb-8">
        Our AI Services
      </h2>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full "></div>
      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-600/30 to-transparent"></div>
    </div>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-5">
      Comprehensive AI solutions tailored to your business needs
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 relative">
    {services.map((service, index) => (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        whileHover={{ y: -5, scale: 1.02 }}
        onHoverStart={() => setActiveService(service.id)}
        onHoverEnd={() => setActiveService(null)}
        className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative text-purple-600 transform group-hover:scale-110 transition-transform duration-300">
            <service.icon className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#1e2942] mb-3 sm:mb-4">{service.title}</h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">{service.description}</p>

        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span className="text-sm sm:text-base text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        <motion.a
          href={service.link}
          whileHover={{ x: 5 }}
          className="flex items-center text-purple-600 group-hover:text-purple-700 transition-colors duration-300 font-medium group"
        >
          <span className="text-sm sm:text-base">Learn more</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>

        {activeService === service.id && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"
          />
        )}
      </motion.div>
    ))}
  </div>
</motion.div>

      {/* Consultation Types with Enhanced Design */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 rounded-3xl relative overflow-hidden mb-24 sm:mb-32"
>
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
  <div className="text-center mb-16 sm:mb-20">
    <div className="relative inline-block">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e2942] mb-4 sm:mb-6">
        Consultation Options
      </h2>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full"></div>
      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-600/30 to-transparent"></div>
    </div>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-5">
      Choose the consultation package that best fits your needs
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative">
    {consultationTypes.map((type, index) => (
      <motion.div
        key={type.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        whileHover={{ y: -5, scale: 1.02 }}
        className={`bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden ${
          type.recommended ? 'border-2 border-purple-500' : ''
        }`}
      >
        {type.recommended && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium ">
            Recommended
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1e2942]">{type.title}</h3>
            <span className="text-lg sm:text-xl text-purple-600 font-semibold mt-5">{type.price}</span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">{type.description}</p>
          <div className="flex items-center text-gray-500 mb-6">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">{type.duration}</span>
          </div>
          <div className="space-y-2 sm:space-y-3 mb-6">
            {type.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                <span className="text-sm sm:text-base text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <div className="text-xs sm:text-sm text-purple-600 font-medium mb-4 sm:mb-6">{type.highlight}</div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowScheduler(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 rounded-xl hover:from-purple-600/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Schedule Consultation</span>
          </motion.button>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

      {/* Enhanced Bottom CTA Section */}
      <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg py-2 sm:py-3 z-50"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
      
      <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left">
        <div className="bg-green-50 p-1.5 sm:p-2 rounded-full">
          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
        </div>
        <div className="flex flex-col text-sm sm:text-base">
          <span className="font-medium text-gray-800">Free 30-minute consultation available</span>
          <span className="text-gray-500 text-xs sm:text-sm">Limited time offer</span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowScheduler(true)}
        className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium flex items-center justify-center space-x-2 sm:space-x-3 text-xs sm:text-sm shadow-md hover:from-purple-600/90 hover:to-blue-600/90 transition-all duration-300"
      >
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Schedule Free Consultation</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 pointer-events-none"></div>

              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-[#1e2942] mb-3">Thank You!</h2>
                    <p className="text-gray-600 mb-4">Your consultation request has been received.</p>
                    <p className="text-sm text-gray-500">
                      We&apos;ll send you a confirmation email shortly with the next steps.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-[#1e2942] mb-3">Schedule Your Free Consultation</h2>
                      <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your appointment.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
                            placeholder="Your name"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
                            placeholder="your@email.com"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
                            placeholder="Your company name"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
                            placeholder="Your phone number"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
                            disabled={isSubmitting}
                          >
                            <option value="">Select a time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
                          placeholder="Tell us about your AI needs..."
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="flex justify-end space-x-4 mt-6">
                        <button
                          type="button"
                          onClick={handleCloseModal}
                          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isSubmitting}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 rounded-lg bg-[#ff3b30] text-white hover:bg-[#ff3b30]/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <span>Schedule Consultation</span>
                          )}
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