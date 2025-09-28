'use client'

import { BookOpen, HeartPulse, Brain, Leaf, Activity, Clock } from 'lucide-react'

export default function WhatYouWillLearn() {
  const lessons = [
    {
      icon: <HeartPulse className="w-10 h-10 text-green-600" />,
      title: "Regain Energy & Vitality",
      desc: "Learn natural methods to restore your energy and overcome chronic fatigue.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: "Heal Chronic Conditions",
      desc: "Discover holistic techniques that help manage and improve a wide range of chronic illnesses.",
    },
    {
      icon: <Brain className="w-10 h-10 text-green-600" />,
      title: "Mind-Body Balance",
      desc: "Understand how your mind affects your body and learn strategies to restore harmony.",
    },
    {
      icon: <Activity className="w-10 h-10 text-green-600" />,
      title: "Gentle Daily Practices",
      desc: "Simple routines that can be done at home to support recovery and wellbeing.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      title: "Nutrition & Lifestyle",
      desc: "Know what to eat, what to avoid, and how to structure your lifestyle for long-term health.",
    },
    {
      icon: <Clock className="w-10 h-10 text-green-600" />,
      title: "Build Lasting Health Habits",
      desc: "Adopt habits that stick, helping you stay healthy and prevent future illnesses.",
    },
  ]

  return (
    <section id="what-you-will-learn" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You Will Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete framework to naturally restore your health and overcome chronic conditions, without relying solely on medications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {lessons.map((lesson, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                {lesson.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {lesson.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{lesson.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="mb-4 text-lg text-gray-700">
            Want to transform your health naturally? Watch my YouTube videos for real success stories and subscribe for updates!
          </p>
          <a
              href="https://www.youtube.com/@MedFreeCure"
              target="_blank"
              rel="noopener noreferrer"
            >
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
            Subscribe & Start Your Healing Journey
          </button>
          </a>
        </div>
      </div>
    </section>
  )
}
