import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col centered-container">
      <div className="section tracking-widest text-center xl:mx-auto xl:w-4/5">
        <h1>TBD and Luc</h1>
        <div className="text-xl font-semibold">Date TBD</div>
        <p>Welcome, dear guests, to the heart of our celebration! We are thrilled to have you join us at TBD and Luc&apos;s beachfront villa, nestled amidst 200 acres of pristine tropical wildlife. This promises to be a destination weekend filled with love, laughter, and unforgettable moments.</p>
        <Image 
          src="/palm-trees.png"
          alt="My Image"
          width={2000}
          height={1000}
          className="rounded-lg " // Optional: Add rounded corners
        />
        <p>As we embark on this joyous journey, we extend our warmest welcome to each of you, our cherished friends and family, who will make this celebration truly extraordinary. Let the enchantment begin!</p>
      </div>
    </main>
  )
}
