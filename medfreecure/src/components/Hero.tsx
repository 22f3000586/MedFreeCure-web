'use client'

import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-green-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{' '}
              <span className="text-yellow-400">Med Free Cure</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Natural Healing for Chronic Diseases — <span className="text-yellow-400">Without Lifelong Medication</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeFCNehnF6SNX4ZFtBRr5wfI-vTzR0xsVwU84n5H6ylJ5WGyQ/viewform?usp=sharing&ouid=114558700117516588763" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold">
                  Book a Session Now!
                </button>
              </a>

              <a href="#approach">
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2">
                  Discover Our Approach
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>

            {/* Conversion Note */}
            <p className="mt-4 text-yellow-400 font-semibold">
              Join Hundreds of Cured Patients
            </p>

            {/* Doctor Profile */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mt-8">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Founded By
                  </h3>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                    Dr. Kanaiya S Gupta
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Yoga Teacher | Acupressure Teacher | Marma Chikitsak | Rakkenho Practitioner | Vastu Vidya Vachaspati | All Pain Relief
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center">
                <Image
                  src="/doctor-profile.jpg"
                  alt="Dr. Kanaiya S Gupta"
                  width={288}
                  height={288}
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
