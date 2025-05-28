'use client'

import { motion } from 'framer-motion'

const employeeQuotes = [
  {
    quote: 'This is a very employee-friendly company.',
    position: 'Senior Software Engineer II',
  },
  {
    quote: 'Work-life balance is excellent.',
    position: 'DevOps Engineer',
  },
  {
    quote: 'The policies here truly support people.',
    position: 'Software Quality Manager',
  },
  {
    quote: 'They have realistic expectations from employees.',
    position: 'Associate Software Engineer',
  },
]

export default function CompanyCulture() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-white via-[#f0f4fb] to-[#d8e5fa] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start relative">

          {/* Decorative Quote Mark */}
          <motion.div
            className="absolute text-[#ff3b30]/10 text-[160px] top-6 left-4 select-none hidden md:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            &ldquo;
          </motion.div>

          {/* Quotes Section */}
          <motion.div
            className="space-y-6 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {employeeQuotes.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-[#1e2942] font-semibold text-lg leading-relaxed">
                  “{item.quote}”
                </p>
                <p className="text-sm text-gray-500 mt-2">{item.position}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Culture Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1e2942] mb-6 font-semibold leading-snug">
              A people-first culture thrives on valuing individuals above all else.
            </h2>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              At NeuroLinkX Technologies, we embrace diversity and support our team through wellness initiatives, transparent communication, and inclusive policies. Everyone’s voice matters here.
            </p>

            <button className="bg-gradient-to-r from-[#ff3b30] to-[#ff7b5c] hover:from-white hover:to-white hover:text-[#ff3b30] border border-[#ff3b30] text-white px-8 py-3 rounded-full transition font-semibold shadow-lg hover:shadow-xl">
              Explore Vibrant Life @ NeuroLinkX
            </button>

            <p className="mt-6 text-sm text-[#1e2942]/80 italic">
              We build innovation through collaboration and empower our people to thrive.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
