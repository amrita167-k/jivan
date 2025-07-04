"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Input } from "@/components/ui/input"
import { Send, Bot, User, AlertCircle } from "lucide-react"
import { useChat } from "@ai-sdk/react"
import { useState } from "react"

interface ChatBoxProps {
  placeholder: string
  label: string
  religionContext: "hindu" | "muslim" | "sikh" | "christian"
}

export function ChatBox({ placeholder, label, religionContext }: ChatBoxProps) {
  const [error, setError] = useState<string | null>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      religionContext,
    },
    onError: (error) => {
      console.error("Chat error:", error)
      setError("कुछ गलत हुआ है। कृपया दोबारा कोशिश करें।")
    },
    onResponse: () => {
      setError(null) // Clear error on successful response
    },
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError(null)
    handleSubmit(e)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200">{label}</h2>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>आपका स्वागत है! कोई भी सवाल पूछें...</p>
              <p className="text-sm mt-2">Welcome! Ask any question...</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === "user" ? "bg-blue-500 text-white" : "bg-purple-500 text-white"
                    }`}
                  >
                    {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-purple-500 text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <form onSubmit={onSubmit} className="flex gap-3">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder={placeholder}
              disabled={isLoading}
              className="flex-1 h-12 text-base bg-white/50 dark:bg-gray-700/50 border-gray-300/50 dark:border-gray-600/50 focus:border-blue-400 dark:focus:border-blue-500 rounded-xl"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="h-12 w-12 rounded-xl bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>

          {/* Debug Info */}
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
            {religionContext} context • {messages.length} messages
          </div>
        </div>
      </div>
    </div>
  )
}
