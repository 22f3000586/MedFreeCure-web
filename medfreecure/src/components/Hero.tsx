'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-green-900 via-gray-800 to-gray-900 min-h-[calc(100vh-7rem)] flex items-center overflow-visible pt-[7rem]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white space-y-6 lg:space-y-8">
            

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Natural Healing for Chronic Diseases — <span className="text-yellow-400">Without Lifelong Medication</span>
            </p>

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

            </div>

            <p className="text-yellow-400 font-semibold mt-2">
              Join Hundreds of Cured Patients
            </p>
          </div>

          {/* Right Content - Doctor Photo */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gray-300 rounded-full flex items-center justify-center">
                <Image
                  src="/doctor-profile.jpg"
                  alt="Dr. Kanaiya S Gupta"
                  width={320}
                  height={320}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
