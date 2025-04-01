import { motion } from &quot;framer-motion&quot;
import { Button } from &quot;./ui/button&quot;

const services = [
  {
    title: &quot;App Development&quot;,
    description: &quot;Custom mobile and web applications built with cutting-edge technologies to meet your business needs.&quot;,
    icon: (
      <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z&quot; />
      </svg>
    ),
    features: [
      &quot;iOS & Android Apps&quot;,
      &quot;Cross-platform Solutions&quot;,
      &quot;Progressive Web Apps&quot;,
      &quot;Enterprise Applications&quot;,
      &quot;App Maintenance&quot;
    ]
  },
  {
    title: &quot;Mobile App Development&quot;,
    description: &quot;Native iOS & Android apps, cross-platform solutions using React Native and Flutter, and enterprise mobile applications.&quot;,
    icon: (
      <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z&quot; />
      </svg>
    ),
    features: [
      &quot;Native iOS & Android Development&quot;,
      &quot;Cross-platform Solutions&quot;,
      &quot;App Store Optimization&quot;,
      &quot;Enterprise Mobile Apps&quot;,
      &quot;App Maintenance & Support&quot;
    ]
  },
  {
    title: &quot;Web App Development&quot;,
    description: &quot;Progressive web applications, e-commerce platforms, and custom web solutions using modern technologies.&quot;,
    icon: (
      <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9&quot; />
      </svg>
    ),
    features: [
      &quot;Progressive Web Apps (PWA)&quot;,
      &quot;E-commerce Solutions&quot;,
      &quot;Custom Web Applications&quot;,
      &quot;Enterprise Web Platforms&quot;,
      &quot;Web App Maintenance&quot;
    ]
  },
  {
    title: &quot;UI/UX Design&quot;,
    description: &quot;User-centered design solutions that create engaging and intuitive digital experiences.&quot;,
    icon: (
      <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01&quot; />
      </svg>
    ),
    features: [
      &quot;Mobile App Design&quot;,
      &quot;Web Interface Design&quot;,
      &quot;User Experience Design&quot;,
      &quot;Prototype Development&quot;,
      &quot;Design System Creation&quot;
    ]
  },
  {
    title: &quot;Backend Development&quot;,
    description: &quot;Scalable and secure backend solutions for your applications using modern technologies.&quot;,
    icon: (
      <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01&quot; />
      </svg>
    ),
    features: [
      &quot;API Development&quot;,
      &quot;Database Design&quot;,
      &quot;Cloud Integration&quot;,
      &quot;Security Implementation&quot;,
      &quot;Backend Maintenance&quot;
    ]
  }
]

export function Services() {
  return (
    <section className=&quot;py-20 bg-white&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>
            Our App Development Services
          </h2>
          <p className=&quot;text-lg text-gray-600 max-w-2xl mx-auto&quot;>
            We offer comprehensive app development solutions to help businesses thrive in the digital age. From mobile apps to web applications, we deliver high-quality solutions that drive results.
          </p>
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow&quot;
            >
              <div className=&quot;w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4&quot;>
                {service.icon}
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>
                {service.title}
              </h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                {service.description}
              </p>
              <ul className=&quot;space-y-2 mb-6&quot;>
                {service.features.map((feature) => (
                  <li key={feature} className=&quot;flex items-center text-gray-600&quot;>
                    <svg className=&quot;w-4 h-4 text-blue-500 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className=&quot;w-full bg-blue-600 hover:bg-blue-700 text-white&quot;>
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
        <div className=&quot;text-center mt-12&quot;>
          <Button className=&quot;bg-blue-600 hover:bg-blue-700 text-white&quot;>
            Get Started with App Development
          </Button>
        </div>
      </div>
    </section>
  )
} 