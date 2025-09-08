// Booking-related constants
export const BOOKING_CONSTANTS = {
  // Default values
  DEFAULT_DURATION_MINUTES: 60,
  DEFAULT_LOCATION: 'En ligne',
  DEFAULT_TIMEZONE: 'Europe/Paris',
  DEFAULT_ORGANIZER_EMAIL: process.env.FROM_EMAIL,
  SEND_CALCOM_EMAILS: false, // Always use custom emails instead of Cal.com defaults
  
  // Metadata to disable Cal.com standard emails (all values must be strings)
  DISABLE_EMAILS_METADATA: {
    disableStandardEmails: 'true',
    noEmail: 'true',
    skipEmail: 'true',
    disableEmails: 'true',
    sendEmails: 'false'
  },
  
  // Email templates
  EMAIL_SUBJECTS: {
    USER_CONFIRMATION: 'Rendez-vous confirmé',
    ORGANIZER_NOTIFICATION: 'Nouveau rendez-vous réservé',
  },
  
  // Calendar links
  CALENDAR_PROVIDERS: {
    GOOGLE: 'Google Calendar',
    OUTLOOK: 'Outlook',
    ICS: 'Télécharger (.ics)',
  },
  
} as const;

// Type for booking fallback data
export interface BookingFallbackData {
  start: string;
  end: string;
  responses: {
    email: string;
    name: string;
    company?: string;
    notes?: string;
  };
}

// Type for service information
export interface ServiceInfo {
  name: string;
  id: string;
  calComId?: number;
  duration?: number;
}
