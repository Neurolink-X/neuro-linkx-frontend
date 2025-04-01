&apos;use client&apos;;

import { useState } from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { 
  ArrowRight, 
  Globe, 
  Layout, 
  Code, 
  ShoppingCart, 
  Network, 
  Monitor, 
  Wrench,
  Cpu,
  Database,
  Lock,
  BarChart2,
  Settings,
  GitBranch,
  Cloud,
  Smartphone,
  Tablet,
  CheckCircle2,
  Star,
  Award,
  Users,
  Clock,
  Shield,
  Zap
} from &apos;lucide-react&apos;;
import Link from &apos;next/link&apos;;

function getServicePath(title) {
  const paths = {
    &apos;Web App Development&apos;: &apos;web-app-development&apos;,
    &apos;Custom Website Development&apos;: &apos;custom-website&apos;,
    &apos;UI & UX Designing&apos;: &apos;ui-ux-designing&apos;,
    &apos;E-Commerce Development&apos;: &apos;e-commerce-development&apos;,
    &apos;API Development & Integration&apos;: &apos;api-development&apos;,
    &apos;Front-End Development&apos;: &apos;front-end-development&apos;,
    &apos;Back-End Development&apos;: &apos;back-end-development&apos;,
    &apos;DevOps & Cloud Services&apos;: &apos;devops-cloud-services&apos;
  };
  return paths[title] || title.toLowerCase().replace(/\s+/g, &apos;-&apos;);
}

export default function WebDevelopmentPage() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: &apos;Web App Development&apos;,
      description: &apos;Create powerful and scalable web applications with modern technologies&apos;,
      icon: Globe,
      features: [&apos;Custom Web Applications&apos;, &apos;Progressive Web Apps&apos;, &apos;Cross-platform Solutions&apos;],
      color: &apos;from-blue-500 to-blue-600&apos;,
      stats: { projects: &apos;500+&apos;, clients: &apos;200+&apos;, satisfaction: &apos;98%&apos; }
    },
    {
      id: 2,
      title: &apos;Custom Website Development&apos;,
      description: &apos;Tailored website solutions that match your brand and business needs&apos;,
      icon: Code,
      features: [&apos;Brand-aligned Design&apos;, &apos;Responsive Layouts&apos;, &apos;SEO Optimization&apos;],
      color: &apos;from-purple-500 to-purple-600&apos;,
      stats: { projects: &apos;300+&apos;, clients: &apos;150+&apos;, satisfaction: &apos;99%&apos; }
    },
    {
      id: 3,
      title: &apos;UI & UX Designing&apos;,
      description: &apos;Create intuitive and engaging user experiences&apos;,
      icon: Layout,
      features: [&apos;User Research&apos;, &apos;Wireframing&apos;, &apos;Prototyping&apos;],
      color: &apos;from-pink-500 to-pink-600&apos;,
      stats: { projects: &apos;400+&apos;, clients: &apos;180+&apos;, satisfaction: &apos;97%&apos; }
    },
    {
      id: 4,
      title: &apos;E-Commerce Development&apos;,
      description: &apos;Build powerful online stores and shopping experiences&apos;,
      icon: ShoppingCart,
      features: [&apos;Payment Integration&apos;, &apos;Inventory Management&apos;, &apos;Order Processing&apos;],
      color: &apos;from-green-500 to-green-600&apos;,
      stats: { projects: &apos;250+&apos;, clients: &apos;120+&apos;, satisfaction: &apos;98%&apos; }
    },
    {
      id: 5,
      title: &apos;API Development & Integration&apos;,
      description: &apos;Create and integrate robust APIs for your applications&apos;,
      icon: Network,
      features: [&apos;RESTful APIs&apos;, &apos;GraphQL&apos;, &apos;Third-party Integration&apos;],
      color: &apos;from-yellow-500 to-yellow-600&apos;,
      stats: { projects: &apos;350+&apos;, clients: &apos;160+&apos;, satisfaction: &apos;99%&apos; }
    },
    {
      id: 6,
      title: &apos;Front-End Development&apos;,
      description: &apos;Build modern and responsive user interfaces&apos;,
      icon: Monitor,
      features: [&apos;React/Next.js&apos;, &apos;Vue.js&apos;, &apos;Angular&apos;],
      color: &apos;from-indigo-500 to-indigo-600&apos;,
      stats: { projects: &apos;450+&apos;, clients: &apos;190+&apos;, satisfaction: &apos;98%&apos; }
    },
    {
      id: 7,
      title: &apos;Back-End Development&apos;,
      description: &apos;Develop powerful server-side solutions&apos;,
      icon: Database,
      features: [ &apos;Java&apos;,&apos;Node.js&apos;, &apos;Python&apos;,&apos;framework&apos;],
      color: &apos;from-red-500 to-red-600&apos;,
      stats: { projects: &apos;400+&apos;, clients: &apos;170+&apos;, satisfaction: &apos;99%&apos; }
    },
    {
      id: 8,
      title: &apos;DevOps & Cloud Services&apos;,
      description: &apos;Streamline development and deployment processes&apos;,
      icon: Wrench,
      features: [&apos;CI/CD Pipelines&apos;, &apos;Cloud Deployment&apos;, &apos;Container Orchestration&apos;],
      color: &apos;from-orange-500 to-orange-600&apos;,
      stats: { projects: &apos;300+&apos;, clients: &apos;140+&apos;, satisfaction: &apos;98%&apos; }
    }
  ];

  const stats = [
    { icon: Users, label: &apos;Happy Clients&apos;, value: &apos;1000+&apos; },
    { icon: Award, label: &apos;Projects Completed&apos;, value: &apos;3000+&apos; },
    { icon: Star, label: &apos;Client Satisfaction&apos;, value: &apos;98%&apos; },
    { icon: Clock, label: &apos;Years Experience&apos;, value: &apos;10+&apos; }
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
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 animate-gradient-x&quot;></div>
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
              <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse&quot;></div>
              <Globe className=&quot;w-24 h-24 text-blue-600 animate-float&quot; />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-blue-600&quot;
            >
              Web Development Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=&quot;text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12&quot;
            >
              Transform your digital presence with cutting-edge web solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=&quot;flex justify-center space-x-4&quot;
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300&quot;
              >
                Get Started
              </Link>
              <Link
                href=&quot;#services&quot;
                className=&quot;px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300&quot;
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;
      >
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className=&quot;text-center&quot;
            >
              <div className=&quot;inline-block p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full mb-4&quot;>
                <stat.icon className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-3xl font-bold text-[#1e2942] mb-2&quot;>{stat.value}</h3>
              <p className=&quot;text-gray-600&quot;>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;
      >
        <h2 className=&quot;text-4xl font-bold text-[#1e2942] mb-12 text-center&quot;>Why Choose Us?</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg w-fit mb-4&quot;>
              <Shield className=&quot;w-6 h-6 text-blue-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Enterprise Security</h3>
            <p className=&quot;text-gray-600&quot;>Advanced security measures to protect your data.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4&quot;>
              <Zap className=&quot;w-6 h-6 text-purple-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Fast Performance</h3>
            <p className=&quot;text-gray-600&quot;>Optimized solutions for maximum speed.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4&quot;>
              <CheckCircle2 className=&quot;w-6 h-6 text-green-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Quality Assurance</h3>
            <p className=&quot;text-gray-600&quot;>Rigorous testing and quality checks.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4&quot;>
              <Users className=&quot;w-6 h-6 text-orange-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Expert Support</h3>
            <p className=&quot;text-gray-600&quot;>24/7 dedicated support team.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        id=&quot;services&quot;
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <h2 className=&quot;text-4xl font-bold text-[#1e2942] mb-12 text-center&quot;>Our Services</h2>
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
              <ul className=&quot;space-y-3 mb-6&quot;>
                {service.features.map((feature, idx) => (
                  <li key={idx} className=&quot;flex items-center space-x-2 text-gray-600&quot;>
                    <CheckCircle2 className=&quot;w-4 h-4 text-blue-600&quot; />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className=&quot;grid grid-cols-3 gap-4 mb-6 text-sm&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;font-bold text-[#1e2942]&quot;>{service.stats.projects}</div>
                  <div className=&quot;text-gray-600&quot;>Projects</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;font-bold text-[#1e2942]&quot;>{service.stats.clients}</div>
                  <div className=&quot;text-gray-600&quot;>Clients</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;font-bold text-[#1e2942]&quot;>{service.stats.satisfaction}</div>
                  <div className=&quot;text-gray-600&quot;>Satisfaction</div>
                </div>
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                className=&quot;mt-6 flex items-center text-blue-600 hover:text-blue-700 font-medium group&quot;
              >
                <Link href={`/web-development/${getServicePath(service.title)}`}>
                  <span>Learn more</span>
                  <ArrowRight className=&quot;w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300&quot; />
                </Link>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
          <div className=&quot;relative&quot;>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Digital Presence?</h2>
            <p className=&quot;text-xl text-white/90 mb-8 max-w-2xl mx-auto&quot;>
              Join thousands of satisfied clients who have trusted us with their web development needs.
            </p>
            <Link
              href=&quot;/contact&quot;
              className=&quot;inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300&quot;
            >
              Get Started
              <ArrowRight className=&quot;w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300&quot; />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 