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
      acc[event.id] = ''; // Initializing with an empty string as the default value
      return acc;
    }, {})
  );

  const handleEventChange = (eventId, value) => {
    setEventSelection((prevSelection) => ({
      ...prevSelection,
      [eventId]: value,
    }));
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormSubmittedSuccessfully, setIsFormSubmittedSuccessfully] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = () => {

    const formData = {
      firstName,
      lastName,
      email,
      dietaryRestrictions,
      events: Object.entries(eventSelection).map(([eventId, attending]) => ({
        event: eventId,
        attending,
      })),
    };
  
    // Check if all required fields (except dietaryRestrictions) have a value
    const requiredFieldsValid = Object.entries(formData)
      .filter(([key, value]) => key !== 'dietaryRestrictions')
      .every(([key, value]) => value);
  
    // Check if all three events have a non-empty value
    const allEventsSelected = Object.values(eventSelection).every((value) => value !== '');
  
    // Return true only if both conditions are met
    return requiredFieldsValid && allEventsSelected && isValidEmail;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set formSubmitted to true when the user clicks RSVP
    setFormSubmitted(true);

    // Perform form validation
    if (!isFormValid()) {
        console.error('Form validation failed');
        // You can show an error message to the user or handle it as needed
        return;
    }

    // Create an object with the form data
    const formData = {
      firstName,
      lastName,
      email,
      events: Object.entries(eventSelection).map(([eventId, attending]) => ({
        event: eventId,
        attending: attending === 'yes', // Convert 'yes' to true, 'no' to false
    })),
      dietaryRestrictions,
    };

    // Use fetch to send a POST request to your serverless function
    const response = await fetch('/api/create-rsvp', {
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
      setIsFormSubmittedSuccessfully(true); // Set the state to true on successful submission
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
                // className="mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full"
                className={`${formSubmitted && !firstName ? 'mt-1 p-2 bg-orange-50 w-full border-2 border-red-500' : 'mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full'}`}
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
                className={`${formSubmitted && !lastName ? 'mt-1 p-2 bg-orange-50 w-full border-2 border-red-500' : 'mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full'}`}
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
                className={`${formSubmitted && (!email || !isValidEmail ) ? 'mt-1 p-2 bg-orange-50 w-full border-2 border-red-500' : 'mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full'}`}
            />
        </div>      
      <div className="py-4 space-y-10">
        <h3>Event Information</h3>
        <h5 className="mt-4">Which Events Will You Be Attending? (Select all that apply) *</h5>
        <div className="mt-4 space-y-4">
            {events.map((event) => (
                <div key={event.id}>
                    <label htmlFor={event.title}>
                        <strong>{event.day}</strong> - <em>{event.title}</em> *
                    </label>
                    <select
                        id={`eventSelection_${event.id}`}
                        name={`eventSelection_${event.id}`}
                        value={eventSelection[event.id] || ''} // Ensure a default value is set
                        onChange={(e) => handleEventChange(event.id, e.target.value)}
                        // className={`${formSubmitted && !eventSelection[event.title] ? 'mt-1 p-2 border w-full rounded-md w-full border-2 border-red-500' : 'mt-1 p-2 border w-full rounded-md`} }
                        className={`border ${formSubmitted && !eventSelection[event.id] ? 'mt-1 p-2 border w-full rounded-md border-red-500' : 'mt-1 p-2 border w-full rounded-md'} rounded-md p-2`}
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
          className={`bg-cyan-300 border-2 border-cyan-600 font-semibold py-3 px-4 w-52 rounded-md transition duration-300 ease-in-out ${
            isFormSubmittedSuccessfully ? 'cursor-not-allowed opacity-50' : 'hover:bg-white hover:border-cyan-300'
          }`}
          disabled={isFormSubmittedSuccessfully}
        >
          {isFormSubmittedSuccessfully ? 'RSVP Submitted' : 'Submit RSVP'}
        </button>
      </div>
    </form>
  );
};

export default RSVPForm;
