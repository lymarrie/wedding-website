'use client'
import { useState, useEffect } from 'react';
// import events from '../data/events'; // Adjust the path accordingly

const FindInvitation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [guestData, setGuestData] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  useEffect(() => {
    // Check form validity whenever firstName or lastName changes
    setIsFormValid(firstName !== '' && lastName !== '');
  }, [firstName, lastName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    // Only proceed if the form is valid
    if (isFormValid) {
      try {
        const response = await fetch(`/api/find-invitation?firstName=${firstName}&lastName=${lastName}`);
        const data = await response.json();
        // console.log(data);
        if (response.ok) {
          setGuestData(data);
          setSubmitting(false);
          setUserNotFound(false);
        } else {
          console.error('Error finding invitation:', data.error);
          setSubmitting(false);
          setUserNotFound(true);
        }
      } catch (error) {
        console.error('Invalid form:', error);
      }
    }
  };

  return (
    <>
      {guestData ? (
        <div className="section">
          <div className="px-4 sm:px-0">
            <h2 className="">Guest Information</h2>
          </div>
          <div className="mt-6 border-t border-gray-300">
            <dl className="divide-y divide-gray-300">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-semibold leading-6">Name</dt>
                <dd className="mt-1 sm:col-span-2 sm:mt-0">{guestData.guest.first_name} {guestData.guest.last_name}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-semibold leading-6">Number of Guests</dt>
                <dd className="mt-1 sm:col-span-2 sm:mt-0">{guestData.guest.number_of_guests}</dd>
              </div>
              {guestData.rsvps.map((rsvp) => (
                <div key={rsvp.id} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="font-semibold leading-6 flex flex-col">{rsvp.name} <span className="font-normal">({new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(rsvp.datetime))})</span></dt>
                  <dd className="mt-1 sm:col-span-2 sm:mt-0">
                    {rsvp.response === true && 'Yes'}
                    {rsvp.response === false && 'No'}
                    {rsvp.response === null && 'No Response'}
                  </dd>
                </div>
              ))}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-semibold leading-6">RSVP Message</dt>
                <dd className="mt-1 sm:col-span-2 sm:mt-0">{...guestData.guest.rsvp_message || ''}</dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <form className="space-y-4">
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            <div className="firstName">
              <label htmlFor="firstName" className="">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full'
              />
            </div>
            <div className='lastName'>
              <label htmlFor="lastName" className="">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='mt-1 p-2 border-b-2 border-orange-800 bg-orange-50 w-full'
              />
            </div>
          </div>
          {userNotFound ? 
            <div className="">
              <p className="text-red-500">User not found. Please check your first and last name again.</p>
            </div>
            :
            <div>
              <p className="py-4"></p>
            </div>
          }
          <div className="text-center pt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className={`bg-cyan-300 border-2 border-cyan-600 tracking-widest font-semibold py-3 px-4 w-60 rounded-md transition duration-300 ease-in-out shadow-md ${
                isFormValid
                  ? 'hover:bg-white hover:border-cyan-300 cursor-pointer'
                  : 'cursor-not-allowed opacity-50'
              }`}
              disabled={!isFormValid}
            >
              Find Your Invitation
            </button>
          </div>

        </form>
      )}
    </>
  );
  
};

export default FindInvitation;
