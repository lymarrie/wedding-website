import Image from 'next/image';
import RSVPForm from '../components/rsvpform';

export default function RSVP() {

  return (
    <main className="flex min-h-screen flex-col items-center centered-container">
        <div className="space-y-4 text-center">
            <h1>RSVP</h1>
            <div className="flex flex-col space-y-8 md:flex-row md:items-center">
              <Image
                src="/letter.webp"
                alt="RSVP image"
                width={300}
                height={300}
                className="w-52 mx-auto rounded-lg md:w-96"
              />
              <div className="flex flex-col space-y-8 px-2 sm:px-16 md:px-0 lg:px-8 xl:px-24">
                <p className="">We are excited and grateful to celebrate this special occasion with our friends and family and hope that you can join us.</p>
                <p className="">Kindly reply by XX/XX/XXXX.</p>
              </div>
            </div>
        </div>

        <RSVPForm />
    </main>
  )
}
