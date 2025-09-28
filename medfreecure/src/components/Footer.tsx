'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">
              Medicine Free Cure
            </h3>
            <p className="text-gray-300">
              Transform your health naturally. Overcome chronic conditions and regain your vitality without relying on medications.
            </p>
            <div className="flex space-x-4">
  <a href="https://www.facebook.com/profile.php?id=61578203833548" target="_blank" rel="noopener noreferrer">
    <Facebook className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
  </a>
  <a href="https://www.instagram.com/med_free_cure/" target="_blank" rel="noopener noreferrer">
    <Instagram className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
  </a>
  <a href="https://www.youtube.com/@MedFreeCure" target="_blank" rel="noopener noreferrer">
    <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
  </a>
</div>

            <p className="text-gray-400 text-sm mt-2">
              Subscribe to my YouTube channel for real success stories and tips!
            </p>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Landing page */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">yogaclinic9@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">+91 7317312985</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Revere CHSL Flat No. C-1/9/02, Plot No: 1-8, Sector 2, Vashi, Navi Mumbai, Maharashtra 400703</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Medicine Free Cure. All rights reserved. | Yoga Clinic
          </p>
          <p className="text-gray-400 mt-2">
            Built by Taniya
          </p>
        </div>
      </div>
    </footer>
  )
}

