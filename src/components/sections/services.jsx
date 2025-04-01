&quot;use client&quot;

import { useState } from &quot;react&quot;
import { motion, AnimatePresence } from &quot;framer-motion&quot;
import { 
  Brain, 
  Zap, 
  LineChart, 
  ChevronRight, 
  Sparkles, 
  Code2, 
  Database, 
  Network, 
  Shield, 
  Cpu, 
  Cloud, 
  GitBranch, 
  Boxes, 
  Server, 
  Globe, 
  Lock, 
  Rocket, 
  BarChart
} from &quot;lucide-react&quot;

const tabs = [&quot;Gen AI&quot;, &quot;DevOps&quot;, &quot;CloudOps&quot;, &quot;Data Engineering&quot;, &quot;Product Lifecycle&quot;, &quot;Enterprise App&quot;]

const tabContent = {
  &quot;Gen AI&quot;: {
    title: &quot;Transforming Business with Generative AI&quot;,
    description:
      &quot;Our Gen AI solutions leverage cutting-edge artificial intelligence to generate new content, ideas, and solutions. From natural language processing to image generation, our AI services help businesses automate creative processes, enhance customer experiences, and drive innovation across all departments.&quot;,
    features: [
      { id: &quot;01&quot;, title: &quot;Natural Language Processing&quot;, icon: Brain, color: &quot;from-blue-500 to-indigo-500&quot; },
      { id: &quot;02&quot;, title: &quot;Image & Content Generation&quot;, icon: Zap, color: &quot;from-purple-500 to-pink-500&quot; },
      { id: &quot;03&quot;, title: &quot;Predictive Analytics&quot;, icon: LineChart, color: &quot;from-orange-500 to-red-500&quot; },
      { id: &quot;04&quot;, title: &quot;AI Model Training & Deployment&quot;, icon: Cpu, color: &quot;from-green-500 to-emerald-500&quot; },
    ],
  },
  DevOps: {
    title: &quot;Streamlining Development with DevOps Excellence&quot;,
    description:
      &quot;Our DevOps practices bridge the gap between development and operations, creating a seamless pipeline for software delivery. By automating workflows, implementing continuous integration and delivery, and fostering collaboration, we help organizations release high-quality software faster and more reliably.&quot;,
    features: [
      { id: &quot;01&quot;, title: &quot;CI/CD Pipeline Automation&quot;, icon: GitBranch, color: &quot;from-blue-500 to-indigo-500&quot; },
      { id: &quot;02&quot;, title: &quot;Infrastructure as Code&quot;, icon: Code2, color: &quot;from-purple-500 to-pink-500&quot; },
      { id: &quot;03&quot;, title: &quot;Monitoring & Observability&quot;, icon: BarChart, color: &quot;from-orange-500 to-red-500&quot; },
      { id: &quot;04&quot;, title: &quot;Container Orchestration&quot;, icon: Boxes, color: &quot;from-green-500 to-emerald-500&quot; },
    ],
  },
  CloudOps: {
    title: &quot;Enabling Seamless Operations with Precision and Agility&quot;,
    description:
      &quot;Mastering cloud operations goes beyond routine management: it&apos;s about creating a strategic advantage. Our CloudOps services are crafted with a deep understanding of your unique operational challenges, focusing on delivering tailored solutions that balance agility, security, and efficiency.&quot;,
    features: [
      { id: &quot;01&quot;, title: &quot;Cloud Infrastructure Management&quot;, icon: Cloud, color: &quot;from-blue-500 to-indigo-500&quot; },
      { id: &quot;02&quot;, title: &quot;Cloud Cost Management&quot;, icon: BarChart, color: &quot;from-purple-500 to-pink-500&quot; },
      { id: &quot;03&quot;, title: &quot;Cloud Monitoring & Performance&quot;, icon: Server, color: &quot;from-orange-500 to-red-500&quot; },
      { id: &quot;04&quot;, title: &quot;Cloud Automation & Orchestration&quot;, icon: Network, color: &quot;from-green-500 to-emerald-500&quot; },
    ],
  },
  &quot;Data Engineering&quot;: {
    title: &quot;Building Robust Data Foundations&quot;,
    description:
      &quot;Our Data Engineering services transform raw data into valuable business insights. We design and implement scalable data pipelines, data lakes, and warehousing solutions that enable organizations to harness the full potential of their data assets.&quot;,
    features: [
      { id: &quot;01&quot;, title: &quot;Data Pipeline Development&quot;, icon: Database, color: &quot;from-blue-500 to-indigo-500&quot; },
      { id: &quot;02&quot;, title: &quot;Data Warehousing&quot;, icon: Database, color: &quot;from-purple-500 to-pink-500&quot; },
      { id: &quot;03&quot;, title: &quot;Big Data Processing&quot;, icon: Server, color: &quot;from-orange-500 to-red-500&quot; },
      { id: &quot;04&quot;, title: &quot;Data Governance & Quality&quot;, icon: Shield, color: &quot;from-green-500 to-emerald-500&quot; },
    ],
  },
  &quot;Product Lifecycle&quot;: {
    title: &quot;Managing Products from Concept to Retirement&quot;,
    description:
      &quot;Our Product Lifecycle Management services provide end-to-end support for your product journey. From initial concept and design to development, deployment, maintenance, and eventual retirement, we ensure each phase is optimized for success.&quot;,
    features: [
      { id: &quot;01&quot;, title: &quot;Product Strategy & Roadmapping&quot;, icon: Rocket, color: &quot;from-blue-500 to-indigo-500&quot; },
      { id: &quot;02&quot;, title: &quot;Agile Development&quot;, icon: Code2, color: &quot;from-purple-500 to-pink-500&quot; },
      { id: &quot;03&quot;, title: &quot;Quality Assurance&quot;, icon: Shield, color: &quot;from-orange-500 to-red-500&quot; },
      { id: &quot;04&quot;, title: &quot;Product Analytics&quot;, icon: BarChart, color: &quot;from-green-500 to-emerald-500&quot; },
    ],
  },
  &quot;Enterprise App&quot;: {
    title: &quot;Building Powerful Enterprise Applications&quot;,
    description:
      &quot;Our Enterprise Application services deliver custom, scalable solutions designed to address your organization&apos;s specific challenges. We develop robust, secure, and user-friendly applications that integrate seamlessly with your existing systems.&quot;,
    features: [
      { id: &quot;01&quot;, title: &quot;Custom Application Development&quot;, icon: Code2, color: &quot;from-blue-500 to-indigo-500&quot; },
      { id: &quot;02&quot;, title: &quot;Legacy System Modernization&quot;, icon: Server, color: &quot;from-purple-500 to-pink-500&quot; },
      { id: &quot;03&quot;, title: &quot;Enterprise Integration&quot;, icon: Network, color: &quot;from-orange-500 to-red-500&quot; },
      { id: &quot;04&quot;, title: &quot;Mobile Enterprise Solutions&quot;, icon: Globe, color: &quot;from-green-500 to-emerald-500&quot; },
    ],
  },
}

export default function Services() {
  const [activeTab, setActiveTab] = useState(&quot;Gen AI&quot;)

  return (
    <section className=&quot;relative py-32 px-4 bg-gradient-to-b from-[#1e2942] via-[#1a2436] to-[#0e1421] overflow-hidden&quot;>
      {/* Animated Background */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,48,0.05),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]&quot; />
      </div>

      <div className=&quot;container relative mx-auto max-w-7xl&quot;>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=&quot;text-center mb-20&quot;
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=&quot;inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-lg shadow-[#ff3b30]/5&quot;
          >
            <Sparkles className=&quot;w-4 h-4 text-[#ff3b30]&quot; />
            <span className=&quot;text-white/90 text-sm font-medium tracking-wide&quot;>Our Services</span>
          </motion.div>
          <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight&quot;>
            Crafted by Talent,{&apos; &apos;}
            <span className=&quot;bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient&quot;>
              Perfected in Services
            </span>
          </h2>
          <p className=&quot;text-white/70 text-lg max-w-2xl mx-auto&quot;>
            Leverage cutting-edge technologies to transform your business operations and drive innovation.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className=&quot;flex flex-row justify-center mb-12&quot;>
          <div className=&quot;flex flex-row max-w-min justify-center gap-2 py-2 px-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 overflow-x-auto&quot;>
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab 
                    ? &quot;bg-gradient-to-r from-orange-500 to-[#ff3b30] text-white shadow-lg shadow-[#ff3b30]/20&quot; 
                    : &quot;bg-transparent text-white/70 hover:text-white hover:bg-white/5&quot;
                }`}
              >
                <p className=&quot;text-nowrap&quot;>{tab}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode=&quot;wait&quot;>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className=&quot;grid md:grid-cols-2 gap-12 items-center&quot;
          >
            <div className=&quot;order-2 md:order-1&quot;>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;
              >
                {tabContent[activeTab].title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className=&quot;text-white/70 text-lg mb-8&quot;
              >
                {tabContent[activeTab].description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;group relative px-8 py-4 rounded-full font-medium overflow-hidden transition-all duration-300 shadow-lg shadow-[#ff3b30]/10&quot;
              >
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ff3b30] opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
                <div className=&quot;absolute inset-0 bg-[#ff3b30] group-hover:bg-transparent transition-colors duration-300&quot;></div>
                <span className=&quot;relative text-white text-lg flex items-center gap-2&quot;>
                  Learn More
                  <ChevronRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </span>
              </motion.button>
            </div>
            <div className=&quot;order-1 md:order-2 relative&quot;>
              <div className=&quot;relative h-[500px]&quot;>
                {tabContent[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className=&quot;absolute group&quot;
                    style={{
                      top: index === 0 ? &quot;10%&quot; : index === 1 ? &quot;70%&quot; : index === 2 ? &quot;10%&quot; : &quot;70%&quot;,
                      left: index === 0 || index === 1 ? &quot;10%&quot; : &quot;60%&quot;,
                    }}
                  >
                    <div className=&quot;relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#ff3b30]/20 transition-all duration-300 shadow-lg shadow-[#ff3b30]/5 overflow-hidden&quot;>
                      <div className=&quot;absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot; />
                      <div className=&quot;relative flex items-center gap-4&quot;>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className=&quot;w-6 h-6 text-white&quot; />
                        </div>
                        <div>
                          <p className=&quot;text-white font-medium&quot;>{feature.title}</p>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className=&quot;absolute -top-8 -left-8 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300&quot;
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {feature.id}
                    </motion.div>
                  </motion.div>
                ))}

                <svg className=&quot;absolute inset-0 w-full h-full z-20&quot; viewBox=&quot;0 0 400 400&quot;>
                  <path
                    d=&quot;M100,100 C150,50 250,50 300,100 C350,150 350,250 300,300 C250,350 150,350 100,300 C50,250 50,150 100,100&quot;
                    fill=&quot;none&quot;
                    stroke=&quot;rgba(255,255,255,0.1)&quot;
                    strokeWidth=&quot;2&quot;
                    strokeDasharray=&quot;5,5&quot;
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

