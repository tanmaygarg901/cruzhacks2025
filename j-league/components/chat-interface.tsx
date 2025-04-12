/**"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { UserIcon, Bot } from "lucide-react"

export function ChatInterface() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Simulate AI response (replace with actual AI integration later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Thank you for your query. While I can provide general information, please note that this is not legal advice. For your specific situation, it's best to consult with a licensed attorney who can give you personalized legal counsel.",
        },
      ])
    }, 1000)

    setInput("")
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex flex-col h-[600px] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow-inner">
      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex items-start space-x-2 max-w-[80%] ${
                message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  message.role === "user" ? "bg-navy-600 text-white" : "bg-white text-navy-800 border border-gray-200"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === "user" ? "bg-navy-200" : "bg-gold-200"
                }`}
              >
                {message.role === "user" ? (
                  <UserIcon className="w-5 h-5 text-navy-600" />
                ) : (
                  <Bot className="w-5 h-5 text-gold-600" />
                )}
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
        <div className="flex space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your legal situation..."
            className="flex-grow resize-none"
            rows={3}
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white px-6"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}*/
