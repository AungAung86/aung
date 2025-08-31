"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [colors, setColors] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const backgroundClasses = [
    "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
    "bg-gradient-to-br from-red-900 via-pink-900 to-purple-900",
    "bg-gradient-to-br from-green-900 via-teal-900 to-blue-900",
    "bg-gradient-to-br from-orange-900 via-red-900 to-pink-900",
  ]

  return (
    <div className="fixed inset-0 -z-10">
      <div className={`absolute inset-0 transition-all duration-3000 ${backgroundClasses[colors]}`} />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Moving shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"
          style={{ top: "10%", left: "10%" }}
        />
        <div
          className="absolute w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float-medium"
          style={{ top: "60%", right: "10%" }}
        />
        <div
          className="absolute w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-float-fast"
          style={{ bottom: "20%", left: "30%" }}
        />
      </div>
    </div>
  )
}
