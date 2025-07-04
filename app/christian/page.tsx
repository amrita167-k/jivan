"use client"

import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSymbol } from "@/components/animated-symbol"
import { ChatBox } from "@/components/chat-box"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ChristianPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-sky-100 dark:from-blue-900 dark:via-gray-900 dark:to-sky-900 transition-all duration-500">
      <ThemeToggle />

      <Button
        variant="ghost"
        onClick={() => router.push("/")}
        className="fixed top-4 left-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700/90"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Button>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <AnimatedSymbol type="cross" className="mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 dark:text-blue-300 mb-4">Jivan AI</h1>
          <p className="text-xl text-blue-700 dark:text-blue-400">Talk to your faith</p>
        </div>

        <div className="flex justify-center">
          <ChatBox
            placeholder="Write what's on your mind..."
            label="Jivan AI - Talk to your faith"
            religionContext="christian"
          />
        </div>
      </div>
    </div>
  )
}
