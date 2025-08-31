"use client"

import { useState, useEffect } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { NavigationBar } from "@/components/navigation-bar"
import { MainContent } from "@/components/main-content"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (showWelcome) {
    return <WelcomeScreen />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <NavigationBar />
        <MainContent />
      </div>
    </div>
  )
}
