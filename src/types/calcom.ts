// Minimal interface definitions - only what we actually use
export interface CalComEventType {
    id: number;
    title: string;
    length: number;
    description?: string;
  }
  
  export interface CalComSlot {
    time: string;
  }
  
  export interface CalComBooking {
    id: number;
    uid: string;
    startTime: string;
    endTime: string;
    attendees: Array<{
      email: string;
      name: string;
      company?: string;
      notes?: string;
    }>;
    title: string;
    description?: string;
    location?: string;
    
  }
  
  export interface CalComBookingRequest {
    eventTypeId: number;
    start: string;
    end: string;
    timeZone: string;
    language: string;
    metadata: Record<string, any>;
    sendEmails?: boolean;
    responses: {
      name: string;
      email: string;
      notes?: string;
      [key: string]: any;
    };
  }