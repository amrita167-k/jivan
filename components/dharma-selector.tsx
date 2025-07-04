"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"

interface DharmaOption {
  id: string
  name: string
  avatar: string
  colors: string
  hoverColors: string
  path: string
}

const dharmaOptions: DharmaOption[] = [
  {
    id: "hindu",
    name: "Hindu",
    avatar: "🕉️",
    colors: "bg-gradient-to-br from-yellow-400 to-blue-500",
    hoverColors: "hover:from-yellow-300 hover:to-blue-400",
    path: "/hindu",
  },
  {
    id: "muslim",
    name: "Muslim",
    avatar: "☪️",
    colors: "bg-gradient-to-br from-green-500 to-white",
    hoverColors: "hover:from-green-400 hover:to-gray-100",
    path: "/muslim",
  },
  {
    id: "sikh",
    name: "Sikh",
    avatar: "☬",
    colors: "bg-gradient-to-br from-orange-500 to-blue-900",
    hoverColors: "hover:from-orange-400 hover:to-blue-800",
    path: "/sikh",
  },
  {
    id: "christian",
    name: "Christian",
    avatar: "✝️",
    colors: "bg-gradient-to-br from-blue-200 to-white",
    hoverColors: "hover:from-blue-100 hover:to-gray-50",
    path: "/christian",
  },
]

export function DharmaSelector() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto px-4">
      {dharmaOptions.map((option) => (
        <Card
          key={option.id}
          className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${option.colors} ${option.hoverColors} border-0 overflow-hidden group`}
          onClick={() => router.push(option.path)}
        >
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4 group-hover:animate-bounce">{option.avatar}</div>
            <h3 className="text-xl font-bold text-white drop-shadow-lg">{option.name}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
