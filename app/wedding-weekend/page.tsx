import React from 'react';
import Image from 'next/image';
import EventCard from '../components/eventcard';
import events from '../data/events'; // Adjust the path accordingly


export default function WeddingWeekend() {

  return (
    <main className="flex flex-col centered-container">
      <div className="section">
        <h1>Wedding Weekend</h1>
      </div>
      {events.map((event, index) => (
        <div className="section" key={index}>
          <h2>{event.day}</h2>
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
