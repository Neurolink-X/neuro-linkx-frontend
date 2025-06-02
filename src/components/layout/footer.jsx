import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Security', 'Enterprise', 'Pricing'],
  Resources: ['Documentation', 'Guides', 'API Reference', 'Support'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className='bg-slate-900 py-20 px-4 relative'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
        <div>
          <div className='text-white text-lg'>
            <Link href='/'>
              NeuroLinkX
            </Link>
            </div>
            <div className='flex gap-4 text-slate-400'>
              {/* <Link href='#' className='hover:text-white'>
                <Github className='h-5 w-5' />
              </Link> */}
              {/* <Link href='#' className='hover:text-white'>
                <Twitter className='h-5 w-5' />
              </Link> */}
              <a
                href='https://www.linkedin.com/company/neurolinkx'
                className='h-10 w-10 flex items-center justify-center rounded-full bg-white text-[#0077B5] hover:bg-blue-100 transition duration-300'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 448 512'
                  height='20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                </svg>
              </a>
              <a
                href='https://x.com/NeurolinkX?t=UlPitlvohaldjEZTv5DJIg&s=09'
                className='h-10 w-10 flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-100 transition duration-300'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  height='20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M23.643 4.937c-.835.37-1.73.62-2.675.733a4.693 4.693 0 0 0 2.048-2.6 9.56 9.56 0 0 1-2.995 1.146A4.78 4.78 0 0 0 16.45 3c-2.632 0-4.772 2.144-4.772 4.783 0 .373.04.74.122 1.094A13.573 13.573 0 0 1 1.64 3.166a4.792 4.792 0 0 0-.645 2.408c0 1.663.845 3.135 2.131 4.002a4.72 4.72 0 0 1-2.162-.602v.06c0 2.32 1.65 4.253 3.833 4.693a4.766 4.766 0 0 1-2.157.08c.608 1.894 2.378 3.275 4.48 3.313a9.593 9.593 0 0 1-5.946 2.051c-.388 0-.77-.023-1.148-.067a13.567 13.567 0 0 0 7.36 2.16c8.833 0 13.663-7.32 13.663-13.663 0-.208-.005-.416-.014-.623A9.763 9.763 0 0 0 24 4.557a9.344 9.344 0 0 1-2.357.647z' />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/neurolinkx?igsh=dmlkNGdyaG1lMnh3'
                className='h-10 w-10 flex items-center justify-center rounded-full bg-white text-pink-600 hover:bg-pink-100 transition duration-300'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4 1.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"/>
                </svg>
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className='font-semibold text-white mb-4'>{category}</h3>
              <ul className='space-y-2'>
                {links.map((link) => (
                  <li key={link}>
                    <Link href='#' className='text-slate-400 hover:text-white'>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='mt-12 pt-8 border-t border-slate-800 text-center text-slate-400'>
          <p>&copy; 2025 NeuroLinkX. All rights reserved.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href='https://wa.me/+919889305803'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-5 right-5 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition'
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 448 512'
          height='30'
          width='30'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' />
        </svg>
      </a>
    </footer>
  );
}
