import Image from 'next/image';
import EventCard from '../components/eventcard';

export default function WeddingWeekend() {

  const welcomeDinner = {
    src: 'https://i.pinimg.com/originals/df/95/38/df9538ef4f615edfa37552b9e7f4d2f7.png',
    alt: 'Welcome Dinner'
  };

  const wedding = {
    src: 'https://static.vecteezy.com/system/resources/previews/009/659/708/original/watercolor-bouquet-with-tropical-flowers-for-wedding-png.png',
    alt: 'Wedding'
  };

  const brunch = {
    src: 'https://static.vecteezy.com/system/resources/previews/027/291/891/original/tropical-cocktail-with-pineapple-coconut-and-umbrella-on-transparent-background-free-png.png',
    alt: 'My Image'
  };

  return (
    <main className="flex flex-col centered-container">
      <div className="section">
        <h1>Wedding Weekend</h1>
      </div>
      <div className="section">
        <h2>Friday</h2>
        <EventCard 
          styling=""
          photo={welcomeDinner}
          title="Welcome Dinner"
          time="5:00 PM"
          location="Luc's Villa"
          paragraph="Join us for a dinner of pure indulgence featuring caviar, deep-sea sashimi, and Michelin-starred delights."
        />
      </div>
      <div className="section">
        <h2>Saturday</h2>
        <EventCard 
          styling=""
          photo={wedding}
          title="Wedding"
          time="4:30 PM"
          location="Luc's Beach Cabana"
          paragraph="Experience a romantic wedding celebration on Luc's private beach, where love blossoms amidst the enchanting waves."
        />
        <div></div>
      </div>
      <div className="section">
        <h2>Sunday</h2>
        <EventCard 
          styling=""
          photo={brunch}
          title="Farewell Brunch"
          time="10:00 AM"
          location="Luc's Garden Terrace"
          paragraph="Savor a farewell brunch with Belgian waffles, eggs benedict, banana chocolate chip pancakes, and fresh spinach smoothies. For the daring, Bloody Marys and mimosas will be served. Enjoy a culinary farewell treat!"
        />
        <div></div>
      </div>
    </main>
  )
}
