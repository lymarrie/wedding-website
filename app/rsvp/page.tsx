import React from 'react';
import Image from 'next/image';
import RSVPForm from '../components/rsvpform';
import FindInvitation from '../components/find-invitation';

export default function RSVP() {

  return (
    <main className="flex min-h-screen flex-col items-center centered-container">
        <div className="space-y-4 text-center">
            <h1>RSVP</h1>
            <p className="mx-auto w-3/4 md:w-2/3">We are excited and grateful to celebrate this special occasion with our friends and family and hope that you can join us.</p>
            <p className="">Please kindly RSVP by August 20th, 2030.</p>
        </div>
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-8">
          <Image
              src="/letter.webp"
              alt="RSVP image"
              width={300}
              height={300}
              priority={true}
              className="mx-auto rounded-lg md:w-96"
            />
          <FindInvitation />
        </div>

        {/* <RSVPForm /> */}
    </main>
  )
}
