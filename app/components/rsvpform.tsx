// components/RSVPForm.js
'use client'
import { useState } from 'react';
import events from '../data/events'; // Adjust the path accordingly

const RSVPForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState(''); // New state for dietary restrictions
  const [eventSelection, setEventSelection] = useState(
    events.reduce((acc, event) => {
      acc[event.title] = ''; // Initializing with an empty string as the default value
      return acc;
    }, {})
  );

  const handleEventChange = (eventTitle, value) => {
    setEventSelection((prevSelection) => ({
      ...prevSelection,
      [eventTitle]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation if needed

    // Create an object with the form data
    const formData = {
      firstName,
      lastName,
      email,
      events: eventSelection,
      dietaryRestrictions,
    };

    // Use fetch to send a POST request to your serverless function
    const response = await fetch('/api/save-rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Handle the response as needed
    if (response.ok) {
      // Success, you can redirect or show a success message
      console.log('RSVP submitted successfully!');
    } else {
      // Handle errors
      console.error('Error submitting RSVP');
    }
  };

  return (
    <form className="space-y-8 w-2/3">
        <h3>Guest Information</h3>
        <div className="">
            <label htmlFor="firstName" className="">
                First Name *
            </label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full"
            />
        </div>
        <div>
            <label htmlFor="lastName" className="">
                Last Name *
            </label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full"
            />
        </div>
        <div>
            <label htmlFor="email" className="">
                Email *
            </label>
            <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full"
            />
        </div>
      {/* Repeat similar code for last name and email fields */}
      
      <div className="py-4 space-y-10">
        <h3>Event Information</h3>
        <h5 className="mt-4">Which Events Will You Be Attending? (Select all that apply) *</h5>
        <div className="mt-4 space-y-4">
            {events.map((event) => (
                <div key={event.title}>
                <label htmlFor={event.title}>
                    <strong>{event.day}</strong> - <em>{event.title}</em> *
                </label>
                <select
                    id={`eventSelection_${event.title}`}
                    name={`eventSelection_${event.title}`}
                    value={eventSelection[event.title] || ''} // Ensure a default value is set
                    onChange={(e) => handleEventChange(event.title, e.target.value)}
                    className="mt-1 p-2 border w-full rounded-md"
                    required
                >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
            ))}
        </div>
        <div className="py-4 space-y-4">
            <label htmlFor="dietaryRestrictions" className="">
                Please list any dietary restrictions (optional)
            </label>
            <input
                type="text"
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                className="mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full"
            />
        </div>
      </div>

      <div className="text-center">
        <button
            type="submit"
            onClick={handleSubmit}
            className="bg-cyan-300 border-2 border-cyan-600 font-semibold py-3 px-4 w-52 rounded-md transition duration-300 ease-in-out hover:bg-white hover:border-cyan-300"
        >
            Submit RSVP
        </button>
      </div>
    </form>
  );
};

export default RSVPForm;
