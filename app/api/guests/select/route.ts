// /api/find-invitation.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.nextUrl);
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');

    if (!firstName || !lastName) {
      throw new Error('Both FirstName and LastName are required for the query');
    }

    // Fetch guest information
    const guestQueryResult = await sql`SELECT * FROM guests WHERE first_name ILIKE ${firstName} AND last_name ILIKE ${lastName};`;

    if (!guestQueryResult.rows.length) {
      throw new Error('Guest not found');
    }

    const guestId = guestQueryResult.rows[0].id;

    // Fetch events RSVPed by the guest
    const rsvpQueryResult = await sql`
      SELECT events.id, events.name, events.description, events.datetime, events.location, rsvps.response
      FROM events
      LEFT JOIN rsvps ON events.id = rsvps.event_id AND rsvps.guest_id = ${guestId};
    `;

    const formattedRsvps = rsvpQueryResult.rows.map((event) => ({
      id: event.id,
      name: event.name,
      description: event.description,
      datetime: event.datetime,
      location: event.location,
      response: event.response || null, // Use response if available, otherwise set to null
    }));

    return NextResponse.json({ guest: guestQueryResult.rows[0], rsvps: formattedRsvps }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
