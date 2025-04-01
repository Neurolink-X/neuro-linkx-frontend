&apos;use client&apos;

import Image from &quot;next/image&quot;
import { Button } from &quot;@/components/ui/button&quot;
import { motion } from &quot;framer-motion&quot;
import { ArrowRight, Zap, Shield, Database, Cloud, Settings, Target, Workflow, Sparkles, CheckCircle2, ArrowUpRight, BarChart2, Users2, Globe, Clock, Target as TargetIcon } from &quot;lucide-react&quot;

const challenges = [
  {
    title: &quot;Legacy Systems & Infrastructure&quot;,
    icon: <Settings className=&quot;w-6 h-6&quot; />,
    color: &quot;from-blue-500 to-blue-600&quot;,
    description: &quot;Modernize your existing systems for better efficiency&quot;,
    stats: &quot;40% faster operations&quot;
  },
  {
    title: &quot;Data Silos&quot;,
    icon: <Database className=&quot;w-6 h-6&quot; />,
    color: &quot;from-purple-500 to-purple-600&quot;,
    description: &quot;Break down barriers and unify your data&quot;,
    stats: &quot;60% better data access&quot;
  },
  {
    title: &quot;Cybersecurity Threats&quot;,
    icon: <Shield className=&quot;w-6 h-6&quot; />,
    color: &quot;from-red-500 to-red-600&quot;,
    description: &quot;Protect your digital assets with advanced security&quot;,
    stats: &quot;99.9% security&quot;
  },
  {
    title: &quot;Operational Inefficiencies&quot;,
    icon: <Workflow className=&quot;w-6 h-6&quot; />,
    color: &quot;from-green-500 to-green-600&quot;,
    description: &quot;Streamline processes for maximum productivity&quot;,
    stats: &quot;50% cost reduction&quot;
  },
  {
    title: &quot;Tech Debt&quot;,
    icon: <Target className=&quot;w-6 h-6&quot; />,
    color: &quot;from-orange-500 to-orange-600&quot;,
    description: &quot;Address technical debt for sustainable growth&quot;,
    stats: &quot;45% faster development&quot;
  },
  {
    title: &quot;Multi-Cloud Management&quot;,
    icon: <Cloud className=&quot;w-6 h-6&quot; />,
    color: &quot;from-indigo-500 to-indigo-600&quot;,
    description: &quot;Optimize your cloud infrastructure&quot;,
    stats: &quot;35% cost savings&quot;
  },
]

const benefits = [
  {
    title: &quot;Increased Efficiency&quot;,
    icon: <BarChart2 className=&quot;w-5 h-5&quot; />,
    description: &quot;Streamline operations and boost productivity&quot;
  },
  {
    title: &quot;Cost Reduction&quot;,
    icon: <TargetIcon className=&quot;w-5 h-5&quot; />,
    description: &quot;Optimize resources and reduce expenses&quot;
  },
  {
    title: &quot;Better Customer Experience&quot;,
    icon: <Users2 className=&quot;w-5 h-5&quot; />,
    description: &quot;Deliver exceptional service to your customers&quot;
  },
  {
    title: &quot;Enhanced Security&quot;,
    icon: <Shield className=&quot;w-5 h-5&quot; />,
    description: &quot;Protect your business with advanced security&quot;
  },
  {
    title: &quot;Scalable Solutions&quot;,
    icon: <Globe className=&quot;w-5 h-5&quot; />,
    description: &quot;Grow your business with flexible solutions&quot;
  },
  {
    title: &quot;Competitive Advantage&quot;,
    icon: <Clock className=&quot;w-5 h-5&quot; />,
    description: &quot;Stay ahead of your competition&quot;
  }
]

export default function DigitalTransformation() {
  return (
    <section className=&quot;py-20 px-4 min-h-[90vh] bg-gradient-to-b from-white to-gray-50 relative overflow-hidden&quot;>
      {/* Background decorative elements */}
      <div className=&quot;absolute inset-0 overflow-hidden&quot;>
        <div className=&quot;absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl&quot;></div>
      </div>

      <div className=&quot;container mx-auto max-w-7xl relative&quot;>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=&quot;text-center mb-16&quot;
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=&quot;inline-flex items-center gap-2 px-4 py-2 bg-[#1e2942]/5 rounded-full mb-6 border border-[#1e2942]/10&quot;
          >
            <Sparkles className=&quot;w-5 h-5 text-[#1e2942]&quot; />
            <span className=&quot;text-[#1e2942] font-medium&quot;>Digital Excellence</span>
          </motion.div>
          <h2 className=&quot;text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1e2942] to-[#2d3748] bg-clip-text text-transparent&quot;>
            Digital Transformation Services
          </h2>
          <h3 className=&quot;text-2xl md:text-4xl mb-4 text-[#1e2942]&quot;>
            It&apos;s the nimble who triumph, not just the big!
          </h3>
          <p className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;>
            Transform your business with cutting-edge digital solutions
          </p>
        </motion.div>

        <div className=&quot;grid md:grid-cols-2 gap-12 items-center&quot;>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=&quot;relative h-[400px] bg-gradient-to-br from-[#1e2942] to-[#2d3748] rounded-2xl overflow-hidden shadow-2xl group&quot;
          >
            <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10&quot;></div>
            <div className=&quot;absolute inset-0 flex items-center justify-center&quot;>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: &quot;easeInOut&quot;
                }}
              >
                <Zap className=&quot;w-24 h-24 text-white&quot; />
              </motion.div>
            </div>
            <div className=&quot;absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent&quot;>
              <h4 className=&quot;text-white text-xl font-semibold&quot;>Transform Your Business</h4>
              <p className=&quot;text-white/80 mt-2&quot;>Embrace the future of digital innovation</p>
            </div>
            <div className=&quot;absolute top-4 right-4&quot;>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className=&quot;bg-white/10 backdrop-blur-sm p-2 rounded-lg&quot;
              >
                <ArrowUpRight className=&quot;w-6 h-6 text-white&quot; />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=&quot;flex flex-col justify-center items-center&quot;
          >
            <div className=&quot;grid grid-cols-2 gap-4 w-full&quot;>
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-100 hover:border-[#1e2942]/20 hover:bg-[#1e2942]/5&quot;
                >
                  <div className=&quot;absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;
                    style={{
                      background: `linear-gradient(to bottom right, ${challenge.color.split(&apos; &apos;)[1]}, ${challenge.color.split(&apos; &apos;)[3]})`,
                      opacity: &apos;0.1&apos;
                    }}
                  ></div>
                  <div className=&quot;relative flex flex-col items-center text-center&quot;>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${challenge.color} text-white mb-3`}>
                      {challenge.icon}
                    </div>
                    <h3 className=&quot;text-base font-semibold text-[#1e2942] transition-colors duration-300&quot;>
                      {challenge.title}
                    </h3>
                    <p className=&quot;text-sm text-gray-600 mt-2 transition-colors duration-300&quot;>
                      {challenge.description}
                    </p>
                    <div className=&quot;mt-3 px-3 py-1 bg-[#1e2942]/5 rounded-full group-hover:bg-[#1e2942]/10 transition-colors duration-300&quot;>
                      <p className=&quot;text-sm font-medium text-[#1e2942] transition-colors duration-300&quot;>
                        {challenge.stats}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className=&quot;w-full mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100&quot;>
              <h4 className=&quot;text-lg font-semibold text-[#1e2942] mb-4&quot;>Key Benefits</h4>
              <div className=&quot;grid grid-cols-2 gap-4&quot;>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className=&quot;flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors&quot;
                  >
                    <div className=&quot;p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white&quot;>
                      {benefit.icon}
                    </div>
                    <div>
                      <p className=&quot;text-sm font-medium text-[#1e2942]&quot;>{benefit.title}</p>
                      <p className=&quot;text-xs text-gray-500 mt-1&quot;>{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className=&quot;w-full md:w-1/2 mx-auto my-8&quot;>
              <Button 
                className=&quot;w-full bg-gradient-to-r from-[#1e2942] to-[#2d3748] text-white px-8 py-6 rounded-full font-medium hover:from-[#2d3748] hover:to-[#1e2942] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden&quot;
              >
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity&quot;></div>
                <span className=&quot;relative&quot;>Achieve Digital Excellence</span>
                <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform relative&quot; />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

