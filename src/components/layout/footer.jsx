import Link from 'next/link';

const footerLinks = {
  Product: ['Features', 'Security', 'Enterprise', 'Pricing'],
  Resources: ['Documentation', 'Guides', 'API Reference', 'Support'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image.png" 
          alt="Footer background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* Logo and social */}
          <div>
            <Link href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
                Neuro<span className="text-white">LinkX</span><span className="text-white"> •</span>
              </span>
            </Link>

            <div className="flex gap-3 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/neurolinkx"
                className="p-2 rounded-full hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8S24.09-.5 53.79-.5s53.79 24.6 53.79 54.3c0 29.7-24.09 53.8-53.79 53.8zM447.9 448h-92.68V302.4c0-34.7-12.4-58.3-43.3-58.3-23.6 0-37.6 15.9-43.8 31.3-2.3 5.6-2.8 13.4-2.8 21.3V448H172.4s1.2-241.6 0-266.5h92.69v37.8c12.3-19 34.3-46 83.3-46 60.8 0 106.5 39.7 106.5 125.1V448z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/NeurolinkX"
                className="p-2 rounded-full hover:bg-white/10 transition"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M23.954 4.569c-0.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.594-1.55-2.717 0-4.917 2.203-4.917 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.388 1.693 4.384 3.946 4.833-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.808 2.105-6.102 2.105-.396 0-.788-.023-1.174-.069 2.189 1.402 4.768 2.222 7.548 2.222 9.056 0 14-7.5 14-14 0-.213-.005-.425-.014-.636.961-.694 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/neurolinkx"
                className="p-2 rounded-full hover:bg-white/10 transition"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4 1.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Section */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2 text-slate-400">
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

        {/* Footer Base */}
        <div className="mt-16 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
          &copy; 2025 NeuroLinkX. All rights reserved.
        </div>
      </div>

      {/* WhatsApp Button */}
      {/* WhatsApp Button */}
<a
  href="https://wa.me/+919889305803"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition"
  aria-label="Chat on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="30"
    height="30"
    fill="white"
  >
    <path d="M16.001 0.000244141C7.165 0.000244141 0 7.164 0 16C0 18.728 0.671997 21.314 1.879 23.598L0 32L8.611 30.196C10.798 31.267 13.32 31.901 16.001 31.901C24.836 31.901 32 24.737 32 15.901C32 7.165 24.837 0.000244141 16.001 0.000244141ZM16.001 29.077C13.673 29.077 11.426 28.53 9.407 27.539L8.95 27.314L3.564 28.415L4.713 23.104L4.489 22.64C3.377 20.44 2.817 18.002 2.817 15.547C2.817 8.694 8.979 2.817 16.001 2.817C22.85 2.817 28.733 8.694 28.733 15.547C28.732 22.4 22.85 29.077 16.001 29.077Z" />
    <path d="M23.479 19.629C23.126 19.462 21.059 18.419 20.78 18.314C20.501 18.211 20.28 18.159 20.058 18.503C19.837 18.847 19.148 19.629 18.955 19.837C18.762 20.045 18.569 20.069 18.216 19.902C17.863 19.735 16.688 19.338 15.545 18.209C14.524 17.188 13.914 15.958 13.719 15.605C13.524 15.251 13.699 15.093 13.866 14.926C14.003 14.789 14.166 14.569 14.285 14.385C14.404 14.202 14.454 14.081 14.549 13.908C14.645 13.735 14.597 13.567 14.527 13.4C14.458 13.233 13.618 11.006 13.26 10.179C13.027 9.63 12.796 9.708 12.57 9.7C12.353 9.693 12.12 9.69 11.887 9.69C11.654 9.69 11.319 9.76 11.084 9.994C10.849 10.228 10.173 10.834 10.173 12.031C10.173 13.228 11.067 14.335 11.187 14.49C11.307 14.645 12.789 17.049 15.123 18.375C16.72 19.302 17.698 19.566 18.455 19.739C19.042 19.872 19.729 19.923 20.264 19.891C20.799 19.859 21.702 19.413 21.982 18.948C22.262 18.483 22.262 18.039 22.194 17.922C22.127 17.805 21.832 17.696 21.479 17.529Z" />
  </svg>
</a>

    </footer>
  );
}
