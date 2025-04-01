&apos;use client&apos;;

import { useState } from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import Link from &apos;next/link&apos;;
import { 
  ArrowRight, 
  Brain, 
  Gamepad2, 
  MessageSquare, 
  Cpu, 
  Code, 
  BarChart2, 
  Network, 
  Target, 
  Zap, 
  Shield, 
  Database, 
  LineChart, 
  BrainCircuit,
  Sparkles
} from &apos;lucide-react&apos;;

export default function AIMLSolutionsPage() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: &apos;Custom AI Development&apos;,
      description: &apos;Tailored AI solutions designed for your specific business needs&apos;,
      icon: Brain,
      features: [&apos;Custom AI Models&apos;, &apos;Business Process Automation&apos;, &apos;AI Integration&apos;],
      color: &apos;from-purple-500 to-purple-600&apos;
    },
    {
      id: 2,
      title: &apos;AI Game Development&apos;,
      description: &apos;Create immersive gaming experiences with AI-powered features&apos;,
      icon: Gamepad2,
      features: [&apos;NPC Behavior&apos;, &apos;Procedural Generation&apos;, &apos;Game AI Systems&apos;],
      color: &apos;from-blue-500 to-blue-600&apos;
    },
    {
      id: 3,
      title: &apos;AI Chatbot Development&apos;,
      description: &apos;Build intelligent conversational agents for customer service&apos;,
      icon: MessageSquare,
      features: [&apos;Natural Language Processing&apos;, &apos;Multi-language Support&apos;, &apos;Context Awareness&apos;],
      color: &apos;from-green-500 to-green-600&apos;
    },
    {
      id: 4,
      title: &apos;Custom Machine Learning Development&apos;,
      description: &apos;Develop and deploy custom ML models for your data&apos;,
      icon: Cpu,
      features: [&apos;Model Training&apos;, &apos;Data Preprocessing&apos;, &apos;Model Deployment&apos;],
      color: &apos;from-red-500 to-red-600&apos;
    },
    {
      id: 5,
      title: &apos;AI Software Development&apos;,
      description: &apos;Create AI-powered software solutions for various industries&apos;,
      icon: Code,
      features: [&apos;AI Integration&apos;, &apos;API Development&apos;, &apos;System Architecture&apos;],
      color: &apos;from-yellow-500 to-yellow-600&apos;
    },
    {
      id: 6,
      title: &apos;Predictive Analytics Solutions&apos;,
      description: &apos;Leverage data to make informed business decisions&apos;,
      icon: BarChart2,
      features: [&apos;Data Analysis&apos;, &apos;Trend Prediction&apos;, &apos;Business Intelligence&apos;],
      color: &apos;from-indigo-500 to-indigo-600&apos;
    },
    {
      id: 7,
      title: &apos;Deep Learning Development&apos;,
      description: &apos;Implement advanced deep learning solutions&apos;,
      icon: Network,
      features: [&apos;Neural Networks&apos;, &apos;Computer Vision&apos;, &apos;Natural Language Processing&apos;],
      color: &apos;from-pink-500 to-pink-600&apos;
    },
    {
      id: 8,
      title: &apos;AI Consultancy Services&apos;,
      description: &apos;Expert guidance for AI implementation and strategy&apos;,
      icon: BrainCircuit,
      features: [&apos;Strategy Planning&apos;, &apos;Technology Selection&apos;, &apos;Implementation Support&apos;],
      color: &apos;from-orange-500 to-orange-600&apos;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50&quot;>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=&quot;relative overflow-hidden min-h-screen flex items-center&quot;
      >
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-gradient-x&quot;></div>
        <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative&quot;
        >
          <div className=&quot;text-center&quot;>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: &quot;spring&quot;, stiffness: 100 }}
              className=&quot;inline-block mb-8 relative&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse&quot;></div>
              <Brain className=&quot;w-24 h-24 text-purple-600 animate-float&quot; />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-purple-600&quot;
            >
              AI & ML Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=&quot;text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12&quot;
            >
              Transform your business with cutting-edge artificial intelligence and machine learning
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setActiveService(service.id)}
              onHoverEnd={() => setActiveService(null)}
              className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
            >
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className={`p-2 bg-gradient-to-br ${service.color} rounded-lg text-white`}>
                  <service.icon className=&quot;w-6 h-6&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>{service.title}</h3>
              </div>
              <p className=&quot;text-gray-600 mb-6&quot;>{service.description}</p>
              <ul className=&quot;space-y-3&quot;>
                {service.features.map((feature, idx) => (
                  <li key={idx} className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                    <div className=&quot;w-1.5 h-1.5 rounded-full bg-purple-600&quot;></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/ai-ml-solutions/${service.title === &apos;Custom Machine Learning Development&apos; ? &apos;custom-machine-learning&apos; : service.title.toLowerCase().replace(/\s+/g, &apos;-&apos;)}`}
                className=&quot;mt-6 flex items-center text-purple-600 hover:text-purple-700 font-medium group&quot;
              >
                <span>Learn more</span>
                <ArrowRight className=&quot;w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300&quot; />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 