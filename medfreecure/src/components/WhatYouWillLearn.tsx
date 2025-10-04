'use client'

import { BookOpen, HeartPulse, Brain, Leaf, Activity, Clock } from 'lucide-react'

export default function WhatYouWillLearn() {
  const lessons = [
    {
      icon: HeartPulse,
      title: "Regain Energy & Vitality",
      desc: "Learn natural methods to restore your energy and overcome chronic fatigue.",
    },
    {
      icon: Leaf,
      title: "Heal Chronic Conditions",
      desc: "Discover holistic techniques that help manage and improve a wide range of chronic illnesses.",
    },
    {
      icon: Brain,
      title: "Mind-Body Balance",
      desc: "Understand how your mind affects your body and learn strategies to restore harmony.",
    },
    {
      icon: Activity,
      title: "Gentle Daily Practices",
      desc: "Simple routines that can be done at home to support recovery and wellbeing.",
    },
    {
      icon: BookOpen,
      title: "Nutrition & Lifestyle",
      desc: "Know what to eat, what to avoid, and how to structure your lifestyle for long-term health.",
    },
    {
      icon: Clock,
      title: "Build Lasting Health Habits",
      desc: "Adopt habits that stick, helping you stay healthy and prevent future illnesses.",
    },
  ]

  return (
    <section id="what-you-will-learn" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          What You Will Learn
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          A complete framework to naturally restore your health and overcome chronic conditions, 
          without relying solely on medications.
        </p>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {lessons.map((lesson, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white mx-auto mb-6">
                <lesson.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {lesson.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{lesson.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="mb-6 text-lg text-gray-300">
            Want to transform your health naturally?  
            Watch my YouTube videos for more information and subscribe for updates!
          </p>
          <a
            href="https://www.youtube.com/@MedFreeCure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition">
              Subscribe & Start Your Healing Journey
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

