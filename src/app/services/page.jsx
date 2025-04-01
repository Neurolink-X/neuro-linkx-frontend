'use client'

import { 
  Brain, 
  Cloud, 
  Database, 
  GitBranch, 
  Shield, 
  Globe, 
  Cpu, 
  Network, 
  Server, 
  Code, 
  CircuitBoard, 
  Binary, 
  CpuIcon, 
  Network2, 
  DatabaseZap, 
  Server2, 
  Cloud2, 
  GitBranch2, 
  Boxes2, 
  Code2, 
  Brain2, 
  Zap2, 
  Shield2, 
  Globe2, 
  Database2, 
  Network3, 
  Server3, 
  Cpu2, 
  Code3, 
  DatabaseZap2, 
  Network4, 
  Shield3, 
  Globe3, 
  Cpu3, 
  Cloud3, 
  GitBranch3, 
  Boxes3, 
  Server4, 
  Code4, 
  DatabaseZap3, 
  Network5, 
  Shield4, 
  Globe4, 
  Cpu4, 
  Cloud4, 
  GitBranch4, 
  Boxes4, 
  Server5, 
  Code5,
  Smartphone,
  Globe2,
  Layout,
  Server2
} from 'lucide-react'

const services = [
  {
    title: "App Development",
    icon: Smartphone,
    color: "from-blue-600 to-indigo-600",
    features: [
      "iOS & Android Development",
      "Cross-platform Solutions",
      "Progressive Web Apps",
      "Enterprise Applications",
      "App Maintenance & Support",
      "App Store Optimization"[03:33:34.034] Cloning github.com/Arjunchaurasiya23/Neurolink (Branch: main, Commit: 1d63a90)
[03:33:34.211] Previous build caches not available
[03:33:34.279] Cloning completed: 245.000ms
[03:33:34.443] Running build in Washington, D.C., USA (East) – iad1
[03:33:34.571] Running "vercel build"
[03:33:34.960] Vercel CLI 41.4.1
[03:33:35.252] Installing dependencies...
[03:33:37.564] npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
[03:33:37.963] npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
[03:33:38.120] npm warn deprecated glob@7.1.7: Glob versions prior to v9 are no longer supported
[03:33:38.895] npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
[03:33:38.923] npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
[03:33:40.344] npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
[03:33:45.321] 
[03:33:45.321] added 420 packages in 10s
[03:33:45.322] 
[03:33:45.322] 148 packages are looking for funding
[03:33:45.322]   run `npm fund` for details
[03:33:45.535] Detected Next.js version: 14.0.3
[03:33:45.540] Running "npm run build"
[03:33:45.666] 
[03:33:45.666] > it-website@0.1.0 build
[03:33:45.666] > next build
[03:33:45.666] 
[03:33:46.655] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[03:33:46.655] This information is used to shape Next.js' roadmap and prioritize features.
[03:33:46.656] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[03:33:46.656] https://nextjs.org/telemetry
[03:33:46.656] 
[03:33:46.739]    ▲ Next.js 14.0.3
[03:33:46.739] 
[03:33:46.739]    Creating an optimized production build ...
[03:33:51.578] Failed to compile.
[03:33:51.578] 
[03:33:51.578] ./src/app/api/chat/route.js
[03:33:51.578] Error: 
[03:33:51.578]   [31mx[0m Unexpected token `&`. Expected a string literal
[03:33:51.578]    ,-[[36;1;4m/vercel/path0/src/app/api/chat/route.js[0m:1:1]
[03:33:51.578]  [2m1[0m | import { NextResponse } from &quot;next/server&quot;
[03:33:51.578]    : [31;1m                             ^[0m
[03:33:51.579]  [2m2[0m | 
[03:33:51.579]  [2m3[0m | // Enhanced pattern matching system with context awareness
[03:33:51.579]  [2m4[0m | const PATTERNS = {
[03:33:51.579]    `----
[03:33:51.579] 
[03:33:51.579] Caused by:
[03:33:51.579]     Syntax Error
[03:33:51.579] 
[03:33:51.579] Import trace for requested module:
[03:33:51.579] ./src/app/api/chat/route.js
[03:33:51.579] 
[03:33:51.579] ./src/app/auth/page.jsx
[03:33:51.579] Error: 
[03:33:51.579]   [31mx[0m Expression expected
[03:33:51.579]    ,-[[36;1;4m/vercel/path0/src/app/auth/page.jsx[0m:1:1]
[03:33:51.579]  [2m1[0m | &apos;use client&apos;
[03:33:51.579]    : [31;1m^[0m
[03:33:51.580]  [2m2[0m | 
[03:33:51.580]  [2m3[0m | import { useSearchParams } from &apos;next/navigation&apos;
[03:33:51.580]  [2m4[0m | import AuthPage from &apos;@/components/auth/AuthPage&apos;
[03:33:51.580]    `----
[03:33:51.580] 
[03:33:51.580]   [31mx[0m Expected ';', '}' or <eof>
[03:33:51.580]    ,-[[36;1;4m/vercel/path0/src/app/auth/page.jsx[0m:1:1]
[03:33:51.580]  [2m1[0m | &apos;use client&apos;
[03:33:51.580]    : [31;1m      ^|^[0m[33;1m ^^^^^^[0m
[03:33:51.580]    :        [31;1m`-- [31;1mThis is the expression part of an expression statement[0m[0m
[03:33:51.580]  [2m2[0m | 
[03:33:51.580]  [2m3[0m | import { useSearchParams } from &apos;next/navigation&apos;
[03:33:51.580]  [2m4[0m | import AuthPage from &apos;@/components/auth/AuthPage&apos;
[03:33:51.580]    `----
[03:33:51.581] 
[03:33:51.581] Caused by:
[03:33:51.581]     Syntax Error
[03:33:51.581] 
[03:33:51.581] Import trace for requested module:
[03:33:51.581] ./src/app/auth/page.jsx
[03:33:51.581] 
[03:33:51.581] ./src/app/cloud-consultation/page.js
[03:33:51.581] Error: 
[03:33:51.582]   [31mx[0m Expression expected
[03:33:51.582]    ,-[[36;1;4m/vercel/path0/src/app/cloud-consultation/page.js[0m:1:1]
[03:33:51.582]  [2m1[0m | &apos;use client&apos;;
[03:33:51.582]    : [31;1m^[0m
[03:33:51.582]  [2m2[0m | 
[03:33:51.582]  [2m3[0m | import { useState, useEffect } from &apos;react&apos;;
[03:33:51.582]  [2m4[0m | import { motion, AnimatePresence, useScroll, useTransform } from &apos;framer-motion&apos;;
[03:33:51.582]    `----
[03:33:51.582] 
[03:33:51.582]   [31mx[0m Expected ';', '}' or <eof>
[03:33:51.582]    ,-[[36;1;4m/vercel/path0/src/app/cloud-consultation/page.js[0m:1:1]
[03:33:51.583]  [2m1[0m | &apos;use client&apos;;
[03:33:51.584]    : [31;1m      ^|^[0m[33;1m ^^^^^^[0m
[03:33:51.584]    :        [31;1m`-- [31;1mThis is the expression part of an expression statement[0m[0m
[03:33:51.584]  [2m2[0m | 
[03:33:51.584]  [2m3[0m | import { useState, useEffect } from &apos;react&apos;;
[03:33:51.584]  [2m4[0m | import { motion, AnimatePresence, useScroll, useTransform } from &apos;framer-motion&apos;;
[03:33:51.585]    `----
[03:33:51.585] 
[03:33:51.585] Caused by:
[03:33:51.585]     Syntax Error
[03:33:51.585] 
[03:33:51.586] Import trace for requested module:
[03:33:51.586] ./src/app/cloud-consultation/page.js
[03:33:51.586] 
[03:33:51.586] ./src/app/digital-marketing/page.js
[03:33:51.586] Error: 
[03:33:51.587]   [31mx[0m Expression expected
[03:33:51.587]    ,-[[36;1;4m/vercel/path0/src/app/digital-marketing/page.js[0m:1:1]
[03:33:51.587]  [2m1[0m | &apos;use client&apos;;
[03:33:51.587]    : [31;1m^[0m
[03:33:51.587]  [2m2[0m | 
[03:33:51.587]  [2m3[0m | import { motion, useScroll, useTransform } from &apos;framer-motion&apos;;
[03:33:51.587]  [2m4[0m | import { 
[03:33:51.587]    `----
[03:33:51.588] 
[03:33:51.588]   [31mx[0m Expected ';', '}' or <eof>
[03:33:51.588]    ,-[[36;1;4m/vercel/path0/src/app/digital-marketing/page.js[0m:1:1]
[03:33:51.588]  [2m1[0m | &apos;use client&apos;;
[03:33:51.588]    : [31;1m      ^|^[0m[33;1m ^^^^^^[0m
[03:33:51.589]    :        [31;1m`-- [31;1mThis is the expression part of an expression statement[0m[0m
[03:33:51.589]  [2m2[0m | 
[03:33:51.589]  [2m3[0m | import { motion, useScroll, useTransform } from &apos;framer-motion&apos;;
[03:33:51.589]  [2m4[0m | import { 
[03:33:51.589]    `----
[03:33:51.589] 
[03:33:51.589] Caused by:
[03:33:51.589]     Syntax Error
[03:33:51.589] 
[03:33:51.590] Import trace for requested module:
[03:33:51.590] ./src/app/digital-marketing/page.js
[03:33:51.590] 
[03:33:51.590] ./src/app/layout.jsx
[03:33:51.590] Error: 
[03:33:51.590]   [31mx[0m Unexpected token `&`. Expected a string literal
[03:33:51.590]    ,-[[36;1;4m/vercel/path0/src/app/layout.jsx[0m:1:1]
[03:33:51.590]  [2m1[0m | import { Inter } from &apos;next/font/google&apos;
[03:33:51.590]    : [31;1m                      ^[0m
[03:33:51.590]  [2m2[0m | import &apos;./globals.css&apos;
[03:33:51.590]  [2m3[0m | import Header from &apos;@/components/header/Header&apos;
[03:33:51.590]    `----
[03:33:51.590] 
[03:33:51.590] Caused by:
[03:33:51.590]     Syntax Error
[03:33:51.590] 
[03:33:51.590] Import trace for requested module:
[03:33:51.590] ./src/app/layout.jsx
[03:33:51.591] 
[03:33:51.591] 
[03:33:51.591] > Build failed because of webpack errors
[03:33:51.623] Error: Command "npm run build" exited with 1
[03:33:51.950] 
    ],
    future: ["AI-Powered Apps", "AR/VR Integration", "5G Optimization"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    features: [
      "Robotics",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Quantum Machine Learning",
      "Neural Networks"
    ],
    future: ["AGI Research", "Brain-Computer Interface", "Autonomous Systems"]
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "from-orange-600 to-red-600",
    features: [
      "Multi-Cloud Strategy",
      "Serverless Architecture",
      "Cloud Security",
      "Edge Computing",
      "Quantum Computing",
      "Green Computing"
    ],
    future: ["Cloud-Native AI", "Autonomous Cloud", "Quantum Cloud"]
  },
  {
    title: "Data Analytics",
    icon: Database,
    color: "from-green-600 to-emerald-600",
    features: [
      "Big Data Processing",
      "Real-time Analytics",
      "Business Intelligence",
      "Data Governance",
      "AI-Powered Analytics",
      "Predictive Modeling"
    ],
    future: ["Quantum Analytics", "Prescriptive Analytics", "Cognitive Computing"]
  },
  {
    title: "DevOps & Automation",
    icon: GitBranch,
    color: "from-yellow-600 to-amber-600",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security Automation",
      "DevSecOps"
    ],
    future: ["AIOps", "GitOps", "NoOps"]
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "from-red-600 to-pink-600",
    features: [
      "Threat Detection",
      "Vulnerability Assessment",
      "Identity Management",
      "Zero Trust Security",
      "Cloud Security",
      "Compliance"
    ],
    future: ["AI Security", "Quantum Security", "Biometric Security"]
  }
]

export default function Services() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000000_70%,transparent_100%)]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Advanced{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
              Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our cutting-edge solutions powered by the latest technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Current Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Future Roadmap</h4>
                  <ul className="space-y-2">
                    {service.future.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 