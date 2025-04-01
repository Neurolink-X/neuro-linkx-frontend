&quot;use client&quot;

import { motion } from &quot;framer-motion&quot;
import FlowingLinesSVG from &quot;../ui/flowing-lines&quot;

export default function CompanyStats() {
  return (
    <section className=&quot;w-full py-16 md:py-24 lg:py-32 bg-[#fef4f3] relative overflow-hidden&quot;>
      <div className=&quot;container mx-auto px-4 relative z-10&quot;>
        <motion.div
          className=&quot;max-w-5xl mx-auto mb-16&quot;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className=&quot;text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 leading-tight&quot;>
            <span className=&quot;bg-gradient-to-r from-[#1e2942] to-[#2a3a5f] bg-clip-text text-transparent&quot;>
              Turning Bold Product Dreams
            </span>
            <br />
            <span className=&quot;bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent&quot;>
              into Market Readiness
            </span>
            <br />
            <span className=&quot;text-[#1e2942]&quot;>With Enterprise AI Development Services</span>
          </h1>
          <p className=&quot;text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto&quot;>
            Delivering innovative solutions with cutting-edge technology since 2009
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto&quot;>
          <motion.div
            className=&quot;h-40 text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#f8f9fc] shadow-sm border border-gray-100 my-auto&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className=&quot;text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3b30] my-2&quot;>400+</h2>
            <p className=&quot;text-gray-600 font-medium&quot;>PROEngineers</p>
          </motion.div>

          <motion.div
            className=&quot;h-40 text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#f8f9fc] shadow-sm border border-gray-100 my-auto&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className=&quot;text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3b30] my-2&quot;>3M+</h2>
            <p className=&quot;text-gray-600 font-medium&quot;>Man Hours</p>
          </motion.div>

          <motion.div
            className=&quot;h-40 text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#f8f9fc] shadow-sm border border-gray-100 my-auto&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className=&quot;text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3b30] my-2&quot;>60+</h2>
            <p className=&quot;text-gray-600 font-medium&quot;>
              Product Lifecycles Delivered 
            </p>
          </motion.div>

          <motion.div
            className=&quot;h-40 text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#f8f9fc] shadow-sm border border-gray-100 my-auto&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className=&quot;text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3b30] my-2&quot;>40+</h2>
            <p className=&quot;text-gray-600 font-medium&quot;>Live Projects</p>
          </motion.div>
        </div>

        <motion.div
          className=&quot;flex justify-center&quot;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className=&quot;bg-[#ff3b30] text-white text-nowrap px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-white hover:text-[#ff3b30] transition-colors&quot;>
              Get Launch Ready | Talk to Experts
          </button>
        </motion.div>
      </div>

      <div className=&quot;absolute top-0 right-0 h-full z-0 opacity-50 overflow-hidden&quot;>
        {/* <img 
          src=&quot;/images/lines.avif&quot;
        /> */}
      </div>
    </section>
  )
}

