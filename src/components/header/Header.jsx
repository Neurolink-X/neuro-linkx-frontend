&apos;use client&apos;

import { useState } from &apos;react&apos;
import Link from &apos;next/link&apos;
import { 
  Menu, 
  X, 
  User, 
  LogIn, 
  UserPlus,
  Brain,
  ChevronDown
} from &apos;lucide-react&apos;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  return (
    <header className=&quot;fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;flex items-center justify-between h-16&quot;>
          {/* Logo */}
          <Link href=&quot;/&quot; className=&quot;flex items-center gap-2&quot;>
            <Brain className=&quot;w-8 h-8 text-blue-600&quot; />
            <span className=&quot;text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text&quot;>
              Neurolink
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className=&quot;hidden md:flex items-center gap-8&quot;>
            <Link href=&quot;/&quot; className=&quot;text-gray-600 hover:text-gray-900 transition-colors&quot;>
              Home
            </Link>
            <Link href=&quot;/services&quot; className=&quot;text-gray-600 hover:text-gray-900 transition-colors&quot;>
              Services
            </Link>
            <Link href=&quot;/about&quot; className=&quot;text-gray-600 hover:text-gray-900 transition-colors&quot;>
              About
            </Link>
            <Link href=&quot;/contact&quot; className=&quot;text-gray-600 hover:text-gray-900 transition-colors&quot;>
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className=&quot;hidden md:flex items-center gap-4&quot;>
            <Link 
              href=&quot;/auth?mode=login&quot;
              className=&quot;px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2&quot;
            >
              <LogIn className=&quot;w-4 h-4&quot; />
              Sign In
            </Link>
            <Link 
              href=&quot;/auth?mode=signup&quot;
              className=&quot;px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2&quot;
            >
              <UserPlus className=&quot;w-4 h-4&quot; />
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=&quot;md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors&quot;
          >
            {isMenuOpen ? (
              <X className=&quot;w-6 h-6 text-gray-600&quot; />
            ) : (
              <Menu className=&quot;w-6 h-6 text-gray-600&quot; />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className=&quot;md:hidden py-4 space-y-4&quot;>
            <Link 
              href=&quot;/&quot; 
              className=&quot;block text-gray-600 hover:text-gray-900 transition-colors&quot;
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href=&quot;/services&quot; 
              className=&quot;block text-gray-600 hover:text-gray-900 transition-colors&quot;
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href=&quot;/about&quot; 
              className=&quot;block text-gray-600 hover:text-gray-900 transition-colors&quot;
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href=&quot;/contact&quot; 
              className=&quot;block text-gray-600 hover:text-gray-900 transition-colors&quot;
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className=&quot;pt-4 border-t border-gray-100 space-y-2&quot;>
              <Link 
                href=&quot;/auth?mode=login&quot;
                className=&quot;block px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2&quot;
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className=&quot;w-4 h-4&quot; />
                Sign In
              </Link>
              <Link 
                href=&quot;/auth?mode=signup&quot;
                className=&quot;block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2&quot;
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className=&quot;w-4 h-4&quot; />
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 