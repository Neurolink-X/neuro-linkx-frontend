import { motion } from 'framer-motion';
import { Button } from './ui/button';

const services = [
  {
    title: 'App Development',
    description: 'Custom mobile and web applications built with cutting-edge technologies to meet your business needs.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
      </svg>
    ),
    features: [
      'iOS & Android Apps',
      'Cross-platform Solutions',
      'Progressive Web Apps',
      'Enterprise Applications',
      'App Maintenance'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Native iOS & Android apps, cross-platform solutions using React Native and Flutter, and enterprise mobile applications.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
      </svg>
    ),
    features: [
      'Native iOS & Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Enterprise Mobile Apps',
      'App Maintenance & Support'
    ]
  },
  {
    title: 'Web App Development',
    description: 'Progressive web applications, e-commerce platforms, and custom web solutions using modern technologies.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
      </svg>
    ),
    features: [
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Custom Web Applications',
      'Enterprise Web Platforms',
      'Web App Maintenance'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
      </svg>
    ),
    features: [
      'Mobile App Design',
      'Web Interface Design',
      'User Experience Design',
      'Prototype Development',
      'Design System Creation'
    ]
  },
  {
    title: 'Backend Development',
    description: 'Scalable and secure backend solutions for your applications using modern technologies.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' />
      </svg>
    ),
    features: [
      'API Development',
      'Database Design',
      'Cloud Integration',
      'Security Implementation',
      'Backend Maintenance'
    ]
  }
]

export function Services() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Our App Development Services
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            We offer comprehensive app development solutions to help businesses thrive in the digital age. From mobile apps to web applications, we deliver high-quality solutions that drive results.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'
            >
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {service.title}
              </h3>
              <p className='text-gray-600 mb-4'>
                {service.description}
              </p>
              <ul className='space-y-2 mb-6'>
                {service.features.map((feature) => (
                  <li key={feature} className='flex items-center text-gray-600'>
                    <svg className='w-4 h-4 text-blue-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white'>
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <Button className='bg-blue-600 hover:bg-blue-700 text-white'>
            Get Started with App Development
          </Button>
        </div>
      </div>
    </section>
  )
} 