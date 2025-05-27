'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Menu, X, Stars } from 'lucide-react'

// Define dropdown content for each menu item
const cloudServicesItems = [
  {
    title: 'Cloud Hosting',
    href: '/cloud-consultation',
    description: 'End-to-end cloud hosting solutions for your applications',
  },
  {
    title: 'Server Management',
    href: '/cloud-consultation',
    description: 'Professional server management and maintenance services',
  },
  {
    title: 'Data Backup',
    href: '/cloud-consultation',
    description: 'Secure and automated data backup solutions',
  },
  {
    title: 'Cloud Security',
    href: '/cloud-consultation',
    description: 'Comprehensive cloud security and compliance services',
  },
]

const webDevelopmentItems = [
  {
    title: 'Web App Development',
    href: '/web-development',
    description: 'Create powerful and scalable web applications with modern technologies',
  },
  {
    title: 'Custom website development',
    href: '/web-development',
    description: 'Tailored website solutions that match your brand and business needs',
  },
  {
    title: 'Ui & Ux Designing',
    href: '/web-development',
    description: 'Create intuitive and engaging user experiences',
  },
  {
    title: 'E- Commerce Development',
    href: '/web-development',
    description: 'Build powerful online stores and shopping experiences',
  },
  {
    title: 'Api Development & Integration',
    href: '/web-development',
    description: 'Create and integrate robust APIs for your applications',
  },
  {
    title: 'Front-End Development',
    href: '/web-development',
    description: 'Build modern and responsive user interfaces',
  },
  {
    title: 'Back-End Development',
    href: '/web-development',
    description: 'Develop powerful server-side solutions',
  },
  {
    title: 'DevOps & Cloud Services',
    href: '/web-development',
    description: 'Streamline development and deployment processes',
  },
]

const aimlSolutionsItems = [
  {
    title: 'Custom AI Development',
    href: '/ai-ml-solutions',
    description: 'Tailored AI solutions designed for your specific business needs',
  },
  {
    title: 'AI Game Development',
    href: '/ai-ml-solutions',
    description: 'Create immersive gaming experiences with AI-powered features',
  },
  {
    title: 'AI Chatbot Development',
    href: '/ai-ml-solutions',
    description: 'Build intelligent conversational agents for customer service',
  },
  {
    title: 'Custom Machine Learning Development Services',
    href: '/ai-ml-solutions',
    description: 'Develop and deploy custom ML models for your data',
  },
  {
    title: 'Ai Software Development',
    href: '/ai-ml-solutions',
    description: 'Create AI-powered software solutions for various industries',
  },
  {
    title: 'Predictive Analytics Solutions',
    href: '/ai-ml-solutions',
    description: 'Leverage data to make informed business decisions',
  },
  {
    title: 'Deep Learning Development  services',
    href: '/ai-ml-solutions',
    description: 'Implement advanced deep learning solutions',
  },
  {
    title: 'Ai consultancy services',
    href: '/ai-ml-solutions',
    description: 'Expert guidance for AI implementation and strategy',
  },
]

const digitalMarketingItems = [
  {
    title: 'Meta ads',
    href: '/digital-marketing',
    description: 'Financial technology solutions for banks and financial institutions',
  },
  {
    title: 'Google ads',
    href: '/digital-marketing',
    description: 'Healthcare technology solutions for providers and patients',
  },
  {
    title: 'Instagram ads',
    href: '/digital-marketing',
    description: 'Sustainable technology solutions for a greener future',
  },
  {
    title: 'SEO',
    href: '/digital-marketing',
    description: 'Human resources technology solutions for better workforce management',
  },
]

// Component for dropdown menu items
const ListItem = ({ title, href, description }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900'
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-slate-500'>{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [pullRefresh, setPullRefresh] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      // Pull down to show header
      if (currentScrollY < 0 || currentScrollY < lastScrollY - 20) {
        setVisible(true)
        setPullRefresh(currentScrollY < 0)
      }
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY + 10 && currentScrollY > 100) {
        setVisible(false)
        setPullRefresh(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${pullRefresh ? 'shadow-lg' : ''} bg-gradient-to-r from-[#1e2942] to-[#2a3a5f] text-white backdrop-blur-sm border-b border-white/5`}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          <Link href='/'>
            <div className='flex-shrink-0 group'>
              <div className='relative'>
                <div className='absolute -inset-1 bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
                <div className='relative flex items-center'>
                  <span className='font-extrabold text-3xl bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 text-transparent bg-clip-text font-mono tracking-tight'>
                    NeuroLinkX
                  </span>
                  <div className='ml-2 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-[#ff3b30] animate-pulse'></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className='hidden lg:flex'>
            <NavigationMenuList className='gap-2'>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-transparent text-white/90 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 font-medium'>
                  Cloud Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10'>
                    {cloudServicesItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-transparent text-white/90 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 font-medium'>
                  Web Development
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10'>
                    {webDevelopmentItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-transparent text-white/90 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 font-medium'>
                  AI & ML Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10'>
                    {aimlSolutionsItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-transparent text-white/90 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 font-medium'>
                  Digital Marketing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10'>
                    {digitalMarketingItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className='flex items-center gap-4'>
            <Link
              href='/ai-consultation'
              className='hidden md:flex md:flex-row py-[10px] px-6 bg-gradient-to-r from-orange-500 to-[#ff3b30] text-white text-nowrap rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 font-medium'
            >
              Let&apos;s Talk AI
              <Stars className='ml-2 text-sm animate-pulse' />
            </Link>
            <Link 
              href='/contact' 
              className='py-2.5 px-6 rounded-lg text-lg text-nowrap bg-white/5  max-sm:px-2 hover:bg-white/10 text-white font-medium transition-all duration-300 border border-white/10 hover:border-white/20'
            >
              Contact Us
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' className='lg:hidden p-2 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[350px] p-0 bg-gradient-to-b from-[#1e2942] to-[#2a3a5f] border-l border-white/5'>
                <div className='flex flex-col h-full'>
                  <div className='flex items-center justify-between p-4 border-b border-white/5'>
                    <Link href='/'>
                      <div className='flex-shrink-0' onClick={() => setIsOpen(false)}>
                        <div className='relative'>
                          <div className='absolute -inset-1 bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 rounded-lg blur opacity-30'></div>
                          <div className='relative'>
                            <span className='font-extrabold text-xl bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 text-transparent bg-clip-text font-mono'>
                              NeuroLinkX
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => setIsOpen(false)}
                      className='text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300'
                    >
                      <X className='h-5 w-5' />
                    </Button>
                  </div>

                  <div className='flex-1 overflow-auto py-4'>
                    <Accordion type='single' collapsible className='w-full'>
                      <AccordionItem value='product-engineering' className='border-white/5'>
                        <AccordionTrigger className='px-4 text-white/90 hover:text-white transition-colors'>Cloud Services</AccordionTrigger>
                        <AccordionContent>
                          <div className='flex flex-col space-y-2 pl-4'>
                            {cloudServicesItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className='py-2 px-4 hover:bg-white/5 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300'
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value='cloud-devops' className='border-white/5'>
                        <AccordionTrigger className='px-4 text-white/90 hover:text-white transition-colors'>Web Development</AccordionTrigger>
                        <AccordionContent>
                          <div className='flex flex-col space-y-2 pl-4'>
                            {webDevelopmentItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className='py-2 px-4 hover:bg-white/5 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300'
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value='enterprise-practices' className='border-white/5'>
                        <AccordionTrigger className='px-4 text-white/90 hover:text-white transition-colors'>AI & ML Solutions</AccordionTrigger>
                        <AccordionContent>
                          <div className='flex flex-col space-y-2 pl-4'>
                            {aimlSolutionsItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className='py-2 px-4 hover:bg-white/5 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300'
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value='industries' className='border-white/5'>
                        <AccordionTrigger className='px-4 text-white/90 hover:text-white transition-colors'>Digital Marketing</AccordionTrigger>
                        <AccordionContent>
                          <div className='flex flex-col space-y-2 pl-4'>
                            {digitalMarketingItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className='py-2 px-4 hover:bg-white/5 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300'
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className='p-4 border-t border-white/5 space-y-4'>
                    <Link 
                      href='/ai-consultation'
                      className='w-full pl-2 pr-2 bg-gradient-to-r from-orange-500 to-[#ff3b30] text-white rounded-lg  hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 font-medium py-2.5 text-center'
                      onClick={() => setIsOpen(false)}
                    >
                      Let&apos;s Talk AI
                    </Link>
                    <Link 
                      href='/contact' 
                      className='w-full'
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant='outline' className='w-full rounded-lg bg-white/5 text-white mt-5 border-white/10 hover:border-white/20 transition-all duration-300'>
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

