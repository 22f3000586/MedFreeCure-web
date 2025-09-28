'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 relative">

          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo1.png"
              alt="Med Free Cure Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Center - Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-lg font-bold">MED FREE CURE</h1>
          </div>

          {/* Right side - empty but keeps spacing */}
          <div className="flex-shrink-0 w-8" />
        </div>
      </div>
    </header>
  )
}

