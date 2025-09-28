'use client'

import Image from 'next/image'
import { Award, Heart, Users } from 'lucide-react'

export default function AboutDoctor() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Doctor Image */}
          <div className="text-center lg:text-left">
            <div className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-8 overflow-hidden border-4 border-blue-600 shadow-lg">
              <Image
                src="/doctor-profile.jpg"
                alt="Dr. Kanaiya S Gupta"
                width={350}
                height={350}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Dr. Kanaiya S Gupta
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For more than two decades, I have dedicated my life to helping
                people overcome <strong>chronic health problems without lifelong dependence on medicines</strong>.
                My approach combines India’s ancient healing wisdom with safe,
                natural, and non-invasive practices that restore balance and
                vitality.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                I have worked with patients struggling with <strong>arthritis, diabetes,
                chronic pain, heart blockages, stress-related disorders, kidney
                and liver conditions, migraines, and other long-term illnesses</strong>.
                Many of them came to me after years of conventional treatment and
                finally found relief, mobility, and renewed health.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                I believe the human body has an incredible capacity to heal
                itself when given the right support. My mission is to guide
                people by restoring health, reducing
                medicines, and helping them live pain-free, fulfilling lives.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Credentials & Expertise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">Yoga Teacher</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">Acupressure Teacher</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">Marma Chikitsak</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">Rakkenho Practitioner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">Vastu Vidya Vachaspati</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">Chronic Pain Relief Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
