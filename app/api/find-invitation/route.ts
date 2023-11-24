import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Extract data from the request body
    const { searchParams } = new URL(request.nextUrl);
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');

    const protocol = request.headers.get('x-forwarded-proto') || 'http'; // Use 'http' as default
    const host = request.headers.get('host');
    const fullPath = `/api/guests/select?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;
    const fullUrl = `${protocol}://${host}${fullPath}`;

    const guestsResponse = await fetch(fullUrl);
    const guestsData = await guestsResponse.json();

    // console.log(guestsData);

    // You can perform database operations or other tasks here

    // Return a response
    return NextResponse.json({ success: true, guestData: guestsData }, { status: 200 });
  } catch (error) {
    console.error('Error finding guest:', error);
    return NextResponse.json({ success: false, error: 'Invalid data' }, { status: 400 });
  }
}
