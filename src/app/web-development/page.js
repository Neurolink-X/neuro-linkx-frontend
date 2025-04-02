'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import Link from 'next/link';

function getServicePath(title) {
  const paths = {
    'Web App Development': 'web-app-development',
    'Custom Website Development': 'custom-website',
    'UI & UX Designing': 'ui-ux-designing',
    'E-Commerce Development': 'e-commerce-development',
    'API Development & Integration': 'api-development',
    'Front-End Development': 'front-end-development',
    'Back-End Development': 'back-end-development',
    'DevOps & Cloud Services': 'devops-cloud-services'
  };
  return paths[title] || title.toLowerCase().replace(/\s+/g, '-');
}

export default function WebDevelopmentPage() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Web App Development',
      description: 'Create powerful and scalable web applications with modern technologies',
      icon: Globe,
      features: ['Custom Web Applications', 'Progressive Web Apps', 'Cross-platform Solutions'],
      color: 'from-blue-500 to-blue-600',
      stats: { projects: '500+', clients: '200+', satisfaction: '98%' }
    },
    {
      id: 2,
      title: 'Custom Website Development',
      description: 'Tailored website solutions that match your brand and business needs',
      icon: Code,
      features: ['Brand-aligned Design', 'Responsive Layouts', 'SEO Optimization'],
      color: 'from-purple-500 to-purple-600',
      stats: { projects: '300+', clients: '150+', satisfaction: '99%' }
    },
    {
      id: 3,
      title: 'UI & UX Designing',
      description: 'Create intuitive and engaging user experiences',
      icon: Layout,
      features: ['User Research', 'Wireframing', 'Prototyping'],
      color: 'from-pink-500 to-pink-600',
      stats: { projects: '400+', clients: '180+', satisfaction: '97%' }
    },
    {
      id: 4,
      title: 'E-Commerce Development',
      description: 'Build powerful online stores and shopping experiences',
      icon: ShoppingCart,
      features: ['Payment Integration', 'Inventory Management', 'Order Processing'],
      color: 'from-green-500 to-green-600',
      stats: { projects: '250+', clients: '120+', satisfaction: '98%' }
    },
    {
      id: 5,
      title: 'API Development & Integration',
      description: 'Create and integrate robust APIs for your applications',
      icon: Network,
      features: ['RESTful APIs', 'GraphQL', 'Third-party Integration'],
      color: 'from-yellow-500 to-yellow-600',
      stats: { projects: '350+', clients: '160+', satisfaction: '99%' }
    },
    {
      id: 6,
      title: 'Front-End Development',
      description: 'Build modern and responsive user interfaces',
      icon: Monitor,
      features: ['React/Next.js', 'Vue.js', 'Angular'],
      color: 'from-indigo-500 to-indigo-600',
      stats: { projects: '450+', clients: '190+', satisfaction: '98%' }
    },
    {
      id: 7,
      title: 'Back-End Development',
      description: 'Develop powerful server-side solutions',
      icon: Database,
      features: ['Java', 'Node.js', 'Python', 'framework'],
      color: 'from-red-500 to-red-600',
      stats: { projects: '400+', clients: '170+', satisfaction: '99%' }
    },
    {
      id: 8,
      title: 'DevOps & Cloud Services',
      description: 'Streamline development and deployment processes',
      icon: Wrench,
      features: ['CI/CD Pipelines', 'Cloud Deployment', 'Container Orchestration'],
      color: 'from-orange-500 to-orange-600',
      stats: { projects: '300+', clients: '140+', satisfaction: '98%' }
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '1000+' },
    { icon: Award, label: 'Projects Completed', value: '3000+' },
    { icon: Star, label: 'Client Satisfaction', value: '98%' },
    { icon: Clock, label: 'Years Experience', value: '10+' }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative overflow-hidden min-h-screen flex items-center'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 animate-gradient-x'></div>
        <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'
        >
          <div className='text-center'>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className='inline-block mb-8 relative'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse'></div>
              <Globe className='w-24 h-24 text-blue-600 animate-float' />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-blue-600'
            >
              Web Development Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
            >
              Transform your digital presence with cutting-edge web solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex justify-center space-x-4'
            >
              <Link
                href='/contact'
                className='px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300'
              >
                Get Started
              </Link>
              <Link
                href='#services'
                className='px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300'
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
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className='text-center'
            >
              <div className='inline-block p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full mb-4'>
                <stat.icon className='w-8 h-8 text-blue-600' />
              </div>
              <h3 className='text-3xl font-bold text-[#1e2942] mb-2'>{stat.value}</h3>
              <p className='text-gray-600'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'
      >
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Why Choose Us?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg w-fit mb-4'>
              <Shield className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Enterprise Security</h3>
            <p className='text-gray-600'>Advanced security measures to protect your data.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4'>
              <Zap className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Fast Performance</h3>
            <p className='text-gray-600'>Optimized solutions for maximum speed.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg w-fit mb-4'>
              <CheckCircle2 className='w-6 h-6 text-green-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Quality Assurance</h3>
            <p className='text-gray-600'>Rigorous testing and quality checks.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <div className='p-3 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg w-fit mb-4'>
              <Users className='w-6 h-6 text-orange-600' />
            </div>
            <h3 className='text-lg font-semibold text-[#1e2942] mb-2'>Expert Support</h3>
            <p className='text-gray-600'>24/7 dedicated support team.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        id='services'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <h2 className='text-4xl font-bold text-[#1e2942] mb-12 text-center'>Our Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setActiveService(service.id)}
              onHoverEnd={() => setActiveService(null)}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
            >
              <div className='flex items-center space-x-3 mb-6'>
                <div className={`p-2 bg-gradient-to-br ${service.color} rounded-lg text-white`}>
                  <service.icon className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-semibold text-[#1e2942]'>{service.title}</h3>
              </div>
              <p className='text-gray-600 mb-6'>{service.description}</p>
              <ul className='space-y-3 mb-6'>
                {service.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center space-x-2 text-gray-600'>
                    <CheckCircle2 className='w-4 h-4 text-blue-600' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className='grid grid-cols-3 gap-4 mb-6 text-sm'>
                <div className='text-center'>
                  <div className='font-bold text-[#1e2942]'>{service.stats.projects}</div>
                  <div className='text-gray-600'>Projects</div>
                </div>
                <div className='text-center'>
                  <div className='font-bold text-[#1e2942]'>{service.stats.clients}</div>
                  <div className='text-gray-600'>Clients</div>
                </div>
                <div className='text-center'>
                  <div className='font-bold text-[#1e2942]'>{service.stats.satisfaction}</div>
                  <div className='text-gray-600'>Satisfaction</div>
                </div>
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                className='mt-6 flex items-center text-blue-600 hover:text-blue-700 font-medium group'
              >
                <Link href={`/web-development/${getServicePath(service.title)}`}>
                  <span>Learn more</span>
                  <ArrowRight className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
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
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'
      >
        <div className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-10'></div>
          <div className='relative'>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Transform Your Digital Presence?</h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Join thousands of satisfied clients who have trusted us with their web development needs.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300'
            >
              Get Started
              <ArrowRight className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 