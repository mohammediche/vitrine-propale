import { NextRequest, NextResponse } from 'next/server';
import { getCalComApi, calComUtils } from '@/lib/calcom';
import { sendCustomConfirmationEmail } from '@/services/back/confirmation';
import { createFallbackBooking, getServiceName } from '@/lib/booking-utils';
import { BOOKING_CONSTANTS } from '@/constants/booking';

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    
    if (!bookingData.eventTypeId || !bookingData.start || !bookingData.end || !bookingData.responses?.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const calComApi = getCalComApi();
    const booking = await calComApi.createBooking(bookingData);
    
    // Send confirmation emails
    try {
      const serviceName = getServiceName(booking?.title || 'Rendez-vous KATECH');
      const recipientEmail = bookingData.responses.email;
      
      const bookingForEmail = (!booking || !booking.startTime) 
        ? createFallbackBooking(bookingData, serviceName)
        : booking;
      
      const calendarLinks = calComUtils.generateCalendarLinks(bookingForEmail, serviceName);
      
      // Send emails
      await sendCustomConfirmationEmail(recipientEmail, bookingForEmail, calendarLinks, serviceName, false);
      await sendCustomConfirmationEmail(BOOKING_CONSTANTS.DEFAULT_ORGANIZER_EMAIL, bookingForEmail, calendarLinks, serviceName, true);
    } catch (emailError) {
      // Email sending failed, but booking was successful
    }
    
    return NextResponse.json({ success: true, booking });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}