"use client"

import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSymbol } from "@/components/animated-symbol"
import { ChatBox } from "@/components/chat-box"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MuslimPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-100 to-white dark:from-green-900 dark:via-emerald-900 dark:to-gray-900 transition-all duration-500">
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
          <AnimatedSymbol type="crescent" className="mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 dark:text-green-300 mb-4">Jivan AI</h1>
          <p className="text-xl text-green-700 dark:text-green-400">दिल से दिल तक बात चीत</p>
        </div>

        <div className="flex justify-center">
          <ChatBox placeholder="अपने सवाल लिखें..." label="Jivan AI - दिल से दिल तक बात चीत" religionContext="muslim" />
        </div>
      </div>
    </div>
  )
}
