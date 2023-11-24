import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Extract data from the request body
    const formData = await request.json();

    // Perform any necessary processing with the data
    // For now, just log it to the console
    console.log('Received RSVP data:', formData);

    // You can perform database operations or other tasks here

    // Return a response
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing RSVP:', error);
    return NextResponse.json({ success: false, error: 'Invalid data' }, { status: 400 });
  }
}
