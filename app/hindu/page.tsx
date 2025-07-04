"use client"

import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSymbol } from "@/components/animated-symbol"
import { ChatBox } from "@/components/chat-box"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function HinduPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-100 to-blue-200 dark:from-yellow-900 dark:via-orange-900 dark:to-blue-900 transition-all duration-500">
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
          <AnimatedSymbol type="krishna" className="mb-8" />
          <h1
            className="text-4xl md:text-6xl font-bold text-orange-800 dark:text-orange-300 mb-4"
            style={{ fontFamily: "serif" }}
          >
            जीवन AI
          </h1>
          <p className="text-xl text-orange-700 dark:text-orange-400">आपके जीवन के प्रश्न के उत्तर</p>
        </div>

        <div className="flex justify-center">
          <ChatBox
            placeholder="अपना मन की बात लिखें..."
            label="Jivan AI - आपके जीवन के प्रश्न के उत्तर"
            religionContext="hindu"
          />
        </div>
      </div>
    </div>
  )
}
