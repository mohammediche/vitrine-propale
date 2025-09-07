// /lib/calcom.ts

import { CalComEventType, CalComSlot, CalComBookingRequest, CalComBooking } from '@/types/calcom';

  
  // Main Cal.com API client
  export function getCalComApi() {
    const CALCOM_API_KEY = process.env.CALCOM_API_KEY;
    const CALCOM_HOST = process.env.CALCOM_HOST || 'https://api.cal.com/v1';
  
    if (!CALCOM_API_KEY) {
      throw new Error('CALCOM_API_KEY environment variable is required');
    }
  
    const client = {
      async getEventTypes(): Promise<CalComEventType[]> {
        try {
          const response = await fetch(`${CALCOM_HOST}/event-types?apiKey=${CALCOM_API_KEY}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error(`Failed to fetch event types: ${response.statusText}`);
          }
  
          const data = await response.json();
          return data.event_types || [];
        } catch (error) {
          console.error('Error fetching event types:', error);
          throw new Error('Failed to fetch event types');
        }
      },
  
      async getSlots(
        eventTypeId: number,
        startTime: string,
        endTime: string,
        timeZone?: string
      ): Promise<CalComSlot[]> {
        try {
          const params = new URLSearchParams({
            eventTypeId: eventTypeId.toString(),
            startTime,
            endTime,
            apiKey: CALCOM_API_KEY,
          });

          // Add timezone if provided
          if (timeZone) {
            params.append('timeZone', timeZone);
          }

          const response = await fetch(`${CALCOM_HOST}/slots?${params}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            const errorText = await response.text();
            console.error('Cal.com API error response:', errorText);
            throw new Error(`Failed to fetch slots: ${response.status} ${response.statusText} - ${errorText}`);
          }

          const data = await response.json();
          return data.slots || [];
        } catch (error) {
          console.error('Error fetching slots:', error);
          throw new Error(`Failed to fetch slots`);
        }
      },
  
      async createBooking(bookingData: CalComBookingRequest): Promise<CalComBooking> {
        try {
          const response = await fetch(`${CALCOM_HOST}/bookings?apiKey=${CALCOM_API_KEY}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Disable-Emails': 'true',
              'X-No-Email': 'true',
              'X-Skip-Email': 'true',
            },
            body: JSON.stringify({
              ...bookingData,
              // Additional parameters to try disabling emails
              disableEmails: true,
              noEmail: true,
              skipEmail: true,
              sendEmails: false,
            }),
          });
  
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Cal.com booking error:', {
              status: response.status,
              statusText: response.statusText,
              errorData,
              bookingData: {
                eventTypeId: bookingData.eventTypeId,
                start: bookingData.start,
                end: bookingData.end,
                timeZone: bookingData.timeZone
              }
            });
            
            // Provide more specific error messages
            let errorMessage = errorData.message || `Failed to create booking: ${response.status} ${response.statusText}`;
            
            if (errorData.message === 'no_available_users_found_error') {
              errorMessage = 'No available users found for this event type. Please check the event type configuration.';
            }
            
            throw new Error(errorMessage);
          }
  
          const data = await response.json();
          return data.booking;
        } catch (error) {
          console.error('Error creating booking:', error);
          throw new Error(`Failed to create booking`);
        }
      },

    };
  
    return client;
  }
  
  // Utility functions
 // Add this to your existing calComUtils
export const calComUtils = {
  generateCalendarLinks(booking: CalComBooking, serviceName?: string) {
    const startTime = new Date(booking.startTime);
    const endTime = new Date(booking.endTime);
    const title = serviceName ? `Rendez-vous - ${serviceName}` : booking.title;

    const formatForCalendar = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    const googleParams = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      dates: `${formatForCalendar(startTime)}/${formatForCalendar(endTime)}`,
      details: booking.description || `Rendez-vous pour ${serviceName || 'KATECH'}`,
      location: booking.location || 'En ligne',
    });

    return {
      google: `https://calendar.google.com/calendar/render?${googleParams}`,
      outlook: `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(title)}&startdt=${startTime.toISOString()}&enddt=${endTime.toISOString()}&body=${encodeURIComponent(booking.description || `Rendez-vous pour ${serviceName || 'KATECH'}`)}&location=${encodeURIComponent(booking.location || 'En ligne')}`,
      ics: this.generateICalendarData(booking, serviceName),
    };
  },

  generateICalendarData(booking: CalComBooking, serviceName?: string): string {
    const start = new Date(booking.startTime).toISOString().replace(/-|:|\.\d+/g, '');
    const end = new Date(booking.endTime).toISOString().replace(/-|:|\.\d+/g, '');
    const title = serviceName ? `Rendez-vous - ${serviceName}` : booking.title;
    const description = booking.description || `Rendez-vous pour ${serviceName || 'KATECH'}`;
    
    return `BEGIN:VCALENDAR
            VERSION:2.0
            CALSCALE:GREGORIAN
            PRODID:-//KATECH//Rendez-vous//FR
            METHOD:REQUEST
            BEGIN:VEVENT
            DTSTART:${start}
            DTEND:${end}
            DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}
            ORGANIZER;CN=KATECH:mailto:${process.env.NEXT_PUBLIC_ORGANIZER_EMAIL || 'noreply@katech.com'}
            UID:${booking.uid}
            ATTENDEE;CN=${booking.attendees[0]?.name};ROLE=REQ-PARTICIPANT;RSVP=TRUE:mailto:${booking.attendees[0]?.email}
            SUMMARY:${title}
            DESCRIPTION:${description}
            LOCATION:${booking.location || 'En ligne'}
            SEQUENCE:0
            STATUS:CONFIRMED
            TRANSP:OPAQUE
            END:VEVENT
            END:VCALENDAR`;
  },

};
  
  export default getCalComApi;