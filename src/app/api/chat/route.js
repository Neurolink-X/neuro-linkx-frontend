import { NextResponse } from "next/server"

// Enhanced pattern matching system with context awareness
const PATTERNS = {
  greetings: {
    patterns: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings"],
    responses: [
      "👋 Hello! I'm your AI assistant. I can help you with:\n• Information about our services\n• Technical support\n• Project inquiries\n• General questions\nHow can I assist you today?",
      "Hi there! I'm here to help you with any questions about our services, support, or projects. What would you like to know?",
      "Hey! I'm your dedicated AI assistant. I can provide detailed information about our services, help with technical queries, or assist with project planning. How can I help you?"
    ],
    followUp: {
      patterns: ["yes", "sure", "okay", "alright", "tell me more"],
      responses: [
        "Great! I'd be happy to help. What specific information are you looking for?\n• Our services\n• Technical support\n• Project details\n• Pricing information",
        "Perfect! To better assist you, could you tell me what you're interested in?\n• Service details\n• Support options\n• Project information\n• Pricing"
      ]
    }
  },
  help: {
    patterns: ["help", "what can you do", "capabilities", "features", "assist", "support"],
    responses: [
      "I can help you with:\n• Information about our services\n• Technical support and troubleshooting\n• Project inquiries and planning\n• Pricing and quotes\n• Company information\n• Technology stack details\nWhat would you like to know?",
      "Here's what I can do:\n• Answer questions about our services\n• Provide technical assistance\n• Help with project planning\n• Share company information\n• Explain our technology stack\n• Discuss pricing options\nHow can I assist you?"
    ]
  },
  services: {
    patterns: ["services", "offerings", "solutions", "what do you do", "provide", "offer", "app development", "mobile app", "web app"],
    responses: [
      "We offer premium services including:\n• Requirement according custom premium website \n  - Mobile and Web Development Solutions 📱\n  - iOS & Android Apps\n  - Cross-platform Development\n  - Progressive Web Apps (PWA)\n  - Enterprise Mobile Apps\n  - App Maintenance & Support\n• AI/ML Solutions 🤖\n  - Machine Learning Models\n  - AI Integration\n  - Data Analytics\n• Cloud Consulting ☁️\n  - Cloud Migration\n  - Infrastructure Setup\n  - Cost Optimization\n• Digital Transformation 🔄\n  - Process Automation\n  - Digital Strategy\n  - System Modernization\nWhich area interests you?",
      "Our premium solutions include:\n• Mobile & Web App Development\n  - Native iOS & Android Apps\n  - React Native & Flutter Apps\n  - Progressive Web Applications\n  - Enterprise Mobile Solutions\n  - App Store Optimization\n• Advanced AI Integration\n  - Custom AI Models\n  - Predictive Analytics\n  - AI Automation\n• Cloud Infrastructure\n  - Multi-cloud Solutions\n  - Security & Compliance\n  - Performance Optimization\n• Digital Modernization\n  - Legacy System Updates\n  - Digital Workflows\n  - Process Optimization\nTell me more about what you're looking for!"
    ]
  },
  pricing: {
    patterns: ["price", "cost", "pricing", "how much", "budget", "investment", "fee", "calculate", "project cost", "subscription", "enterprise", "app development cost", "mobile app cost", "web app cost"],
    responses: [
      "Our pricing structure is designed to be flexible and transparent. Here's what you need to know:\n\nApp Development Pricing:\n• Mobile App Development\n  - iOS App: $5,000 - $30,000\n  - Android App: $5,000 - $30,000\n  - Cross-platform: $20,000 - $60,000\n  - Enterprise Apps: $50,000+\n\n• Web App Development\n  - Basic Web App: $10,000 - $25,000\n  - E-commerce Platform: $20,000 - $40,000\n  - Progressive Web App: $15,000 - $35,000\n  - Enterprise Web App: $40,000+\n\nMonthly Subscription Plans:\n• Basic: $999/month\n  - 5 hours of support\n  - Basic features\n  - Email support\n• Professional: $2,499/month\n  - 20 hours of support\n  - Advanced features\n  - Priority support\n• Enterprise: Custom pricing\n  - Unlimited support\n  - All features\n  - Dedicated team\n\nWould you like to:\n• Schedule a call with our Senior Solutions Architect Arjun\n• Get a detailed quote for your app project\n• Fill out our project requirements form\n• View our pricing calculator\n\nContact Arjun directly:\n📱 Phone: 9889-305803\n📧 Email: arjunchaurasiya1254@gmail.com\n\nOr fill out our form: www.example.com/quote",
      "Let me break down our app development costs:\n\nMobile App Development:\n• iOS App Development\n  - Basic App: $2,000 - $25,000\n  - Complex App: $5,000 - $50,000\n  - Enterprise App: $20,000+\n\n• Android App Development\n  - Basic App: $2,000 - $25,000\n  - Complex App: $25,000 - $50,000\n  - Enterprise App: $50,000+\n\n• Cross-platform Development\n  - React Native: $20,000 - $40,000\n  - Flutter: $20,000 - $40,000\n  - Enterprise: $40,000+\n\nWeb App Development:\n• Basic Web App\n  - Simple Website: $5,000 - $10,000\n  - Business Website: $10,000 - $20,000\n  - E-commerce Site: $20,000 - $40,000\n\n• Advanced Web App\n  - Progressive Web App: $15,000 - $35,000\n  - Custom Web Platform: $25,000 - $50,000\n  - Enterprise Solution: $50,000+\n\nNext Steps:\n• Schedule a consultation with Arjun\n• Get a custom quote\n• Fill out our requirements form\n\nConnect with Arjun:\n📱 9889-305803\n📧 arjunchaurasiya1254gmail.com\n\nProject Form: www.example.com/quote"
    ],
    followUp: {
      patterns: ["calculate", "project cost", "quote", "budget", "estimate", "price", "cost", "subscription", "enterprise", "app development", "mobile app", "web app"],
      responses: [
        "I'll help you calculate your app development costs. To provide an accurate estimate, I need some information:\n\n1. App Type:\n• Mobile App (iOS/Android/Cross-platform)\n• Web App (Basic/Progressive/Enterprise)\n• Hybrid App\n\n2. Project Scope:\n• Number of features\n• User base size\n• Integration requirements\n• Timeline\n• Design complexity\n\n3. Additional Services:\n• UI/UX Design\n• Backend Development\n• API Integration\n• Testing & QA\n• Maintenance & Support\n\nWould you like to:\n• Fill out our detailed quote form\n• Schedule a call with Arjun\n• Use our pricing calculator\n\nQuick Contact:\n📱 Arjun: (555) 123-4567\n📧 arjun@example.com\n\nProject Form: www.example.com/quote",
        "Let me help you estimate your app development costs. Here's our detailed pricing calculator:\n\nMobile App Development:\n• Basic Mobile App\n  - Simple Features: $2,000 - $25,000\n  - User Authentication\n  - Basic UI/UX\n  - Core Functionality\n\n• Advanced Mobile App\n  - Complex Features: $25,000 - $50,000\n  - Custom UI/UX\n  - API Integration\n  - Advanced Security\n\n• Enterprise Mobile App\n  - Full Features: $50,000+\n  - Custom Solutions\n  - Scalable Architecture\n  - Enterprise Security\n\nWeb App Development:\n• Basic Web App\n  - Simple Website: $5,000 - $10,000\n  - Basic Features\n  - Responsive Design\n  - Simple Backend\n\n• Advanced Web App\n  - Complex Platform: $20,000 - $40,000\n  - Custom Features\n  - Advanced UI/UX\n  - API Integration\n\n• Enterprise Web App\n  - Full Platform: $40,000+\n  - Custom Solutions\n  - Scalable Architecture\n  - Enterprise Features\n\nNext Steps:\n• Get a detailed quote from Arjun\n• Fill out our project form\n• Schedule a consultation\n\nContact Arjun:\n📱 9889-305803\n📧 arjun@example.com\n\nQuote Form: www.example.com/quote"
      ]
    }
  },
  contact: {
    patterns: ["contact", "reach", "get in touch", "email", "phone", "address", "location"],
    responses: [
      "You can reach us through:\n• 📧 Email: contact@example.com\n• 📱 Phone: \n• 💬 Live chat (current)\n• 📝 Contact form on our website\n• 📍 Office: 123 Tech Street, City, Country\n\nOur support hours:\n• Monday - Friday: 9 AM - 6 PM\n• Saturday: 10 AM - 4 PM\n• Sunday: Closed\n\nHow would you like to connect?",
      "Here's how to connect with us:\n• Email:arjunchaurasiya1254@gmail.com\n• Phone: 9889-305803\n• Website: www.neurolinkX.com\n• Office: 123 Tech Street\n\nSupport Availability:\n• Weekdays: 9 AM - 6 PM\n• Saturday: 10 AM - 4 PM\n• Sunday: Closed\n\nI can help you:\n• Schedule a call\n• Set up a meeting\n• Send an email\n• Find our office"
    ]
  },
  technology: {
    patterns: ["tech", "technology", "stack", "tools", "framework", "platform", "software"],
    responses: [
      "We work with cutting-edge technologies:\n• AI/ML: Springboot java,TensorFlow, PyTorch, scikit-learn\n• Cloud: AWS, Azure, GCP\n• Web: React, Next.js, Node.js, TypeScript\n• Mobile: React Native, Flutter\n• Database: PostgreSQL, MongoDB, Redis\n• DevOps: Docker, Kubernetes, CI/CD\n• Security: OAuth, JWT, SSL/TLS\nWhat tech stack interests you?",
      "Our tech expertise includes:\n• Modern AI frameworks with premium models \n• Cloud platforms\n• Web technologies\n• Mobile development\n• Database solutions\n• DevOps tools\n• Security protocols\nLet me know what you'd like to explore!"
    ]
  },
  projects: {
    patterns: ["project", "portfolio", "work", "case study", "examples", "clients", "success", "app development", "mobile app", "web app"],
    responses: [
      "Check out our recent app development projects:\n• E-commerce Mobile App\n  - iOS & Android versions\n  - 100k+ downloads\n  - 4.8/5 App Store rating\n  - Real-time inventory sync\n\n• Healthcare Web Platform\n  - Progressive Web App\n  - HIPAA compliant\n  - Patient portal integration\n  - 50k+ active users\n\n• Banking Mobile App\n  - Cross-platform solution\n  - Secure transactions\n  - Biometric authentication\n  - 200k+ downloads\n\n• Social Media Platform\n  - Web & Mobile versions\n  - Real-time messaging\n  - Media sharing\n  - 1M+ users\n\nWhich type of project interests you?",
      "We've delivered various app development projects:\n• Enterprise Mobile Solutions\n  - Custom iOS & Android apps\n  - Cross-platform development\n  - Enterprise security\n  - Offline capabilities\n\n• Progressive Web Apps\n  - Responsive design\n  - Push notifications\n  - Offline functionality\n  - App-like experience\n\n• E-commerce Platforms\n  - Mobile & web versions\n  - Payment integration\n  - Inventory management\n  - Analytics dashboard\n\n• Social Applications\n  - Real-time features\n  - Media handling\n  - User engagement\n  - Analytics integration\n\nTell me what kind of app you're planning!"
    ]
  },
  default: {
    patterns: [],
    responses: [
      "I'm here to help! Could you please rephrase your question? You can ask about:\n• Our services and solutions\n• Technical support and assistance\n• Project planning and execution\n• Pricing and investment\n• Contact information\n• Technology stack\n• Case studies and examples",
      "I'm not sure I understood that. Could you try asking about:\n• What we do\n• How we can help\n• Our services\n• Contact information\n• Technology expertise\n• Project examples\n• Pricing options"
    ]
  }
}

// Enhanced context tracking
const context = {
  lastTopic: null,
  messageCount: 0,
  lastResponse: null,
  conversationHistory: []
}

export async function POST(req) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Convert message to lowercase for matching
    const lowerMessage = message.toLowerCase()
    
    // Find matching pattern
    let matchedPattern = PATTERNS.default
    let matchedTopic = null

    // Check for follow-up responses first
    if (context.lastTopic && PATTERNS[context.lastTopic].followUp) {
      const followUpPattern = PATTERNS[context.lastTopic].followUp
      if (followUpPattern.patterns.some(pattern => lowerMessage.includes(pattern))) {
        matchedPattern = followUpPattern
        matchedTopic = context.lastTopic
      }
    }

    // If no follow-up match, check regular patterns
    if (!matchedTopic) {
      for (const [topic, data] of Object.entries(PATTERNS)) {
        if (data.patterns.some(pattern => lowerMessage.includes(pattern))) {
          matchedPattern = data
          matchedTopic = topic
          break
        }
      }
    }

    // Get random response from matched pattern
    const response = matchedPattern.responses[
      Math.floor(Math.random() * matchedPattern.responses.length)
    ]

    // Update context
    context.lastTopic = matchedTopic
    context.messageCount++
    context.lastResponse = response
    context.conversationHistory.push({
      message,
      response,
      timestamp: new Date().toISOString()
    })

    // Keep conversation history limited
    if (context.conversationHistory.length > 10) {
      context.conversationHistory.shift()
    }

    return NextResponse.json({
      message: response
    })

  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    )
  }
} 