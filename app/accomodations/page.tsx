import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import ImageCarousel from '../components/carousel';

export const metadata: Metadata = {
  title: 'Accomodations',
  description: 'Accomodations for the wedding.',
};

export default function Accomodations() {

  return (
    <main className="items-center min-h-screen space-y-20 centered-container">
        <div className="section text-center">
            <h1>Accomodations</h1>
            <p>Everyone will be staying in the villa for the wedding weekend. </p>
            <p>We have 70 guest cottages and rooms spread out throughout the island.</p>
            <p></p>
        </div>
        <ImageCarousel />
    </main>
  )
}
