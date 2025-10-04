'use client'

import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null)

  const testimonials = [
    {
      name: "Mr. Jwala Vishwakarma",
      location: "Chembur, Mumbai",
      rating: 5,
      shortText: "Kanaiya's C.A.L.M routine changed my life! Off meds in 2 months, relief from everyday 130 Ml. of insulin and dialysis...",
      fullText: "Kanaiya's C.A.L.M routine changed my life! Off meds in 2 months, relief from everyday 130 Ml. of insulin and dialysis, stopped high doses of medicines for BP and fatigue, feeling energetic and healthy. Earlier I was not able to sit on my own now i walk 1-2 KM. everyday Highly recommend!",
      videoId: "w-aF1VEZX5M" // Replace with actual YouTube video ID
    },
    {
      name: "Mr. Amit Kachhawa",
      location: "Mumbai, Maharashtra",
      rating: 5,
      shortText: "Amazing results with Kanaiya's acupressure routine! My blood pressure is stable, Numbness vanished, Spine relaxed, Un...",
      fullText: "Amazing results with Kanaiya's acupressure routine! My blood pressure is stable, Numbness vanished, Spine relaxed, Unbearable pain vanished and I'm medication-free in just 3 days. I am able to sit, run and even bend.",
      videoId: "jNaY8GDUp4A" // Replace with actual YouTube video ID
    },
    {
      name: "Dr. S.N Gupta",
      location: "",
      rating: 5,
      shortText: "Feeling great after Kanaiya's DIY routine, completely cured from Sleep Apnea and high BP.",
      fullText: "Feeling great after Kanaiya's DIY routine, completely cured from Sleep Apnea and high BP.",
      videoId: "Dxece-FARTY" // Replace with actual YouTube video ID
    },
    {
      name: "Mr. Keshav Dubey",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      shortText: "I was suffering from high blood pressure. Later on, I was diagnosed with heart blockage after angiogram, Kanaiya pers...",
      fullText: "I was suffering from high blood pressure. Later on, I was diagnosed with heart blockage after angiogram, Kanaiya personally came to Chennai to assess the situation and ensured us that there is no need of surgery, I went to Mumbai for 21 days and returned with a fully healthy body. I Started playing 3 rounds of badminton, Jogging, etc. Whereas on his visit i was not able to walk up to my drawing room. Now, I am in good shape till this day No BP No Heart Blockage.",
      videoId: "4C6gNkZwOKA" // Replace with actual YouTube video ID
    },
    {
      name: "Mr. Ramakrishnan",
      location: "Mumbai, Maharashtra",
      rating: 5,
      shortText: "Ocular hypertension detected in 2015 with symptoms of extreme pain, coloured rings, halos. Dramatic vision loss from...",
      fullText: "Ocular hypertension detected in 2015 with symptoms of extreme pain, coloured rings, halos. Dramatic vision loss from Jan 2023 to July 2023 and total vision loss up to 98% with severe high pressure and pain in eyes. Then, switched on to Ayurvedic and Marma therapies for 3 months, twice in a week. Pressure in eyes and hardness in eyeballs, became normal and life became easy without fear of side effects of Medicine.",
      videoId: "phiqwgI-RBY" // Replace with actual YouTube video ID
    },
    {
      name: "Mr. Chetan Kamat",
      location: "Mumbai, Maharashtra",
      rating: 5,
      shortText: "I had been suffering from Vertigo underwent surgery and removed the enlarged cyst, post-surgery, Nair Hospital conduc...",
      fullText: "I had been suffering from Vertigo underwent surgery and removed the enlarged cyst, post-surgery, Nair Hospital conducted ear test and said Menieres syndrome. Slowly, started Hypo thyroid, B12 deficiency, hearing drop, vertigo, tinnitus and one ear loss completely and depressed. In covid period lost my other ear too. Then Nair hospital, Mumbai conducted Thyroid Fnac and said acute thyroiditis and 100% permanent hearing disability. So, I was completely depressed and was very much annoyed with Tinnitus and wasn't able to sleep every night. Sleepless nights, Tinnitus and depression is now totally under control within a month of therapies and again without any medicines too.",
      videoId: "c97Oi4Etilw" // Replace with actual YouTube video ID
    }
  ]

  const toggleExpanded = (index: number) => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Testimonials & Awards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-yellow-400 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-300">
                  {testimonial.location}
                </p>
              </div>

              <div className="text-gray-300 mb-4">
                <p className="text-sm">
                  "{expandedTestimonial === index 
                    ? testimonial.fullText 
                    : testimonial.shortText
                  }"
                </p>
              </div>

              {/* YouTube Video - Always Visible */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}?rel=0`}
                  title={`${testimonial.name} Testimonial Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>

              {testimonial.fullText.length > testimonial.shortText.length && (
                <button
                  onClick={() => toggleExpanded(index)}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  {expandedTestimonial === index ? 'less' : 'more'}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-8">
          <div className="bg-primary-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-lg mb-6">
              Don't wait another day to start your transformation. Join thousands of people who have already taken control of their health.
            </p>
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeFCNehnF6SNX4ZFtBRr5wfI-vTzR0xsVwU84n5H6ylJ5WGyQ/viewform?usp=sharing&ouid=114558700117516588763" 
                target="_blank" 
                rel="noopener noreferrer"
              >
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Start Your Journey Today
            </button>
            </a>
          </div>

          {/* Subscribe CTA */}
          <div className="bg-yellow-400 text-gray-900 rounded-2xl p-6 max-w-4xl mx-auto shadow-lg">
            <h4 className="text-xl font-bold mb-2">Enjoying the Success Stories?</h4>
            <p className="mb-4">
              Watch more real testimonials and health tips on my YouTube channel. Subscribe now and stay updated!
            </p>
            <a
              href="https://www.youtube.com/@MedFreeCure"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
