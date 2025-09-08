import { CalComBooking } from '@/types/calcom';
import { BookingFallbackData, ServiceInfo, BOOKING_CONSTANTS } from '@/constants/booking';
import { calComUtils } from '@/lib/calcom';

/**
 * Creates a fallback booking object when Cal.com booking is not available
 * @param bookingData - The original booking request data
 * @param serviceName - Name of the service
 * @returns A properly formatted CalComBooking object
 */
export function createFallbackBooking(
  bookingData: BookingFallbackData,
  serviceName: string
): CalComBooking {
  
  return {
    id: Date.now(),
    uid: `katech-${Date.now()}`,
    startTime: bookingData.start,
    endTime: bookingData.end,
    attendees: [{
      email: bookingData.responses.email,
      name: bookingData.responses.name,
      company: bookingData.responses.company,
      notes: bookingData.responses.notes,
    }],
    title: `Rendez-vous - ${serviceName}`,
    description: `Rendez-vous pour ${serviceName} avec KATECH`,
    location: BOOKING_CONSTANTS.DEFAULT_LOCATION,
  };
}

/**
 * Creates a booking object from appointment form data
 * @param appointmentData - The appointment form data
 * @returns A properly formatted CalComBooking object
 */
export function createBookingFromAppointment(appointmentData: {
  service: string | ServiceInfo;
  date: Date;
  time: string;
  email: string;
  name: string;
  company?: string;
  details?: string;
}): CalComBooking {
  const serviceName = typeof appointmentData.service === 'object' 
    ? appointmentData.service.name 
    : appointmentData.service;
    
  const startTime = new Date(`${calComUtils.formatDateForAPI(appointmentData.date)}T${appointmentData.time}:00`);
  const endTime = new Date(startTime.getTime() + BOOKING_CONSTANTS.DEFAULT_DURATION_MINUTES * 60 * 1000);
  
  return {
    id: Date.now(),
    uid: `katech-${Date.now()}`,
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
    attendees: [{
      email: appointmentData.email,
      name: appointmentData.name,
      company: appointmentData.company,
      notes: appointmentData.details,
    }],
    title: `Rendez-vous - ${serviceName}`,
    description: `Rendez-vous pour ${serviceName} avec KATECH`,
    location: BOOKING_CONSTANTS.DEFAULT_LOCATION,
  };
}


/**
 * Gets service name from service data (handles both string and object types)
 * @param service - Service data (string or object)
 * @returns Service name as string
 */
export function getServiceName(service: string | ServiceInfo): string {
  return typeof service === 'object' ? service.name : service;
}
