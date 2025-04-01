&quot;use client&quot;

import { motion } from &quot;framer-motion&quot;

const employeeQuotes = [
  {
    quote: &quot;This is very employee-friendly company.&quot;,
    position: &quot;Senior Software Engineer II&quot;,
  },
  
  {
    quote: &quot;Work Life balance is good.&quot;,
    position: &quot;DevOps Engineer&quot;,
  },
  {
    quote: &quot;Have good policies to benefit people.&quot;,
    position: &quot;Software Quality Manager&quot;,
  },
  {
    quote: &quot;They have realistic expectations from employees.&quot;,
    position: &quot;Associate Software Engineer&quot;,
  },
]

export default function CompanyCulture() {
  return (
    <section className=&quot;w-full my-10 bg-white&quot;>
      <div className=&quot;bg-[#d8e5fa] py-4 md:py-10 rounded-3xl mx-auto px-4 max-w-7xl&quot;>
        <div className=&quot;max-w-6xl mx-auto flex flex-col md:flex-row gap-12&quot;>
          <motion.div
            className=&quot;w-full md:w-1/2 relative&quot;
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {employeeQuotes.map((item, index) => (
              <motion.div
                key={index}
                className=&quot;bg-white rounded-lg px-4 py-1 mb-2 shadow-sm relative&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  left: index % 2 === 0 ? &quot;0&quot; : &quot;10%&quot;,
                  maxWidth: &quot;90%&quot;,
                }}
              >
                <p className=&quot;text-[#1e2942]&quot;>{item.quote}</p>
                <p className=&quot;text-sm text-gray-500 mt-1&quot;>{item.position}</p>
              </motion.div>
            ))}
            <div className=&quot;font-serif absolute right-0 top-1/2 transform -translate-y-1/2 text-[#ffdddd] text-9xl&quot;>
              &quot;
            </div>
          </motion.div>

          <motion.div
            className=&quot;w-full md:w-1/2&quot;
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className=&quot;text-xl md:text-2xl text-[#1e2942] mb-2 font-serif&quot;>
              A people-first culture thrives on valuing individuals above all else.
            </h2>
            <p className=&quot;text-gray-600 my-4 text-sm&quot; 
              style={{fontSize:16}}
            >
              At NeuroLink Technologies, our people-first culture thrives by valuing every individual and embracing
              diversity. We support our team with wellness initiatives and ensure every voice is heard. By prioritizing
              people and their well-being, we create a vibrant environment where everyone can grow and succeed together.
            </p>
            <div className=&quot;flex md:block justify-center&quot;>
            <button className=&quot;bg-[#ff3b30] text-white text-nowrap px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-white hover:text-[#ff3b30] transition-colors&quot;>
                Explore Vibrant Life @ NeuroLink
            </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}