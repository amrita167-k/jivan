"use client"
import { ThemeToggle } from "@/components/theme-toggle"
import { DharmaSelector } from "@/components/dharma-selector"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ApiTest } from "@/components/api-test"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-500">
      <ThemeToggle />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Welcome to Jivan AI
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-12">Choose your path to inner peace</p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Choose your spiritual guide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Let Jivan AI help you talk to your inner self through your faith.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Explore More About Jivan AI
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-4">About Jivan AI</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Jivan AI is your personal spiritual companion, designed to help you connect with your inner self
                  through the wisdom of your faith tradition.
                </p>
                <p>
                  Whether you're seeking guidance, comfort, or simply want to explore spiritual questions, Jivan AI
                  adapts to your religious and cultural background to provide meaningful conversations.
                </p>
                <p>
                  Choose your spiritual path and begin a journey of self-discovery, peace, and enlightenment with AI
                  that understands your beliefs and speaks your spiritual language.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <DharmaSelector />

        {/* Add API Test Component */}
        <ApiTest />
      </div>
    </div>
  )
}
