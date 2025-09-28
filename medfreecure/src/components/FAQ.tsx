'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Head from 'next/head'

const faqs = [
  {
    question: 'What types of conditions can you help with?',
    answer:
      'I work with people suffering from arthritis, diabetes, heart blockages, chronic pain, migraines, stress-related disorders, kidney and liver problems, and many other long-term illnesses.',
  },
  {
    question: 'Will I have to stop my current medications?',
    answer:
      'No. My approach is complementary — you can continue with your prescribed medicines. Over time, as your body heals, many patients naturally reduce their dependency (under their doctor’s guidance).',
  },
  {
    question: 'How soon can I expect results?',
    answer:
      'Some patients feel relief even after the first session. Others take weeks depending on the severity of their condition, consistency of practice, and lifestyle changes.',
  },
  {
    question: 'Is this treatment safe?',
    answer:
      'Yes. My methods are natural, non-invasive, and free from harmful side effects. They are suitable for most people, including seniors.',
  },
  {
    question: 'Do you guarantee a cure?',
    answer:
      'No medical system can guarantee results. What I offer is a proven, time-tested approach that has helped thousands regain mobility, reduce pain, and live healthier lives.',
  },
  {
    question: 'Can this help if I already had surgery or long-term treatment?',
    answer:
      'Yes. Many of my patients come after surgeries or years of conventional treatment. Natural healing can support recovery and improve quality of life.',
  },
  {
    question: 'How do I start?',
    answer:
      'Simply book a free health assessment or contact me via WhatsApp. I’ll understand your condition, explain the process, and guide you step by step.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Build JSON-LD schema dynamically
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-all duration-200"
            >
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-900"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
