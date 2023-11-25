import Image from 'next/image';

export default function Travel() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 centered-container">
        <div className="section text-center">
            <h1>Travel</h1>
            <p>Please fly directly to TBD and Luc&apos;s private island, near South Malé Atoll, Maldives.</p>
            <Image 
              src="/plane.webp"
              alt="My Image"
              width={2000}
              height={1000}
              priority={true}
              className="mx-auto w-2/3 rounded-lg" // Optional: Add rounded corners
            />
            <p>Alternatively, you are more than welcome journey with TBD and Luc directly via their private yacht, which will be departing from Fiji one week before the wedding.</p>
            <Image 
              src="/yacht.png"
              alt="My Image"
              width={2000}
              height={1000}
              priority={true}
              className="mx-auto w-2/3 rounded-lg" // Optional: Add rounded corners
            />
        </div>
    </main>
  )
}
