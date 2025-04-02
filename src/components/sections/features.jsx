import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Shield, Cloud, Code } from 'lucide-react'

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built with performance in mind for the best user experience',
    icon: <Zap className='w-6 h-6' />,
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security to protect your data',
    icon: <Shield className='w-6 h-6' />,
  },
  {
    title: 'Cloud Ready',
    description: 'Deploy anywhere with cloud-native architecture',
    icon: <Cloud className='w-6 h-6' />,
  },
  {
    title: 'Developer First',
    description: 'Built for developers with modern tooling',
    icon: <Code className='w-6 h-6' />,
  },
]

export default function Features() {
  return (
    <section className='py-20 px-4'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature) => (
            <Card key={feature.title} className='border-none shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <CardHeader>
                <div className='p-2 w-fit rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4'>
                  {feature.icon}
                </div>
                <CardTitle className='text-xl'>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

