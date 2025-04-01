&apos;use client&apos;;

import { motion, useScroll, useTransform } from &apos;framer-motion&apos;;
import { 
  ArrowLeft, 
  Facebook, 
  Instagram, 
  Search, 
  Target, 
  Users, 
  Globe, 
  LineChart,
  TrendingUp,
  Share2,
  Bell,
  Filter,
  Rocket,
  Sparkles,
  ArrowRight
} from &apos;lucide-react&apos;;
import Link from &apos;next/link&apos;;
import { useRef } from &apos;react&apos;;

export default function DigitalMarketingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [&quot;start start&quot;, &quot;end start&quot;]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className=&quot;min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50&quot;>
      {/* Hero Section */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=&quot;relative overflow-hidden min-h-[90vh] flex items-center&quot;
      >
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10&quot;></div>
        <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent&quot;></div>
        
        <motion.div
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative&quot;
        >
          <Link 
            href=&quot;/&quot;
            className=&quot;inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 group&quot;
          >
            <ArrowLeft className=&quot;w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300&quot; />
            Back to Home
          </Link>
          
          <div className=&quot;text-center&quot;>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: &quot;spring&quot;, stiffness: 100 }}
              className=&quot;inline-block mb-8 relative&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl&quot;></div>
              <div className=&quot;relative&quot;>
                <TrendingUp className=&quot;w-24 h-24 text-orange-600&quot; />
                <div className=&quot;absolute -top-2 -right-2&quot;>
                  <Sparkles className=&quot;w-8 h-8 text-yellow-400 animate-pulse&quot; />
                </div>
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;text-7xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] via-orange-600 to-[#1e2942]&quot;
            >
              Digital Marketing Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=&quot;text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12&quot;
            >
              Drive growth and engagement with our comprehensive digital marketing services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=&quot;flex justify-center gap-4&quot;
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300 group&quot;
              >
                Get Started
                <ArrowRight className=&quot;w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300&quot; />
              </Link>
              <Link
                href=&quot;#services&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300&quot;
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        id=&quot;services&quot;
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;text-center mb-16&quot;>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=&quot;text-4xl font-bold text-[#1e2942] mb-4&quot;
          >
            Our Digital Marketing Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;
          >
            Comprehensive solutions to boost your online presence and drive results
          </motion.p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
          {/* Meta Ads */}
          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white&quot;>
                  <Facebook className=&quot;w-6 h-6&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Meta Ads</h3>
              </div>
              <p className=&quot;text-gray-600 mb-6&quot;>
                Reach your target audience on Facebook and Instagram with precision-targeted advertising campaigns.
              </p>
              <ul className=&quot;space-y-3&quot;>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-blue-600&quot;></div>
                  <span>Advanced Audience Targeting</span>
                </li>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-blue-600&quot;></div>
                  <span>Creative Ad Design</span>
                </li>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-blue-600&quot;></div>
                  <span>Performance Analytics</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Google Ads */}
          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white&quot;>
                  <Search className=&quot;w-6 h-6&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Google Ads</h3>
              </div>
              <p className=&quot;text-gray-600 mb-6&quot;>
                Maximize your visibility on Google with strategic paid search campaigns.
              </p>
              <ul className=&quot;space-y-3&quot;>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-red-600&quot;></div>
                  <span>Keyword Research</span>
                </li>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-red-600&quot;></div>
                  <span>Ad Copy Optimization</span>
                </li>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-red-600&quot;></div>
                  <span>ROI Tracking</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Instagram Ads */}
          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;p-2 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg text-white&quot;>
                  <Instagram className=&quot;w-6 h-6&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Instagram Ads</h3>
              </div>
              <p className=&quot;text-gray-600 mb-6&quot;>
                Engage your audience with visually stunning Instagram advertising campaigns.
              </p>
              <ul className=&quot;space-y-3&quot;>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-pink-600&quot;></div>
                  <span>Visual Content Creation</span>
                </li>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-pink-600&quot;></div>
                  <span>Story & Reel Ads</span>
                </li>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-pink-600&quot;></div>
                  <span>Engagement Analytics</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* SEO */}
          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white&quot;>
                  <Search className=&quot;w-6 h-6&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>SEO</h3>
              </div>
              <p className=&quot;text-gray-600 mb-6&quot;>
                Improve your website&apos;s visibility and rankings with our comprehensive SEO services.
              </p>
              <ul className=&quot;space-y-3&quot;>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-green-600&quot;></div>
                  <span>Technical SEO</span>
                </li>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-green-600&quot;></div>
                  <span>Content Optimization</span>
                </li>
                <li className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                  <div className=&quot;w-1.5 h-1.5 rounded-full bg-green-600&quot;></div>
                  <span>Keyword Research</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;text-center mb-16&quot;>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=&quot;text-4xl font-bold text-[#1e2942] mb-4&quot;
          >
            Why Choose Our Digital Marketing Services?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;
          >
            Experience the difference with our comprehensive digital marketing solutions
          </motion.p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4&quot;>
                <Target className=&quot;w-6 h-6 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Precision Targeting</h3>
              <p className=&quot;text-gray-600&quot;>Reach your ideal audience with advanced targeting.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4&quot;>
                <Users className=&quot;w-6 h-6 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Audience Growth</h3>
              <p className=&quot;text-gray-600&quot;>Expand your reach and build your audience.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4&quot;>
                <Globe className=&quot;w-6 h-6 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Global Reach</h3>
              <p className=&quot;text-gray-600&quot;>Connect with customers worldwide.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4&quot;>
                <LineChart className=&quot;w-6 h-6 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Measurable Results</h3>
              <p className=&quot;text-gray-600&quot;>Track and optimize campaign performance.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;text-center mb-16&quot;>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=&quot;text-4xl font-bold text-[#1e2942] mb-4&quot;
          >
            Advanced Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;
          >
            Powerful tools to enhance your digital marketing campaigns
          </motion.p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4&quot;>
                <Share2 className=&quot;w-6 h-6 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Social Media Integration</h3>
              <p className=&quot;text-gray-600&quot;>Seamless integration across all social platforms.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4&quot;>
                <Bell className=&quot;w-6 h-6 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Real-time Monitoring</h3>
              <p className=&quot;text-gray-600&quot;>Track campaign performance in real-time.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
            <div className=&quot;relative&quot;>
              <div className=&quot;p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4&quot;>
                <Filter className=&quot;w-6 h-6 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Advanced Analytics</h3>
              <p className=&quot;text-gray-600&quot;>Comprehensive data analysis and insights.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent&quot;></div>
          <div className=&quot;relative&quot;>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: &quot;spring&quot;, stiffness: 100 }}
              viewport={{ once: true }}
              className=&quot;inline-block mb-8&quot;
            >
              <Rocket className=&quot;w-16 h-16 text-white&quot; />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=&quot;text-4xl font-bold text-white mb-6&quot;
            >
              Ready to Grow Your Digital Presence?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className=&quot;text-xl text-white/90 mb-8 max-w-2xl mx-auto&quot;
            >
              Let&apos;s create powerful digital marketing campaigns that drive results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 group&quot;
              >
                Get Started
                <ArrowRight className=&quot;w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300&quot; />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 