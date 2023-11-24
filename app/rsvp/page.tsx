import Image from 'next/image';
import RSVPForm from '../components/rsvpform';

export default function RSVP() {

  return (
    <main className="flex min-h-screen flex-col items-center centered-container">
        <div className="space-y-4 text-center">
            <h1>RSVP</h1>
            <p className="flex mx-auto w-2/3">We are excited and grateful to celebrate this special occasion with our friends and family and hope that you can join us.</p>
            <p className="text-center">Kindly reply by XX/XX/XXXX.</p>
        </div>
        <RSVPForm />
    </main>
  )
}
