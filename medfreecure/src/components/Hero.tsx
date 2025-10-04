'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[170vh] overflow-hidden">
      <Image
        src="/new-hero.png" 
        alt="Meditation Chakra Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* --- THIS IS THE CHANGE --- */}
      {/* This overlay darkens the image so the text is easier to read */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Your centered text */}
      {/* 
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Heal Naturally, Live Freely</h1>
        <p className="text-lg max-w-2xl drop-shadow-lg">
          Discover holistic solutions through meditation, yoga, and inner balance.
        </p>
      </div>
      */}
    </section>
  )
}

