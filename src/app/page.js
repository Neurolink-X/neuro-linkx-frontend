import Header from &quot;@/components/layout/header&quot;
import Hero from &quot;@/components/sections/hero&quot;
import Services from &quot;@/components/sections/services&quot;
import DigitalTransformation from &quot;@/components/sections/digital-transformation&quot;
import Industries from &quot;@/components/sections/industries&quot;
import CompanyStats from &quot;@/components/sections/company-stats&quot;
//import Clients from &quot;@/components/sections/clients&quot;
import Resources from &quot;@/components/sections/resources&quot;
import CompanyCulture from &quot;@/components/sections/company-culture&quot;
import ChatWidget from &quot;@/components/chat-widget&quot;
import WhatMakesUs from &quot;@/components/sections/what-make-us&quot;

import Culture from &quot;@/components/sections/culture&quot;
import Features from &quot;@/components/sections/features&quot;

import Performance from &quot;@/components/sections/performance&quot;
import Security from &quot;@/components/sections/security&quot;
import Stats from &quot;@/components/sections/stats&quot;
import Terminal from &quot;@/components/sections/terminal&quot;
import Workflow from &quot;@/components/sections/workflow&quot;

import Footer from &quot;@/components/layout/footer&quot;
import Testimonials from &quot;@/components/sections/testimonials&quot;

export default function HomePage() {
  return (
    <div className=&quot;min-h-screen bg-background w-full relative&quot;>
      <main>
        <Header />
        <Hero />
        <Services />
        <DigitalTransformation />
        <Industries />
        <CompanyStats /> 
        <Testimonials />
        <Resources />
        <Terminal />
        <Workflow />
        <CompanyCulture />
        <WhatMakesUs />
      </main>
      <ChatWidget />
      <Footer />
    </div>
  )
}