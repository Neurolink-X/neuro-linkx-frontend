&apos;use client&apos;;

import { motion, useScroll, useTransform } from &apos;framer-motion&apos;;
import { 
  ArrowLeft, 
  BarChart2, 
  LineChart, 
  Target, 
  BrainCircuit, 
  Database, 
  Zap, 
  Shield, 
  GitBranch,
  Sparkles,
  TrendingUp,
  PieChart,
  Globe,
  Cpu,
  BarChart,
  Network,
  Settings,
  Lock
} from &apos;lucide-react&apos;;
import Link from &apos;next/link&apos;;
import { useRef } from &apos;react&apos;;

export default function PredictiveAnalyticsSolutionsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [&quot;start end&quot;, &quot;end start&quot;]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={containerRef} className=&quot;min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50&quot;>
      {/* Hero Section with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=&quot;relative overflow-hidden min-h-[80vh] flex items-center&quot;
      >
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-gradient-x&quot;></div>
        <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
        
        <motion.div
          style={{ opacity, scale }}
          className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative&quot;
        >
          <Link 
            href=&quot;/ai-ml-solutions&quot;
            className=&quot;inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 group&quot;
          >
            <ArrowLeft className=&quot;w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300&quot; />
            Back to Services
          </Link>
          
          <div className=&quot;text-center&quot;>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: &quot;spring&quot;, stiffness: 100 }}
              className=&quot;inline-block mb-8 relative&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse&quot;></div>
              <BarChart2 className=&quot;w-24 h-24 text-indigo-600 animate-float&quot; />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-indigo-600&quot;
            >
              Predictive Analytics Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=&quot;text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12&quot;
            >
              Transform your data into actionable insights with advanced predictive analytics
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {/* Data Analysis */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300&quot;>
                <BrainCircuit className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Advanced Data Analysis</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Deep analysis of historical data to identify patterns and trends.
            </p>
          </motion.div>

          {/* Predictive Modeling */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300&quot;>
                <TrendingUp className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Predictive Modeling</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Build accurate models to forecast future outcomes and trends.
            </p>
          </motion.div>

          {/* Business Intelligence */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300&quot;>
                <PieChart className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Business Intelligence</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Transform complex data into actionable business insights.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section with Animated Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <h2 className=&quot;text-4xl font-bold text-[#1e2942] mb-12 text-center&quot;>Why Choose Our Predictive Analytics?</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
              <Target className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Accurate Predictions</h3>
            <p className=&quot;text-gray-600&quot;>High-precision forecasting models.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
              <Zap className=&quot;w-6 h-6 text-purple-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Real-time Insights</h3>
            <p className=&quot;text-gray-600&quot;>Instant access to predictive data.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
              <Globe className=&quot;w-6 h-6 text-blue-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Global Scale</h3>
            <p className=&quot;text-gray-600&quot;>Analyze data from multiple sources.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
              <Shield className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Data Security</h3>
            <p className=&quot;text-gray-600&quot;>Enterprise-grade data protection.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid with Hover Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <h2 className=&quot;text-4xl font-bold text-[#1e2942] mb-12 text-center&quot;>Advanced Features</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
              <Cpu className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Machine Learning</h3>
            <p className=&quot;text-gray-600&quot;>Advanced ML algorithms for predictions.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
              <Network className=&quot;w-6 h-6 text-purple-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>API Integration</h3>
            <p className=&quot;text-gray-600&quot;>Connect with your existing systems.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
              <Settings className=&quot;w-6 h-6 text-blue-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Custom Dashboards</h3>
            <p className=&quot;text-gray-600&quot;>Tailored visualization solutions.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden group&quot;>
          <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
          <div className=&quot;relative&quot;>
            <motion.h2 
              className=&quot;text-4xl font-bold text-white mb-6&quot;
              whileHover={{ scale: 1.05 }}
              transition={{ type: &quot;spring&quot;, stiffness: 300 }}
            >
              Ready to Transform Your Data?
            </motion.h2>
            <motion.p 
              className=&quot;text-xl text-white/90 mb-8 max-w-2xl mx-auto&quot;
              whileHover={{ scale: 1.02 }}
              transition={{ type: &quot;spring&quot;, stiffness: 300 }}
            >
              Let&apos;s create powerful predictive analytics solutions that drive your business forward.
            </motion.p>
            <Link
              href=&quot;/contact&quot;
              className=&quot;inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 group&quot;
            >
              Get Started
              <ArrowLeft className=&quot;w-5 h-5 ml-2 transform rotate-180 group-hover:translate-x-1 transition-transform duration-300&quot; />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 