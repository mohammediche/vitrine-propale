import { NextRequest, NextResponse } from 'next/server';
import { getCalComApi } from '@/lib/calcom';
import { BOOKING_CONSTANTS } from '@/constants/booking';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const eventTypeId = searchParams.get('eventTypeId');
    const date = searchParams.get('date');
    
    if (!eventTypeId || !date) {
      return NextResponse.json({ error: 'Missing eventTypeId or date' }, { status: 400 });
    }
    
    const calComApi = getCalComApi();
    
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);
    
    const slots = await calComApi.getSlots(
      parseInt(eventTypeId),
      startDate.toISOString(),
      endDate.toISOString(),
      BOOKING_CONSTANTS.DEFAULT_TIMEZONE
    );
    
    return NextResponse.json({ success: true, slots });
    
  } catch (error) {
    console.error('Slots error:', error);
    return NextResponse.json({ error: 'Failed to fetch slots' }, { status: 500 });
  }
}

