'use client';

import Link from 'next/link';
import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from 'lucide-react'; // Lucide icons

const footerLinks = {
  Product: ['Features', 'Security', 'Enterprise', 'Pricing'],
  Resources: ['Documentation', 'Guides', 'API Reference', 'Support'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* 📷 Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image.png"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950/30" />
      </div>

      {/* 🌐 Footer Content */}
      <div className="relative z-10 px-6 md:px-8 lg:px-12 py-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* 🔶 Logo & Social Icons */}
          <div className="col-span-1 mb-4">
            <Link href="/">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
                Neuro<span className="text-white">LinkX•</span>
              </span>
            </Link>

            {/* 📱 Social Icons in 2 Rows */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-[220px]">
  <a
    href="https://www.linkedin.com/company/neurolinkx"
    className="flex items-center justify-center p-2.5 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition shadow-sm"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-5 h-5 text-blue-400" />
  </a>
  <a
    href="https://x.com/NeurolinkX"
    className="flex items-center justify-center p-2.5 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition shadow-sm"
    aria-label="Twitter"
  >
    <Twitter className="w-5 h-5 text-sky-400" />
  </a>
  <a
    href="https://www.instagram.com/neurolinkx"
    className="flex items-center justify-center p-2.5 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition shadow-sm"
    aria-label="Instagram"
  >
    <Instagram className="w-5 h-5 text-pink-400" />
  </a>
  <a
    href="mailto:contact@neurolinkx.com"
    className="flex items-center justify-center p-2.5 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition shadow-sm"
    aria-label="Email"
  >
    <Mail className="w-5 h-5 text-red-400" />
  </a>
</div>

          </div>

          {/* 📂 Link Columns */}
          <div className="col-span-1 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-base font-semibold text-white mb-3">{category}</h3>
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
        </div>

        {/* 📄 Copyright */}
        <div className="mt-8 border-t border-slate-800 pt-4 text-center text-white text-xs">
          &copy; 2025 NeuroLinkX. All rights reserved.
        </div>
      </div>

      {/* 💬 WhatsApp Button */}
      <a
        href="https://wa.me/+919889305803"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-xl hover:bg-[#128C7E] hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-5 h-5"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>
    </footer>
  );
}
