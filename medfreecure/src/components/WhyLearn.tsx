'use client'

import { Heart, Brain, Activity, Clock } from 'lucide-react'

export default function WhyLearn() {
  const reasons = [
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Heal Naturally",
      description:
        "Lower your blood pressure and improve circulation without relying on lifelong medications.",
    },
    {
      icon: <Brain className="w-8 h-8 text-green-600" />,
      title: "Mind-Body Balance",
      description:
        "Experience calmness and clarity with practices that harmonize both body and mind.",
    },
    {
      icon: <Activity className="w-8 h-8 text-green-600" />,
      title: "Proven Techniques",
      description:
        "Learn simple, science-backed methods that thousands have used to restore health.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Experience results just in 3 days",
      description:
        "Follow an easy routine and start seeing positive changes in only four weeks.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="why-learn">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of people are choosing the C.A.L.M routine for natural healing
            and long-term health transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full mx-auto mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
