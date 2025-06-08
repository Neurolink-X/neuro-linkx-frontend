import Link from 'next/link';

const footerLinks = {
  Product: ['Features', 'Security', 'Enterprise', 'Pricing'],
  Resources: ['Documentation', 'Guides', 'API Reference', 'Support'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* 📷 Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/image.png"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950/30" />
      </div>

      {/* 🌐 Footer Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* 🔶 Logo & Social Icons */}
          <div className="col-span-1">
            <Link href="/">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
                Neuro<span className="text-white">LinkX</span><span className="text-white"> •</span>
              </span>
            </Link>

            <div className="flex gap-4 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/neurolinkx"
                className="p-3 sm:p-4 rounded-full bg-white text-[#0077B5] hover:scale-110 transition-transform shadow-md"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8S24.09-.5 53.79-.5s53.79 24.6 53.79 54.3c0 29.7-24.09 53.8-53.79 53.8zM447.9 448h-92.68V302.4c0-34.7-12.4-58.3-43.3-58.3-23.6 0-37.6 15.9-43.8 31.3-2.3 5.6-2.8 13.4-2.8 21.3V448H172.4s1.2-241.6 0-266.5h92.69v37.8c12.3-19 34.3-46 83.3-46 60.8 0 106.5 39.7 106.5 125.1V448z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/NeurolinkX"
                className="p-3 sm:p-4 rounded-full bg-white text-[#1DA1F2] hover:scale-110 transition-transform shadow-md"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M23.954 4.569c-0.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.594-1.55-2.717 0-4.917 2.203-4.917 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.388 1.693 4.384 3.946 4.833-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.808 2.105-6.102 2.105-.396 0-.788-.023-1.174-.069 2.189 1.402 4.768 2.222 7.548 2.222 9.056 0 14-7.5 14-14 0-.213-.005-.425-.014-.636.961-.694 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/neurolinkx"
                className="p-3 sm:p-4 rounded-full bg-white text-pink-600 hover:scale-110 transition-transform shadow-md"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4 1.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 📂 Link Columns */}
          <div className="col-span-1 lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2 text-sm sm:text-base text-slate-400">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-white transition">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 📄 Copyright */}
        <div className="mt-16 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          &copy; 2025 NeuroLinkX. All rights reserved.
        </div>
      </div>

      {/* 💬 WhatsApp Floating Button */}
      <a
        href="https://wa.me/+919889305803"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-xl hover:bg-[#128C7E] hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 448 512"
          height="30"
          width="30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
        </svg>
      </a>
    </footer>
  );
}
