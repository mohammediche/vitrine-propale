import { NextRequest, NextResponse } from 'next/server';
import { calComUtils } from '@/lib/calcom';
import { sendCustomConfirmationEmail } from '@/services/back/confirmation';
import { createFallbackBooking } from '@/lib/booking-utils';

export async function POST(request: NextRequest) {
  try {
    const { booking, recipientEmail, serviceName, bookingData } = await request.json();
    
    if (!recipientEmail || !serviceName) {
      return NextResponse.json({ error: 'Missing recipientEmail or serviceName' }, { status: 400 });
    }
    
    const bookingForEmail = (!booking || !booking.startTime) 
      ? createFallbackBooking(bookingData, serviceName)
      : booking;
    
    const calendarLinks = calComUtils.generateCalendarLinks(bookingForEmail, serviceName);
    
    await sendCustomConfirmationEmail(recipientEmail, bookingForEmail, calendarLinks, serviceName);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
