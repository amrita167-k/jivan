"use client"

import { useTheme } from "./theme-provider"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
    </Button>
  )
}
