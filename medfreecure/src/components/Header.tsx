'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { Sparkles, Compass, Heart, Activity, Brain, Hand, AlertTriangle } from 'lucide-react'

const approaches = [
  { title: "Medical Astrology", icon: Sparkles },
  { title: "Vastu", icon: Compass },
  { title: "Natural Healing", icon: Heart },
  { title: "Yoga", icon: Activity },
  { title: "Marma Chikitsa", icon: Brain },
  { title: "Acupressure", icon: Hand },
  { title: "Pain Reframed", icon: AlertTriangle },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowHeader(false) // scroll down
      } else {
        setShowHeader(true) // scroll up
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleDropdown = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  // Generate slug for dynamic routing
  const slugify = (title: string) =>
    title.toLowerCase().replace(/\s+/g, '-')

  return (
    <header
      className={`sticky top-0 z-50 shadow-sm bg-white transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* === Top Bar === */}
      <div className="bg-gray-100 text-gray-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-8">
          <span>India - English</span>
          <Search className="w-4 h-4 cursor-pointer" />
        </div>
      </div>

      {/* === Logo & Title === */}
      <div className="bg-white flex justify-center items-center py-3 border-b border-gray-200">
        <Image
          src="/logo1.png"
          alt="Med Free Cure Logo"
          width={48}
          height={48}
          className="mr-3"
        />
        <h1 className="text-2xl font-bold tracking-wide text-gray-900">
          MED FREE CURE
        </h1>
      </div>

      {/* === Navigation Bar === */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center h-14">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium justify-center">
            <li className="py-4 hover:text-yellow-400 cursor-pointer">
              <Link href="/">Home</Link>
            </li>

            {/* Dropdown: Find a Solution */}
            <li
              className="relative py-4 cursor-pointer group"
              onMouseEnter={() => setOpenMenu('solution')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="flex items-center space-x-1 hover:text-yellow-400">
                <span>Find a Solution</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              <div
                className={`absolute left-1/2 transform -translate-x-1/2 top-full bg-white text-gray-900 shadow-lg rounded-lg mt-1 grid grid-cols-2 md:grid-cols-3 gap-4 p-4 w-[90vw] max-w-[600px] transition-all duration-300 ease-in-out origin-top ${
                  openMenu === 'solution'
                    ? 'scale-y-100 opacity-100'
                    : 'scale-y-0 opacity-0 pointer-events-none'
                }`}
              >
                {approaches.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 hover:text-green-600 transition"
                  >
                    <item.icon className="w-5 h-5 text-green-600" />
                    <Link href={`/solution/${slugify(item.title)}`}>
                      <span>{item.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </li>

            {/* Other Menus */}
            {['Meditation', 'Yoga', 'Wisdom', 'Events', 'Social Impact', 'About Us'].map((menu) => (
              <li key={menu} className="py-4 hover:text-yellow-400 cursor-pointer">
                <Link href={`/${slugify(menu)}`}>{menu}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown('solution')}
            >
              <span className="font-semibold">Find a Solution</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openMenu === 'solution' ? 'rotate-180' : ''
                }`}
              />
            </div>

            {/* Dropdown inside mobile */}
            {openMenu === 'solution' && (
              <div className="grid grid-cols-1 gap-3 pl-3 mt-2">
                {approaches.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 hover:text-green-400 transition"
                  >
                    <item.icon className="w-5 h-5 text-green-400" />
                    <Link href={`/solution/${slugify(item.title)}`}>
                      <span>{item.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {['Meditation', 'Yoga', 'Wisdom', 'Events', 'Social Impact', 'About Us'].map((menu) => (
              <div key={menu} className="cursor-pointer hover:text-yellow-400">
                <Link href={`/${slugify(menu)}`}>{menu}</Link>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
