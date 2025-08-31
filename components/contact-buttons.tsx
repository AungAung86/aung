"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactButtons() {
  const handleYouTubeClick = () => {
    window.open("https://youtube.com", "_blank")
  }

  const handleViberClick = () => {
    // Try to open Viber app, fallback to web version
    const viberUrl = "viber://contact?number=%2B959123456789"
    const fallbackUrl = "https://www.viber.com"

    window.location.href = viberUrl

    // Fallback after a short delay if Viber app doesn't open
    setTimeout(() => {
      window.open(fallbackUrl, "_blank")
    }, 1000)
  }

  return (
    <Card className="p-6 bg-card border-border">
      <h2 className="text-xl font-semibold mb-4 text-center text-card-foreground">ဆက်သွယ်ရန်</h2>
      <div className="flex gap-4 justify-center">
        <Button
          onClick={handleYouTubeClick}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          YouTube
        </Button>

        <Button
          onClick={handleViberClick}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602.584c.64-.387 2.85-1.8 4.218-2.883 1.01.077 2.04.119 3.094.119 4.76 0 7.83-.623 8.23-5.078.42-4.646-.36-7.527-2.14-9.372C17.806.75 14.16.004 11.398.002zm.067 1.697c2.434.002 5.729.694 7.238 2.117 1.57 1.58 2.26 4.15 1.9 8.197-.344 3.85-2.895 4.27-7.098 4.27-.93 0-1.85-.041-2.771-.104l-.64.608s-1.57 1.26-2.457 1.96c-.3.24-.643.197-.643-.3v-3.03l-.52-.26c-4.71-1.353-4.66-6.47-4.61-9.193.06-2.73.57-4.97 2.08-6.47C6.16 1.294 9.03.002 11.465.002z" />
          </svg>
          Viber
        </Button>
      </div>
    </Card>
  )
}
