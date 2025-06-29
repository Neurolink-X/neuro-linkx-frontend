import Header from '@/components/layout/header'
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import DigitalTransformation from '@/components/sections/digital-transformation'
import Industries from '@/components/sections/industries'
import CompanyStats from '@/components/sections/company-stats'
// import Clients from '@/components/sections/clients'
import Resources from '@/components/sections/resources'
import CompanyCulture from '@/components/sections/company-culture'
import ChatWidget from '@/components/chat-widget'
import WhatMakesUs from '@/components/sections/what-make-us'

import Culture from '@/components/sections/culture'
import Features from '@/components/sections/features'

import Performance from '@/components/sections/performance'
import Security from '@/components/sections/security'
import Stats from '@/components/sections/stats'
import Terminal from '@/components/sections/terminal'
import Workflow from '@/components/sections/workflow'
import ClientReview from '@/components/sections/ClientReview'
import Footer from '@/components/layout/footer'
import Testimonials from '@/components/sections/testimonials'


export default function HomePage() {
  return (
    <div className='min-h-screen bg-background w-full relative'>
      <main>
        <Header />
        <Hero />
        <Services />
        <DigitalTransformation />
        <Industries />
        <CompanyStats /> 
        <Testimonials />
        <ClientReview />
        <Resources />
        <Terminal />
        <Workflow />
        <CompanyCulture />
        <WhatMakesUs />
      </main>
      <div className='max-md:hidden'>
      <ChatWidget />
      </div>
      <Footer />
    </div>
  )
}