&quot;use client&quot;

import { useState, useEffect } from &quot;react&quot;
import Link from &quot;next/link&quot;
import { Button } from &quot;@/components/ui/button&quot;
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from &quot;@/components/ui/navigation-menu&quot;
import { Sheet, SheetContent, SheetTrigger } from &quot;@/components/ui/sheet&quot;
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from &quot;@/components/ui/accordion&quot;
import { Menu, X, Stars } from &quot;lucide-react&quot;

// Define dropdown content for each menu item
const cloudServicesItems = [
  {
    title: &quot;Cloud Hosting&quot;,
    href: &quot;/cloud-consultation&quot;,
    description: &quot;End-to-end cloud hosting solutions for your applications&quot;,
  },
  {
    title: &quot;Server Management&quot;,
    href: &quot;/cloud-consultation&quot;,
    description: &quot;Professional server management and maintenance services&quot;,
  },
  {
    title: &quot;Data Backup&quot;,
    href: &quot;/cloud-consultation&quot;,
    description: &quot;Secure and automated data backup solutions&quot;,
  },
  {
    title: &quot;Cloud Security&quot;,
    href: &quot;/cloud-consultation&quot;,
    description: &quot;Comprehensive cloud security and compliance services&quot;,
  },
]

const webDevelopmentItems = [
  {
    title: &quot;Web App Development&quot;,
    href: &quot;/web-development&quot;,
    description: &quot;Create powerful and scalable web applications with modern technologies&quot;,
  },
  {
    title: &quot;Custom website development&quot;,
    href: &quot;/web-development&quot;,
    description: &quot;Tailored website solutions that match your brand and business needs&quot;,
  },
  {
    title: &quot;Ui & Ux Designing&quot;,
    href: &quot;/web-development&quot;,
    description: &quot;Create intuitive and engaging user experiences&quot;,
  },
  {
    title: &quot;E- Commerce Development&quot;,
    href: &quot;/web-development&quot;,
    description: &quot;Build powerful online stores and shopping experiences&quot;,
  },
  {
    title: &quot;Api Development & Integration&quot;,
    href: &quot;/web-development&quot;,
    description: &quot;Create and integrate robust APIs for your applications&quot;,
  },
  {
    title: &quot;Front-End Development&quot;,
    href: &quot;/web-development&quot;,
    description: &quot;Build modern and responsive user interfaces&quot;,
  },
  {
    title: &quot;Back-End Development&quot;,
    href: &quot;/web-development&quot;,
    description: &quot;Develop powerful server-side solutions&quot;,
  },
  {
    title: &quot;DevOps & Cloud Services&quot;,
    href: &quot;/web-development&quot;,
    description: &quot;Streamline development and deployment processes&quot;,
  },
]

const aimlSolutionsItems = [
  {
    title: &quot;Custom AI Development&quot;,
    href: &quot;/ai-ml-solutions&quot;,
    description: &quot;Tailored AI solutions designed for your specific business needs&quot;,
  },
  {
    title: &quot;AI Game Development&quot;,
    href: &quot;/ai-ml-solutions&quot;,
    description: &quot;Create immersive gaming experiences with AI-powered features&quot;,
  },
  {
    title: &quot;AI Chatbot Development&quot;,
    href: &quot;/ai-ml-solutions&quot;,
    description: &quot;Build intelligent conversational agents for customer service&quot;,
  },
  {
    title: &quot;Custom Machine Learning Development Services&quot;,
    href: &quot;/ai-ml-solutions&quot;,
    description: &quot;Develop and deploy custom ML models for your data&quot;,
  },
  {
    title: &quot;Ai Software Development&quot;,
    href: &quot;/ai-ml-solutions&quot;,
    description: &quot;Create AI-powered software solutions for various industries&quot;,
  },
  {
    title: &quot;Predictive Analytics Solutions&quot;,
    href: &quot;/ai-ml-solutions&quot;,
    description: &quot;Leverage data to make informed business decisions&quot;,
  },
  {
    title: &quot;Deep Learning Development  services&quot;,
    href: &quot;/ai-ml-solutions&quot;,
    description: &quot;Implement advanced deep learning solutions&quot;,
  },
  {
    title: &quot;Ai consultancy services&quot;,
    href: &quot;/ai-ml-solutions&quot;,
    description: &quot;Expert guidance for AI implementation and strategy&quot;,
  },
]

const digitalMarketingItems = [
  {
    title: &quot;Meta ads&quot;,
    href: &quot;/digital-marketing&quot;,
    description: &quot;Financial technology solutions for banks and financial institutions&quot;,
  },
  {
    title: &quot;Google ads&quot;,
    href: &quot;/digital-marketing&quot;,
    description: &quot;Healthcare technology solutions for providers and patients&quot;,
  },
  {
    title: &quot;Instagram ads&quot;,
    href: &quot;/digital-marketing&quot;,
    description: &quot;Sustainable technology solutions for a greener future&quot;,
  },
  {
    title: &quot;SEO&quot;,
    href: &quot;/digital-marketing&quot;,
    description: &quot;Human resources technology solutions for better workforce management&quot;,
  },
]

// Component for dropdown menu items
const ListItem = ({ title, href, description }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className=&quot;block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900&quot;
        >
          <div className=&quot;text-sm font-medium leading-none&quot;>{title}</div>
          <p className=&quot;line-clamp-2 text-sm leading-snug text-slate-500&quot;>{description}</p>
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

    window.addEventListener(&quot;scroll&quot;, controlNavbar)

    // Cleanup
    return () => {
      window.removeEventListener(&quot;scroll&quot;, controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        visible ? &quot;translate-y-0&quot; : &quot;-translate-y-full&quot;
      } ${pullRefresh ? &quot;shadow-lg&quot; : &quot;&quot;} bg-gradient-to-r from-[#1e2942] to-[#2a3a5f] text-white backdrop-blur-sm border-b border-white/5`}
    >
      <div className=&quot;max-w-7xl mx-auto px-4&quot;>
        <div className=&quot;flex items-center justify-between h-20&quot;>
          <Link href=&quot;/&quot; className=&quot;flex-shrink-0 group&quot;>
            <div className=&quot;relative&quot;>
              <div className=&quot;absolute -inset-1 bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200&quot;></div>
              <div className=&quot;relative flex items-center&quot;>
                <span className=&quot;font-extrabold text-3xl bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 text-transparent bg-clip-text font-mono tracking-tight&quot;>
                  NeuroLink
                </span>
                <div className=&quot;ml-2 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-[#ff3b30] animate-pulse&quot;></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className=&quot;hidden lg:flex&quot;>
            <NavigationMenuList className=&quot;gap-2&quot;>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=&quot;bg-transparent text-white/90 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 font-medium&quot;>
                  Cloud Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=&quot;grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10&quot;>
                    {cloudServicesItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=&quot;bg-transparent text-white/90 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 font-medium&quot;>
                  Web Development
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=&quot;grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10&quot;>
                    {webDevelopmentItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=&quot;bg-transparent text-white/90 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 font-medium&quot;>
                  AI & ML Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=&quot;grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10&quot;>
                    {aimlSolutionsItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=&quot;bg-transparent text-white/90 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 font-medium&quot;>
                  Digital Marketing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=&quot;grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10&quot;>
                    {digitalMarketingItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className=&quot;flex items-center gap-4&quot;>
            <Link
              href=&quot;/ai-consultation&quot;
              className=&quot;hidden md:flex md:flex-row py-[10px] px-6 bg-gradient-to-r from-orange-500 to-[#ff3b30] text-white text-nowrap rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 font-medium&quot;
            >
              Let&apos;s Talk AI
              <Stars className=&quot;ml-2 text-sm animate-pulse&quot; />
            </Link>
            <Link 
              href=&quot;/contact&quot; 
              className=&quot;py-2.5 px-6 rounded-lg text-lg text-nowrap bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300 border border-white/10 hover:border-white/20&quot;
            >
              Contact Us
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant=&quot;ghost&quot; className=&quot;lg:hidden p-2 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300&quot;>
                  <Menu className=&quot;h-6 w-6&quot; />
                </Button>
              </SheetTrigger>
              <SheetContent side=&quot;right&quot; className=&quot;w-[300px] sm:w-[350px] p-0 bg-gradient-to-b from-[#1e2942] to-[#2a3a5f] border-l border-white/5&quot;>
                <div className=&quot;flex flex-col h-full&quot;>
                  <div className=&quot;flex items-center justify-between p-4 border-b border-white/5&quot;>
                    <Link href=&quot;/&quot; className=&quot;flex-shrink-0&quot; onClick={() => setIsOpen(false)}>
                      <div className=&quot;relative&quot;>
                        <div className=&quot;absolute -inset-1 bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 rounded-lg blur opacity-30&quot;></div>
                        <div className=&quot;relative&quot;>
                          <span className=&quot;font-extrabold text-xl bg-gradient-to-r from-orange-500 via-[#ff3b30] to-orange-500 text-transparent bg-clip-text font-mono&quot;>
                            NeuroLink
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Button
                      variant=&quot;ghost&quot;
                      size=&quot;icon&quot;
                      onClick={() => setIsOpen(false)}
                      className=&quot;text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300&quot;
                    >
                      <X className=&quot;h-5 w-5&quot; />
                    </Button>
                  </div>

                  <div className=&quot;flex-1 overflow-auto py-4&quot;>
                    <Accordion type=&quot;single&quot; collapsible className=&quot;w-full&quot;>
                      <AccordionItem value=&quot;product-engineering&quot; className=&quot;border-white/5&quot;>
                        <AccordionTrigger className=&quot;px-4 text-white/90 hover:text-white transition-colors&quot;>Cloud Services</AccordionTrigger>
                        <AccordionContent>
                          <div className=&quot;flex flex-col space-y-2 pl-4&quot;>
                            {cloudServicesItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className=&quot;py-2 px-4 hover:bg-white/5 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300&quot;
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value=&quot;cloud-devops&quot; className=&quot;border-white/5&quot;>
                        <AccordionTrigger className=&quot;px-4 text-white/90 hover:text-white transition-colors&quot;>Web Development</AccordionTrigger>
                        <AccordionContent>
                          <div className=&quot;flex flex-col space-y-2 pl-4&quot;>
                            {webDevelopmentItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className=&quot;py-2 px-4 hover:bg-white/5 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300&quot;
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value=&quot;enterprise-practices&quot; className=&quot;border-white/5&quot;>
                        <AccordionTrigger className=&quot;px-4 text-white/90 hover:text-white transition-colors&quot;>AI & ML Solutions</AccordionTrigger>
                        <AccordionContent>
                          <div className=&quot;flex flex-col space-y-2 pl-4&quot;>
                            {aimlSolutionsItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className=&quot;py-2 px-4 hover:bg-white/5 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300&quot;
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value=&quot;industries&quot; className=&quot;border-white/5&quot;>
                        <AccordionTrigger className=&quot;px-4 text-white/90 hover:text-white transition-colors&quot;>Digital Marketing</AccordionTrigger>
                        <AccordionContent>
                          <div className=&quot;flex flex-col space-y-2 pl-4&quot;>
                            {digitalMarketingItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className=&quot;py-2 px-4 hover:bg-white/5 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300&quot;
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

                  <div className=&quot;p-4 border-t border-white/5 space-y-4&quot;>
                    <Link 
                      href=&quot;/ai-consultation&quot;
                      className=&quot;w-full bg-gradient-to-r from-orange-500 to-[#ff3b30] text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 font-medium py-2.5 text-center&quot;
                      onClick={() => setIsOpen(false)}
                    >
                      Let&apos;s Talk AI
                    </Link>
                    <Link 
                      href=&quot;/contact&quot; 
                      className=&quot;w-full&quot;
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant=&quot;outline&quot; className=&quot;w-full rounded-lg hover:bg-white/5 text-white border-white/10 hover:border-white/20 transition-all duration-300&quot;>
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

