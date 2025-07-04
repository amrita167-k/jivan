"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ApiTest() {
  const [testing, setTesting] = useState(false)
  const [result, setResult] = useState<string>("")

  const testApi = async () => {
    setTesting(true)
    setResult("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Hello, test message" }],
          religionContext: "hindu",
        }),
      })

      if (response.ok) {
        setResult("✅ API is working!")
      } else {
        const errorText = await response.text()
        setResult(`❌ API Error: ${response.status} - ${errorText}`)
      }
    } catch (error) {
      setResult(`❌ Network Error: ${error}`)
    } finally {
      setTesting(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border">
      <Button onClick={testApi} disabled={testing} size="sm">
        {testing ? "Testing..." : "Test API"}
      </Button>
      {result && <div className="mt-2 text-xs max-w-xs">{result}</div>}
    </div>
  )
}
