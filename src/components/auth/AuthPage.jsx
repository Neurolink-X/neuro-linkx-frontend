&apos;use client&apos;

import React, { useState } from &apos;react&apos;
import { 
  LogIn, 
  UserPlus, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Github,
  Twitter,
  Linkedin,
  Loader2,
  AlertCircle
} from &apos;lucide-react&apos;

export default function AuthPage({ initialMode = &apos;login&apos; }) {
  const [isLogin, setIsLogin] = useState(initialMode === &apos;login&apos;)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(&apos;&apos;)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(&apos;&apos;)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (isLogin) {
        // Handle login
        console.log(&apos;Login submitted&apos;)
      } else {
        // Handle signup
        console.log(&apos;Signup submitted&apos;)
      }
    } catch (err) {
      setError(&apos;An error occurred. Please try again.&apos;)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]&quot; />
      </div>

      <div className=&quot;relative max-w-md w-full space-y-8 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10&quot;>
        <div className=&quot;text-center&quot;>
          <h2 className=&quot;text-3xl font-bold text-white&quot;>
            {isLogin ? &apos;Welcome Back&apos; : &apos;Create Account&apos;}
          </h2>
          <p className=&quot;mt-2 text-gray-400&quot;>
            {isLogin ? &apos;Sign in to your account&apos; : &apos;Join us to get started&apos;}
          </p>
        </div>

        {error && (
          <div className=&quot;bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg flex items-center gap-2&quot;>
            <AlertCircle className=&quot;w-5 h-5&quot; />
            {error}
          </div>
        )}

        <form className=&quot;mt-8 space-y-6&quot; onSubmit={handleSubmit}>
          <div className=&quot;space-y-4&quot;>
            <div>
              <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-gray-300&quot;>
                Email address
              </label>
              <div className=&quot;mt-1 relative&quot;>
                <div className=&quot;absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none&quot;>
                  <Mail className=&quot;h-5 w-5 text-gray-400&quot; />
                </div>
                <input
                  id=&quot;email&quot;
                  name=&quot;email&quot;
                  type=&quot;email&quot;
                  autoComplete=&quot;email&quot;
                  required
                  className=&quot;appearance-none block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                  placeholder=&quot;Enter your email&quot;
                />
              </div>
            </div>

            <div>
              <label htmlFor=&quot;password&quot; className=&quot;block text-sm font-medium text-gray-300&quot;>
                Password
              </label>
              <div className=&quot;mt-1 relative&quot;>
                <div className=&quot;absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none&quot;>
                  <Lock className=&quot;h-5 w-5 text-gray-400&quot; />
                </div>
                <input
                  id=&quot;password&quot;
                  name=&quot;password&quot;
                  type={showPassword ? &quot;text&quot; : &quot;password&quot;}
                  autoComplete={isLogin ? &quot;current-password&quot; : &quot;new-password&quot;}
                  required
                  className=&quot;appearance-none block w-full pl-10 pr-10 py-2 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                  placeholder=&quot;Enter your password&quot;
                />
                <button
                  type=&quot;button&quot;
                  onClick={() => setShowPassword(!showPassword)}
                  className=&quot;absolute inset-y-0 right-0 pr-3 flex items-center&quot;
                >
                  {showPassword ? (
                    <EyeOff className=&quot;h-5 w-5 text-gray-400 hover:text-gray-300&quot; />
                  ) : (
                    <Eye className=&quot;h-5 w-5 text-gray-400 hover:text-gray-300&quot; />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor=&quot;confirmPassword&quot; className=&quot;block text-sm font-medium text-gray-300&quot;>
                  Confirm Password
                </label>
                <div className=&quot;mt-1 relative&quot;>
                  <div className=&quot;absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none&quot;>
                    <Lock className=&quot;h-5 w-5 text-gray-400&quot; />
                  </div>
                  <input
                    id=&quot;confirmPassword&quot;
                    name=&quot;confirmPassword&quot;
                    type={showPassword ? &quot;text&quot; : &quot;password&quot;}
                    autoComplete=&quot;new-password&quot;
                    required
                    className=&quot;appearance-none block w-full pl-10 pr-10 py-2 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                    placeholder=&quot;Confirm your password&quot;
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              type=&quot;submit&quot;
              disabled={isLoading}
              className=&quot;w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed&quot;
            >
              {isLoading ? (
                <Loader2 className=&quot;w-5 h-5 animate-spin&quot; />
              ) : isLogin ? (
                <LogIn className=&quot;w-5 h-5&quot; />
              ) : (
                <UserPlus className=&quot;w-5 h-5&quot; />
              )}
            </button>
          </div>
        </form>

        <div className=&quot;mt-6&quot;>
          <div className=&quot;relative&quot;>
            <div className=&quot;absolute inset-0 flex items-center&quot;>
              <div className=&quot;w-full border-t border-white/10&quot; />
            </div>
            <div className=&quot;relative flex justify-center text-sm&quot;>
              <span className=&quot;px-2 bg-gray-900 text-gray-400&quot;>Or continue with</span>
            </div>
          </div>

          <div className=&quot;mt-6 grid grid-cols-3 gap-3&quot;>
            <button className=&quot;w-full inline-flex justify-center py-2 px-4 border border-white/10 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-colors&quot;>
              <Github className=&quot;w-5 h-5&quot; />
            </button>
            <button className=&quot;w-full inline-flex justify-center py-2 px-4 border border-white/10 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-colors&quot;>
              <Twitter className=&quot;w-5 h-5&quot; />
            </button>
            <button className=&quot;w-full inline-flex justify-center py-2 px-4 border border-white/10 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-colors&quot;>
              <Linkedin className=&quot;w-5 h-5&quot; />
            </button>
          </div>
        </div>

        <div className=&quot;text-center&quot;>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className=&quot;text-sm text-gray-400 hover:text-white transition-colors&quot;
          >
            {isLogin ? (
              <>
                Don&apos;t have an account?{&apos; &apos;}
                <span className=&quot;text-blue-400 hover:text-blue-300&quot;>Sign up</span>
              </>
            ) : (
              <>
                Already have an account?{&apos; &apos;}
                <span className=&quot;text-blue-400 hover:text-blue-300&quot;>Sign in</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
} 