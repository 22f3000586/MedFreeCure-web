import Hero from '@/components/Hero'
import Approach from '@/components/Approach'
import WhyLearn from '@/components/WhyLearn'
import WhatYouWillLearn from '@/components/WhatYouWillLearn'
import AboutDoctor from '@/components/AboutDoctor'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Approach />
      <WhyLearn />
      <WhatYouWillLearn />
      <AboutDoctor />
      <Testimonials />
      <FAQ />
    </div>
  )
}
