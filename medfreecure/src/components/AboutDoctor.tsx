'use client'

import Image from 'next/image'
import { Award, Heart, Users } from 'lucide-react'

export default function AboutDoctor() {
  const credentials = [
    { icon: Award, label: "Yoga Teacher" },
    { icon: Heart, label: "Acupressure Teacher" },
    { icon: Users, label: "Marma Chikitsak" },
    { icon: Award, label: "Rakkenho Practitioner" },
    { icon: Heart, label: "Vastu Vidya Vachaspati" },
    { icon: Users, label: "Chronic Pain Relief Specialist" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
            About Dr. Kanaiya S Gupta
          </h2>
          <p className="text-lg text-gray-300">
            Meet the mind behind Medicine-Free Healing — restoring health naturally without lifelong medications
          </p>
        </div>

        {/* Grid: Image + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Doctor Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/doctor-profile.jpg"
                alt="Dr. Kanaiya S Gupta"
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              For over two decades, I have dedicated my life to helping people overcome <strong>chronic health problems without lifelong dependence on medicines</strong>.  
              My approach combines India’s ancient healing wisdom with safe, natural, and non-invasive practices that restore balance and vitality.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I have helped patients with <strong>arthritis, diabetes, chronic pain, heart blockages, stress-related disorders, kidney and liver conditions, migraines, and other long-term illnesses</strong>.  
              Many found relief, mobility, and renewed health after years of conventional treatment.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I believe the human body has an incredible capacity to heal itself when given the right support. My mission is to guide people by restoring health, reducing medications, and helping them live pain-free, fulfilling lives.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-2xl p-4 flex items-center justify-center flex-col hover:shadow-2xl transition cursor-default"
                >
                  <cred.icon className="w-6 h-6 text-green-600 mb-2" />
                  <span className="text-gray-300 text-sm font-medium text-center">{cred.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center lg:text-left">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeFCNehnF6SNX4ZFtBRr5wfI-vTzR0xsVwU84n5H6ylJ5WGyQ/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition">
                  Book a Consultation
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
