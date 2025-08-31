"use client"

import { Youtube } from "lucide-react"

export function NavigationBar() {
  const handleYouTubeClick = () => {
    window.open("https://youtube.com", "_blank")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 neon-text-minimal"
          style={{ fontFamily: "ChiangMai, sans-serif" }}
        >
          108
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleYouTubeClick}
            className="p-3 bg-red-600/80 hover:bg-red-600 rounded-full transition-all duration-300 transform hover:scale-110 animate-pulse"
          >
            <Youtube className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  )
}
