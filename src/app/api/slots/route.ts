import { NextRequest, NextResponse } from 'next/server';
import { getCalComApi } from '@/lib/calcom';
import { BOOKING_CONSTANTS } from '@/constants/booking';
import { CalComSlot } from '@/types/calcom';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const eventTypeId = searchParams.get('eventTypeId');
    const date = searchParams.get('date');
    
    if (!eventTypeId || !date) {
      return NextResponse.json({ error: 'Missing eventTypeId or date' }, { status: 400 });
    }
    
    const calComApi = getCalComApi();
    
    // Create date range for the requested date
    const startDate = new Date(date + 'T00:00:00.000Z'); // Force UTC start
    const endDate = new Date(date + 'T23:59:59.999Z'); // Force UTC end
    
    const slotsResponse = await calComApi.getSlots(
      parseInt(eventTypeId),
      startDate.toISOString(),
      endDate.toISOString(),
      BOOKING_CONSTANTS.DEFAULT_TIMEZONE
    );
    
    // Cal.com returns slots grouped by date: { "2025-09-08": [slots] }
    // We need to extract slots for the requested date
    let slots: CalComSlot[] = [];
    if (slotsResponse && typeof slotsResponse === 'object' && !Array.isArray(slotsResponse)) {
      // Extract slots for the requested date
      slots = slotsResponse[date] || [];
    } else if (Array.isArray(slotsResponse)) {
      // If it's already an array, use it directly
      slots = slotsResponse;
    }
    
    return NextResponse.json({ success: true, slots });
    
  } catch (error) {
    console.error('Error fetching slots:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to fetch available slots' 
    }, { status: 500 });
  }
}

