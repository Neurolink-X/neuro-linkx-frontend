&apos;use client&apos;;

import { useState, useEffect } from &apos;react&apos;;
import { motion, AnimatePresence, useScroll, useTransform } from &apos;framer-motion&apos;;
import { ArrowRight, Cloud, Server, Shield, Database, Calendar, Clock, Video, Check, X, Sparkles, ChevronRight } from &apos;lucide-react&apos;;

export default function CloudConsultationPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  const [selectedService, setSelectedService] = useState(null);
  const [showScheduler, setShowScheduler] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: &apos;&apos;,
    email: &apos;&apos;,
    company: &apos;&apos;,
    phone: &apos;&apos;,
    preferredDate: &apos;&apos;,
    preferredTime: &apos;&apos;,
    message: &apos;&apos;
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
    // Here you can add your form submission logic
    console.log(&apos;Form submitted:&apos;, formData);
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: &apos;&apos;,
      email: &apos;&apos;,
      company: &apos;&apos;,
      phone: &apos;&apos;,
      preferredDate: &apos;&apos;,
      preferredTime: &apos;&apos;,
      message: &apos;&apos;
    });

    // Close modal after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setShowScheduler(false);
    }, 3000);
  };

  const services = [
    {
      icon: <Cloud className=&quot;w-8 h-8&quot; />,
      title: &quot;Cloud Hosting&quot;,
      description: &quot;Scalable and reliable cloud hosting solutions for your applications&quot;
    },
    {
      icon: <Server className=&quot;w-8 h-8&quot; />,
      title: &quot;Server Management&quot;,
      description: &quot;Professional server management and maintenance services&quot;
    },
    {
      icon: <Database className=&quot;w-8 h-8&quot; />,
      title: &quot;Data Backup&quot;,
      description: &quot;Secure and automated data backup solutions&quot;
    },
    {
      icon: <Shield className=&quot;w-8 h-8&quot; />,
      title: &quot;Cloud Security&quot;,
      description: &quot;Comprehensive cloud security and compliance services&quot;
    }
  ];

  const consultationTypes = [
    {
      title: &quot;30-Min Discovery Call&quot;,
      description: &quot;Quick consultation to understand your cloud needs&quot;,
      duration: &quot;30 minutes&quot;,
      price: &quot;Free&quot;
    },
    {
      title: &quot;1-Hour Strategy Session&quot;,
      description: &quot;Detailed discussion about your cloud infrastructure&quot;,
      duration: &quot;1 hour&quot;,
      price: &quot;$99&quot;
    },
    {
      title: &quot;2-Hour Deep Dive&quot;,
      description: &quot;Comprehensive analysis and planning session&quot;,
      duration: &quot;2 hours&quot;,
      price: &quot;$199&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24&quot;>
      {/* Hero Section with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=&quot;relative overflow-hidden min-h-[80vh] flex items-center&quot;
        style={{ opacity, scale }}
      >
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient-x&quot;></div>
        <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
        <div className=&quot;absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white&quot;></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative&quot;
        >
          <div className=&quot;text-center&quot;>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: &quot;spring&quot;, stiffness: 100 }}
              className=&quot;inline-block mb-6 relative&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-r from-[#ff3b30]/20 to-orange-500/20 rounded-full blur-2xl animate-pulse&quot;></div>
              <Cloud className=&quot;w-16 h-16 text-[#ff3b30] animate-float&quot; />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;text-5xl font-bold text-[#1e2942] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-[#ff3b30]&quot;
            >
              Cloud Services Consultation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=&quot;text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed&quot;
            >
              Get expert guidance on cloud solutions, server management, and security for your business
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=&quot;mt-8&quot;
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowScheduler(true)}
                className=&quot;bg-gradient-to-r from-[#ff3b30] to-orange-500 text-white px-8 py-4 rounded-full font-medium flex items-center space-x-2 hover:from-[#ff3b30]/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg shadow-[#ff3b30]/20 hover:shadow-xl hover:shadow-[#ff3b30]/30 mx-auto&quot;
              >
                <Calendar className=&quot;w-5 h-5&quot; />
                <span>Schedule Free Consultation</span>
                <ChevronRight className=&quot;w-5 h-5&quot; />
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
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative&quot;
      >
        <div className=&quot;absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent&quot;></div>
        <h2 className=&quot;text-3xl font-bold text-[#1e2942] mb-12 text-center relative&quot;>
          Our Cloud Services
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className=&quot;absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#ff3b30] to-orange-500 rounded-full&quot;
          />
        </h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative&quot;>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-br from-[#ff3b30]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
              <div className=&quot;relative mb-6&quot;>
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-[#ff3b30]/20 to-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300&quot;></div>
                <div className=&quot;relative text-[#ff3b30] transform group-hover:scale-110 transition-transform duration-300&quot;>
                  {service.icon}
                </div>
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942] mb-3&quot;>{service.title}</h3>
              <p className=&quot;text-gray-600 leading-relaxed&quot;>{service.description}</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className=&quot;mt-4 flex items-center text-[#ff3b30] group-hover:translate-x-2 transition-transform duration-300&quot;
              >
                <span className=&quot;text-sm font-medium&quot;>Learn more</span>
                <ChevronRight className=&quot;w-4 h-4 ml-1&quot; />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Consultation Types with Enhanced Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-gray-50 rounded-3xl relative overflow-hidden mb-32&quot;
      >
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-[#ff3b30]/5 to-orange-500/5&quot;></div>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl font-bold text-[#1e2942] mb-4 relative inline-block&quot;>
            Consultation Options
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className=&quot;absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff3b30] to-orange-500 rounded-full&quot;
            />
          </h2>
          <p className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;>
            Choose the consultation package that best fits your needs
          </p>
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
          {consultationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-br from-[#ff3b30]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
              <div className=&quot;relative&quot;>
                <div className=&quot;flex items-center justify-between mb-4&quot;>
                  <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>{type.title}</h3>
                  <span className=&quot;text-[#ff3b30] font-semibold&quot;>{type.price}</span>
                </div>
                <p className=&quot;text-gray-600 mb-6&quot;>{type.description}</p>
                <div className=&quot;flex items-center text-gray-500 mb-6&quot;>
                  <Clock className=&quot;w-4 h-4 mr-2&quot; />
                  <span>{type.duration}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowScheduler(true)}
                  className=&quot;w-full bg-gradient-to-r from-[#ff3b30] to-orange-500 text-white py-3 rounded-xl hover:from-[#ff3b30]/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg shadow-[#ff3b30]/20 hover:shadow-xl hover:shadow-[#ff3b30]/30 flex items-center justify-center space-x-2&quot;
                >
                  <Calendar className=&quot;w-5 h-5&quot; />
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
        className=&quot;fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t shadow-lg py-4 z-50&quot;
      >
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-col sm:flex-row justify-between items-center gap-4&quot;>
            <div className=&quot;flex items-center space-x-2&quot;>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Check className=&quot;w-5 h-5 text-green-500&quot; />
              </motion.div>
              <span className=&quot;text-gray-600&quot;>Free 30-minute consultation available</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowScheduler(true)}
              className=&quot;bg-gradient-to-r from-[#ff3b30] to-orange-500 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:from-[#ff3b30]/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg shadow-[#ff3b30]/20 hover:shadow-xl hover:shadow-[#ff3b30]/30&quot;
            >
              <Calendar className=&quot;w-5 h-5&quot; />
              <span>Schedule Free Consultation</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
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
            className=&quot;fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4&quot;
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className=&quot;bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative overflow-hidden&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-br from-[#ff3b30]/5 to-orange-500/5&quot;></div>
              <button
                onClick={() => setShowScheduler(false)}
                className=&quot;absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200&quot;
              >
                <X className=&quot;w-6 h-6&quot; />
              </button>

              <AnimatePresence>
                {showSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className=&quot;text-center py-12&quot;
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: &quot;spring&quot;, stiffness: 200, damping: 10 }}
                      className=&quot;w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;
                    >
                      <Check className=&quot;w-10 h-10 text-green-500&quot; />
                    </motion.div>
                    <h2 className=&quot;text-2xl font-bold text-[#1e2942] mb-3&quot;>Thank You!</h2>
                    <p className=&quot;text-gray-600 mb-4&quot;>Your consultation request has been received.</p>
                    <p className=&quot;text-sm text-gray-500&quot;>
                      We&apos;ll send you a confirmation email shortly with the next steps.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className=&quot;text-center mb-8&quot;>
                      <h2 className=&quot;text-2xl font-bold text-[#1e2942] mb-3&quot;>Schedule Your Free Consultation</h2>
                      <p className=&quot;text-gray-600&quot;>Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your appointment.</p>
                    </div>

                    <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                        <div>
                          <label className=&quot;block text-sm font-medium text-gray-700 mb-1&quot;>Name</label>
                          <input
                            type=&quot;text&quot;
                            name=&quot;name&quot;
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className=&quot;w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent&quot;
                            placeholder=&quot;Your name&quot;
                          />
                        </div>
                        <div>
                          <label className=&quot;block text-sm font-medium text-gray-700 mb-1&quot;>Email</label>
                          <input
                            type=&quot;email&quot;
                            name=&quot;email&quot;
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className=&quot;w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent&quot;
                            placeholder=&quot;your@email.com&quot;
                          />
                        </div>
                      </div>

                      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                        <div>
                          <label className=&quot;block text-sm font-medium text-gray-700 mb-1&quot;>Company</label>
                          <input
                            type=&quot;text&quot;
                            name=&quot;company&quot;
                            value={formData.company}
                            onChange={handleInputChange}
                            className=&quot;w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent&quot;
                            placeholder=&quot;Your company name&quot;
                          />
                        </div>
                        <div>
                          <label className=&quot;block text-sm font-medium text-gray-700 mb-1&quot;>Phone</label>
                          <input
                            type=&quot;tel&quot;
                            name=&quot;phone&quot;
                            value={formData.phone}
                            onChange={handleInputChange}
                            className=&quot;w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent&quot;
                            placeholder=&quot;Your phone number&quot;
                          />
                        </div>
                      </div>

                      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                        <div>
                          <label className=&quot;block text-sm font-medium text-gray-700 mb-1&quot;>Preferred Date</label>
                          <input
                            type=&quot;date&quot;
                            name=&quot;preferredDate&quot;
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            required
                            className=&quot;w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent&quot;
                          />
                        </div>
                        <div>
                          <label className=&quot;block text-sm font-medium text-gray-700 mb-1&quot;>Preferred Time</label>
                          <select
                            name=&quot;preferredTime&quot;
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            required
                            className=&quot;w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent&quot;
                          >
                            <option value=&quot;&quot;>Select a time</option>
                            <option value=&quot;09:00&quot;>9:00 AM</option>
                            <option value=&quot;10:00&quot;>10:00 AM</option>
                            <option value=&quot;11:00&quot;>11:00 AM</option>
                            <option value=&quot;14:00&quot;>2:00 PM</option>
                            <option value=&quot;15:00&quot;>3:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className=&quot;block text-sm font-medium text-gray-700 mb-1&quot;>Message</label>
                        <textarea
                          name=&quot;message&quot;
                          value={formData.message}
                          onChange={handleInputChange}
                          rows=&quot;3&quot;
                          className=&quot;w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent&quot;
                          placeholder=&quot;Tell us about your cloud needs...&quot;
                        />
                      </div>

                      <div className=&quot;flex justify-end space-x-4 mt-6&quot;>
                        <button
                          type=&quot;button&quot;
                          onClick={() => setShowScheduler(false)}
                          className=&quot;px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50&quot;
                        >
                          Cancel
                        </button>
                        <button
                          type=&quot;submit&quot;
                          className=&quot;px-6 py-2 rounded-lg bg-[#ff3b30] text-white hover:bg-[#ff3b30]/90&quot;
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