"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const ChatMessage = ({ message, isUser }) => (
  <div className={cn(
    "flex w-full",
    isUser ? "justify-end" : "justify-start"
  )}>
    <div className={cn(
      "rounded-lg px-4 py-2 max-w-[80%] shadow-sm",
      isUser ? "bg-blue-600 text-white" : "bg-gradient-to-r from-purple-50 to-blue-50 text-gray-900"
    )}>
      <p className="text-sm whitespace-pre-line">{message}</p>
      <span className="text-xs opacity-70 mt-1 block">
        {new Date().toLocaleTimeString()}
      </span>
    </div>
  </div>
)

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef(null)

  // Load initial greeting when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: "👋 Hello! I'm your AI assistant. I can help you with:\n• Information about our services\n• Technical support\n• Project inquiries\n• General questions\nHow can I assist you today?",
        isUser: false
      }])
    }
  }, [isOpen, messages.length])

  // Save messages to localStorage (with a limit to prevent memory issues)
  useEffect(() => {
    if (messages.length > 0) {
      const limitedMessages = messages.slice(-20) // Keep only last 20 messages
      localStorage.setItem("chatHistory", JSON.stringify(limitedMessages))
    }
  }, [messages])

  // Load messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory")
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { text: userMessage, isUser: true }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()
      setMessages(prev => [...prev, { text: data.message, isUser: false }])
    } catch (error) {
      console.error("Chat error:", error)
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble connecting right now. Please try again later.", 
        isUser: false 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-20 left-8 z-50 flex flex-col items-start">
      {!isOpen && (
        <div className="mb-2 bg-white rounded-lg shadow-lg p-3 text-sm animate-fade-in">
          <p className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            Need help? Let's chat!
          </p>
        </div>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-96 h-[500px] flex flex-col animate-slide-up">
          <div className="flex justify-between items-center mb-4 pb-2 border-b">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 rounded-lg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-xs text-gray-500">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-100 rounded-lg"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea ref={scrollRef} className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  message={message.text}
                  isUser={message.isUser}
                />
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg px-4 py-2">
                    <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="flex gap-2 mt-4 pt-2 border-t">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              disabled={isLoading}
              className="border-gray-200 focus:border-blue-500"
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 group relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  )
}

