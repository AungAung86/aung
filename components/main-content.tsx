"use client"

import { Smartphone, Shield, MapPin, Phone } from "lucide-react"

export function MainContent() {
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleViber = () => {
    const phoneNumber = "09680778660"
    const internationalNumber = `+95${phoneNumber.substring(1)}`

    // Try multiple Viber approaches for APK compatibility
    const viberUrls = [
      `viber://chat?number=${internationalNumber}`,
      `viber://contact?number=${internationalNumber}`,
      `https://viber.click/${internationalNumber}`,
      `https://viber.com/contact?number=${internationalNumber}`,
      `intent://chat?number=${internationalNumber}#Intent;scheme=viber;package=com.viber.voip;end;`,
      `tel:${internationalNumber}`, // Fallback to phone call
    ]

    // Try each URL in sequence
    let currentIndex = 0
    const tryNextUrl = () => {
      if (currentIndex < viberUrls.length) {
        try {
          window.location.href = viberUrls[currentIndex]
          currentIndex++
          // If the URL doesn't work, try the next one after a short delay
          setTimeout(() => {
            if (currentIndex < viberUrls.length) {
              tryNextUrl()
            }
          }, 1000)
        } catch (error) {
          currentIndex++
          if (currentIndex < viberUrls.length) {
            tryNextUrl()
          }
        }
      }
    }

    tryNextUrl()
  }

  const handleYoutube = () => {
    window.open("https://youtube.com", "_blank")
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="text-center py-8">
        <h1
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse mb-8 neon-text"
          style={{ fontFamily: "Masterpiece, sans-serif" }}
        >
          108 Mobile Sales & Services
        </h1>
        <div
          className="text-8xl md:text-9xl font-black float-animation mt-8"
          style={{
            fontFamily: "ChiangMai, sans-serif",
            color: "#00ffff",
            textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
          }}
        >
          108
        </div>
      </div>

      {/* Content Blocks */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Block 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3
                className="text-xl font-bold text-white mb-3 subtle-glow"
                style={{ fontFamily: "ChiangMai, sans-serif" }}
              >
                မည်သည့် Mobile Phone ကိုမဆို
              </h3>
              <p
                className="text-gray-100 leading-relaxed text-shadow-sm"
                style={{ fontFamily: "Masterpiece, sans-serif" }}
              >
                စျေးနှုန်းအသက်သာဆုံး ဝန်ဆောင်မှုအကောင်းဆုံး အရည်အသွေးအကောင်းဆုံးဖြင့် အမြန်ဆုံး ပြုပြင် ဆောင်ရွက်ပေးပါသည်
              </p>
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3
                className="text-xl font-bold text-white mb-3 subtle-glow"
                style={{ fontFamily: "ChiangMai, sans-serif" }}
              >
                အသုံးအဆောင်ပစ္စည်းများ
              </h3>
              <p
                className="text-gray-100 leading-relaxed text-shadow-sm"
                style={{ fontFamily: "Masterpiece, sans-serif" }}
              >
                Phone Cover, Glass, PowerBank နဲ့ အခြားသော မိုဘိုင်း ဆက်စပ်ပစ္စည်းများကိုလဲ ပစ္စည်းကောင်း စျေးနှုန်းချိုသာစွာဖြင့် ဝယ်ယူနိုင်ပါသည်
              </p>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-bounce">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3
                className="text-xl font-bold text-white mb-3 subtle-glow"
                style={{ fontFamily: "ChiangMai, sans-serif" }}
              >
                ဆက်သွယ်ရန်
              </h3>
              <div
                className="text-gray-100 leading-relaxed space-y-2 text-shadow-sm"
                style={{ fontFamily: "Masterpiece, sans-serif" }}
              >
                <p>ကားလေးဂိတ် အောင်ကဖီးအနီး</p>
                <p className="font-semibold">108 Mobile အုတ်တွင်းမြို့</p>
                <div className="space-y-2 mt-4">
                  <button
                    onClick={() => handlePhoneCall("09779986788")}
                    className="flex items-center space-x-2 bg-green-600/80 hover:bg-green-600 px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 w-full max-w-full"
                  >
                    <Phone className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white font-semibold text-sm truncate">09779986788</span>
                  </button>
                  <button
                    onClick={() => handlePhoneCall("09254425040")}
                    className="flex items-center space-x-2 bg-green-600/80 hover:bg-green-600 px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 w-full max-w-full"
                  >
                    <Phone className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white font-semibold text-sm truncate">09254425040</span>
                  </button>
                  <button
                    onClick={() => handlePhoneCall("09680778660")}
                    className="flex items-center space-x-2 bg-green-600/80 hover:bg-green-600 px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 w-full max-w-full"
                  >
                    <Phone className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white font-semibold text-sm truncate">09680778660</span>
                  </button>

                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <button
                      onClick={handleViber}
                      className="flex flex-col items-center justify-center bg-purple-600/80 hover:bg-purple-600 px-3 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex-1 min-w-0"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.398.002C5.473.002.001 5.474.001 11.4c0 2.984 1.22 5.69 3.188 7.66l-.525 3.084 3.228-.888c1.82 1.025 3.92 1.612 6.17 1.612 5.925 0 10.73-4.802 10.73-10.728C22.792 5.274 17.323.002 11.398.002zm5.929 7.758c-.044-.264-.16-.479-.347-.645-.187-.166-.427-.25-.72-.25-.264 0-.506.073-.726.22-.22.146-.39.35-.51.61-.264.572-.728 1.235-1.393 1.99-.665.754-1.44 1.49-2.325 2.206l-.428.346c-.88.712-1.587 1.283-2.123 1.713-.536.43-.857.645-.964.645-.088 0-.22-.088-.396-.264-.176-.176-.308-.396-.396-.66-.088-.264-.132-.572-.132-.924 0-.616.103-1.19.308-1.713.205-.523.493-.99.864-1.4.371-.41.8-.748 1.287-1.014.487-.266 1.003-.4 1.548-.4.352 0 .66.073.924.22.264.146.479.35.645.61.166.264.25.572.25.924 0 .22-.044.44-.132.66-.088.22-.22.396-.396.528-.176.132-.396.198-.66.198-.176 0-.35-.044-.523-.132-.176-.088-.308-.22-.396-.396-.088-.176-.132-.396-.132-.66 0-.088.044-.132.132-.132.044 0 .088.022.132.066.088.044.132.11.132.198 0 .044-.022.088-.066.132-.044.044-.088.066-.132.066-.044 0-.088-.022-.132-.066-.088-.088-.132-.132-.198-.198-.044-.044-.066-.088-.066-.132 0-.088.044-.132.132-.132.044 0 .088.022.132.066.044.044.066.088.066.132z" />
                        </svg>
                        <span className="text-white font-semibold text-sm">Viber</span>
                      </div>
                      <span className="text-white text-xs truncate">09680778660</span>
                    </button>

                    <button
                      onClick={handleYoutube}
                      className="flex items-center justify-center space-x-2 bg-red-600/80 hover:bg-red-600 px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex-1 min-w-0"
                    >
                      <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span className="text-white font-semibold text-sm truncate">YouTube</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
