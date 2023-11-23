import Image from 'next/image';
import EventCard from '../components/eventcard';

export default function WeddingWeekend() {

  const events = [
    {
      title: "Welcome Dinner",
      time: "5:00 PM",
      location: "Luc's Villa (Dining Hall)",
      photo: {
        src: '/fish.png',
        alt: 'Welcome Dinner'
      },
      paragraph: "Join us for a dinner of pure indulgence featuring caviar, deep-sea sashimi, and Michelin-starred delights."
    },
    {
      title: "Wedding",
      time: "4:30 PM",
      location: "Luc's Beach Cabana",
      photo: {
        src: '/flowers.webp',
        alt: 'Wedding'
      },
      paragraph: "Experience a romantic wedding celebration on Luc's private beach, where love blossoms amidst the enchanting waves."
    },
    {
      title: "Farewell Brunch",
      time: "10:00 AM",
      location: "Luc's Garden Terrace",
      photo: {
        src: '/tropical-drink.webp',
        alt: 'My Image'
      },
      paragraph: "Savor a farewell brunch with Belgian waffles, eggs benedict, banana chocolate chip pancakes, and fresh spinach smoothies. For the daring, Bloody Marys and mimosas will be served. Enjoy a culinary farewell treat!"
    }
  ];


  return (
    <main className="flex flex-col centered-container">
      <div className="section">
        <h1>Wedding Weekend</h1>
      </div>
      {events.map((event, index) => (
        <div className="section" key={index}>
          <h2>{event.title}</h2>
          <EventCard 
            styling=""
            photo={event.photo}
            title={event.title}
            time={event.time}
            location={event.location}
            paragraph={event.paragraph}
          />
        </div>
      ))}
    </main>
  )
}
