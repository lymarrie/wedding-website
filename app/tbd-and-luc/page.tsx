import Image from 'next/image';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luc',
  description: 'The story of how TBD and Luc met.',
};

export default function Couple() {
  return (
    <main className="flex min-h-screen flex-col items-center centered-container">
        <div className="">
            <h1>TBD and Luc</h1>
        </div>
        <div className="section">
            <h2>The Beginning</h2>  
            <div className="flex flex-col md:flex-row md:space-x-6">
              <Image 
                src="/coffee.webp"
                alt="My Image"
                width={300}
                height={300}
                className="flex mx-auto h-full md:w-1/3" // Optional: Add rounded corners
              />
              <div className="space-y-4 md:w-2/3">
                <p>Once upon a time in the bustling streets of New York City, destiny played cupid in a quaint café where TBD and Luc&apos;s love story brewed like a perfect cup of coffee.</p>
                <p>Luc, the unsuspecting hero of our tale, stood in line, ordering an oat milk cappuccino with an air of sophistication. His reasoning? &quot;Oat milk is full of fiber,&quot; he proclaimed, as if oat milk was the elixir of enlightenment.</p>
                <p>Little did Luc know that his declaration of fiber-filled love would catch the attention of TBD, who happened to be sipping her regular non-oat milk coffee nearby. With an amused eyebrow raise, she couldn&apos;t help but think, &quot;Who orders coffee for the fiber content?&quot;</p>
                <p>And so, the love story that began with oat milk blossomed into a beautiful journey, proving that sometimes, all it takes is a quirky order at a café to stir up the perfect blend of love.</p>
              </div>
            </div>            

        </div>
        <div className="section">
            <h2>The Proposal</h2>
            <div className="flex flex-col md:flex-row md:space-x-6">

            <Image 
              src="/ring.webp"
              alt="My Image"
              width={300}
              height={300}
              className="flex mx-auto h-full md:w-1/3" // Optional: Add rounded corners
            />
              <div className="space-y-4 md:w-2/3">
                <p>In a plot twist as frothy as his oat milk cappuccino, Luc decided to propose to TBD at the same New York City café where they first met.</p>

                <p>Sneakily slipping the ring into her coffee, he eagerly awaited her reaction. As she took the last sip, the clink of metal announced the surprise. The café erupted in cheers as Luc nervously popped the question, turning their favorite coffee spot into the backdrop of a uniquely bubbly proposal.</p>
                
                <p>Here&apos;s to a marriage as sweet and unexpected as a ring in an oat milk cappuccino!</p>
              </div>
            </div>
        </div>
    </main>
  )
}
