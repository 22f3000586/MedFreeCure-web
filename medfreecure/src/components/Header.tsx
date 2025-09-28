'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-12 space-x-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo1.png"
              alt="Med Free Cure Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-lg font-bold">MED FREE CURE</h1>
        </div>
      </div>
    </header>
  )
}
