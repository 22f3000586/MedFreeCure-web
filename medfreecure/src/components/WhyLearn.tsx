'use client'

import { Heart, Brain, Activity, Clock } from 'lucide-react'

export default function WhyLearn() {
  const reasons = [
    {
      icon: Heart,
      title: "Heal Naturally",
      description:
        "Lower your blood pressure and improve circulation without relying on lifelong medications.",
    },
    {
      icon: Brain,
      title: "Mind-Body Balance",
      description:
        "Experience calmness and clarity with practices that harmonize both body and mind.",
    },
    {
      icon: Activity,
      title: "Proven Techniques",
      description:
        "Learn simple, time-tested methods that thousands have used to restore health.",
    },
    {
      icon: Clock,
      title: "Fast Results",
      description:
        "Follow an easy routine and start noticing changes in just a few days.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900" id="why-learn">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Discover why Hundreds of people trust Med Free Cure for a medicine-free, 
          natural, and lasting health transformation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white mx-auto mb-6">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
