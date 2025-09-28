'use client'

import { useState } from 'react'
import { Menu, X, Bot, Rss, Users, Calendar, LogOut, Bell, Settings } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Left side - Logo only */}
          <div className="flex items-center">
            <Image
              src="/logo1.png"
              alt="Med Free Cure Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Center - Title only */}
          <div className="flex items-center justify-center flex-1">
            <h1 className="text-lg font-bold">
              MED FREE CURE
            </h1>
          </div>

          {/* Right side - All other elements */}
          <div className="flex items-center space-x-4">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white p-2">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white p-2">
                <Settings className="w-5 h-5" />
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
              <a
                href="#ai-bot"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
              >
                <Bot className="w-4 h-4 mr-2" />
                Ai Bot
              </a>
              <a
                href="#feed"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
              >
                <Rss className="w-4 h-4 mr-2" />
                Feed
              </a>
              <a
                href="#members"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
              >
                <Users className="w-4 h-4 mr-2" />
                Members
              </a>
              <a
                href="#events"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </a>
              <a
                href="#logout"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
