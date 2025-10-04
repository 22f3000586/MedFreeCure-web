'use client'

import { Sparkles, Compass, Heart, Activity, Brain, Hand, AlertTriangle } from 'lucide-react'

const approaches = [
  {
    title: "Medical Astrology",
    description: "The study of time, Graha, and Nakshatras to understand health patterns and optimize healing.",
    icon: Sparkles,
  },
  {
    title: "Vastu",
    description: "Every event requires proper space and time. Vastu aligns both to ensure harmony and positive outcomes.",
    icon: Compass,
  },
  {
    title: "Natural Healing",
    description: "Your body has an innate ability to heal. We guide you to unlock it rather than merely suppressing symptoms.",
    icon: Heart,
  },
  {
    title: "Yoga",
    description: "A holistic tool to align body, mind, and spirit for balanced health and vitality.",
    icon: Activity,
  },
  {
    title: "Marma Chikitsa",
    description: "Precise energy utilization — channeling your body’s energy exactly where and when it is needed.",
    icon: Brain,
  },
  {
    title: "Acupressure",
    description: "An ancient, often forgotten technique that instantly diagnoses and supports the body’s natural healing.",
    icon: Hand,
  },
  {
    title: "Pain Reframed",
    description: "Pain is your ally, signaling underlying imbalances. Suppressing it prematurely can worsen the root cause.",
    icon: AlertTriangle,
  },
]

export default function Approach() {
  return (
    <section id="approach" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          Our Approach
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          We combine ancient wisdom and natural practices to restore balance, vitality, and long-term health.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {approaches.map((item, index) => (
    <div
      key={index}
      className={`bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300
        ${item.title === "Pain Reframed" ? "sm:col-span-2 lg:col-span-3 mx-auto" : ""}`}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white mx-auto mb-6">
        <item.icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
      <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
