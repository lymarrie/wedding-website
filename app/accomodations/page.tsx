import Image from 'next/image';
import ImageCarousel from '../components/carousel';

export default function Accomodations() {

  return (
    <main className="items-center space-y-20 centered-container mb-32">
        <div className="section text-center">
            <h1>Accomodations</h1>
            <p>Everyone will be staying in the villa for the wedding weekend. </p>
            <p>We have 70 guest cottages and rooms spread out throughout the island.</p>
            <p></p>
        </div>
        <div className="h-96 drop-shadow-md">
          <ImageCarousel />
        </div>
    </main>
  )
}
