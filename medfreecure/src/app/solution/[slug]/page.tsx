'use client'

import { useParams } from 'next/navigation'
import { Sparkles, Compass, Heart, Activity, Brain, Hand, AlertTriangle } from 'lucide-react'

const solutionData: Record<
  string,
  { title: string; description: string; icon: any }
> = {
  'medical-astrology': {
    title: 'Medical Astrology',
    description:
      'The study of time, Graha, and Nakshatras to understand health patterns and optimize healing.',
    icon: Sparkles,
  },
  vastu: {
    title: 'Vastu',
    description:
      'Understanding how space, direction, and energy fields influence physical and mental well-being.',
    icon: Compass,
  },
  'natural-healing': {
    title: 'Natural Healing',
    description:
      'Harnessing the body’s innate power to heal itself through diet, lifestyle, and natural elements.',
    icon: Heart,
  },
  yoga: {
    title: 'Yoga',
    description:
      'A union of mind, body, and soul — using movement, breath, and mindfulness to maintain balance and health.',
    icon: Activity,
  },
  'marma-chikitsa': {
    title: 'Marma Chikitsa',
    description:
      'An ancient Indian healing technique focusing on vital energy points to restore physical and emotional balance.',
    icon: Brain,
  },
  acupressure: {
    title: 'Acupressure',
    description:
      'Stimulating specific points on the body to release tension, improve circulation, and promote healing.',
    icon: Hand,
  },
  'pain-reframed': {
    title: 'Pain Reframed',
    description:
      'A holistic approach to pain management that focuses on understanding, reframing, and healing chronic pain naturally.',
    icon: AlertTriangle,
  },
}

export default function SolutionPage() {
  const params = useParams()
  const slug = params.slug as string
  const solution = solutionData[slug]

  if (!solution) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-700">
        <h1 className="text-3xl font-semibold mb-2">404 - Not Found</h1>
        <p>This healing method does not exist yet.</p>
      </div>
    )
  }

  const Icon = solution.icon

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center text-center px-6 py-12">
      <div className="flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-green-600 mr-2" />
        <h1 className="text-4xl font-bold text-gray-900">{solution.title}</h1>
      </div>

      <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
        {solution.description}
      </p>

      <div className="mt-10 max-w-3xl text-gray-600 text-base">
        <p>
          Each approach within <strong>{solution.title}</strong> is designed to
          help you reconnect with your natural healing rhythm. It emphasizes
          restoring harmony between your body, mind, and environment, empowering
          you to take control of your health naturally and sustainably.
        </p>
      </div>
    </div>
  )
}
