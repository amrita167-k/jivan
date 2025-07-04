"use client"

import { useEffect, useState } from "react"

type SymbolType = "krishna" | "crescent" | "khanda" | "cross"

interface AnimatedSymbolProps {
  type: SymbolType
  className?: string
}

export function AnimatedSymbol({ type, className = "" }: AnimatedSymbolProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const symbols = {
    krishna: "🪈",
    crescent: "☪️",
    khanda: "☬",
    cross: "✝️",
  }

  return (
    <div className={`text-6xl md:text-8xl animate-pulse ${isVisible ? "animate-bounce" : ""} ${className}`}>
      {symbols[type]}
    </div>
  )
}
