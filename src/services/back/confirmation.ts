import { CalComBooking } from '@/types/calcom';
import { sendBrevoEmail } from '@/lib/brevo/brevo';
import { BOOKING_CONSTANTS } from '@/constants/booking';

interface CalendarLinks {
  google: string;
  outlook: string;
  ics: string;
}

export async function sendCustomConfirmationEmail(
  recipientEmail: string, 
  booking: CalComBooking, 
  calendarLinks: CalendarLinks, 
  serviceName: string,
  isOrganizer: boolean = false
) {
  const startTime = new Date(booking.startTime);
  const endTime = new Date(booking.endTime);
  
  const formattedDate = startTime.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const formattedTime = startTime.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const htmlContent = isOrganizer ? `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">📅 Nouveau rendez-vous réservé</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <p style="font-size: 18px; margin-bottom: 20px;">Bonjour,</p>
          
          <p>Un nouveau rendez-vous a été réservé pour <strong>${serviceName}</strong>. Voici les détails :</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <h3 style="margin-top: 0; color: #28a745;">👤 Informations client</h3>
            <p><strong>Nom :</strong> ${booking.attendees[0]?.name}</p>
            <p><strong>Email :</strong> ${booking.attendees[0]?.email}</p>
            <p><strong>Entreprise :</strong> ${booking.attendees[0]?.company || 'Non spécifiée'}</p>
            <p><strong>Notes :</strong> ${booking.attendees[0]?.notes || 'Aucune note'}</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <h3 style="margin-top: 0; color: #28a745;">📅 Détails du rendez-vous</h3>
            <p><strong>Service :</strong> ${serviceName}</p>
            <p><strong>Date :</strong> ${formattedDate}</p>
            <p><strong>Heure :</strong> ${formattedTime}</p>
            <p><strong>Durée :</strong> ${Math.round((endTime.getTime() - startTime.getTime()) / (1000 * 60))} minutes</p>
            <p><strong>Lieu :</strong> ${booking.location || 'En ligne'}</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #28a745;">📱 Ajouter à votre calendrier</h3>
            <p>Cliquez sur l'un des boutons ci-dessous pour ajouter cet événement à votre calendrier :</p>
            
            <div style="text-align: center; margin: 20px 0;">
              <a href="${calendarLinks.google}" 
                 style="display: inline-block; background: #4285F4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: bold;">
                📅 Google Calendar
              </a>
              
              <a href="${calendarLinks.outlook}" 
                 style="display: inline-block; background: #0078D4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: bold;">
                📧 Outlook
              </a>
              
              <a href="data:text/calendar;charset=utf8,${encodeURIComponent(calendarLinks.ics)}" 
                 style="display: inline-block; background: #6c757d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: bold;">
                📥 Télécharger (.ics)
              </a>
            </div>
          </div>

          <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <h3 style="margin-top: 0; color: #155724;">📋 Actions à effectuer</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Préparez le lien de vidéoconférence</li>
              <li>Vérifiez votre disponibilité</li>
              <li>Préparez les documents nécessaires</li>
              <li>Confirmez le rendez-vous avec le client si nécessaire</li>
            </ul>
          </div>

          <p style="margin-top: 30px;">Bonne préparation pour ce rendez-vous !</p>
          
          <p style="margin-bottom: 0;">
            Cordialement,<br>
            <strong>Système KATECH</strong>
          </p>
        </div>
      </body>
    </html>
  ` : `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Rendez-vous confirmé !</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <p style="font-size: 18px; margin-bottom: 20px;">Bonjour <strong>${booking.attendees[0]?.name}</strong>,</p>
          
          <p>Votre rendez-vous a été confirmé avec succès ! Voici les détails :</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
            <h3 style="margin-top: 0; color: #667eea;">📅 Détails du rendez-vous</h3>
            <p><strong>Service :</strong> ${serviceName}</p>
            <p><strong>Date :</strong> ${formattedDate}</p>
            <p><strong>Heure :</strong> ${formattedTime}</p>
            <p><strong>Durée :</strong> ${Math.round((endTime.getTime() - startTime.getTime()) / (1000 * 60))} minutes</p>
            <p><strong>Lieu :</strong> ${booking.location || 'En ligne'}</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #667eea;">📱 Ajouter à votre calendrier</h3>
            <p>Cliquez sur l'un des boutons ci-dessous pour ajouter cet événement à votre calendrier :</p>
            
            <div style="text-align: center; margin: 20px 0;">
              <a href="${calendarLinks.google}" 
                 style="display: inline-block; background: #4285F4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: bold;">
                📅 Google Calendar
              </a>
              
              <a href="${calendarLinks.outlook}" 
                 style="display: inline-block; background: #0078D4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: bold;">
                📧 Outlook
              </a>
              
              <a href="data:text/calendar;charset=utf8,${encodeURIComponent(calendarLinks.ics)}" 
                 style="display: inline-block; background: #6c757d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: bold;">
                📥 Télécharger (.ics)
              </a>
            </div>
          </div>

          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
            <h3 style="margin-top: 0; color: #1976d2;">ℹ️ Informations importantes</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Un lien de vidéoconférence vous sera envoyé avant le rendez-vous</li>
              <li>Veuillez vous assurer d'avoir une connexion internet stable</li>
              <li>En cas d'annulation, merci de nous contacter au moins 24h à l'avance</li>
            </ul>
          </div>

          <p style="margin-top: 30px;">Nous nous réjouissons de vous rencontrer !</p>
          
          <p style="margin-bottom: 0;">
            Cordialement,<br>
            <strong>L'équipe KATECH</strong>
          </p>
        </div>
      </body>
    </html>
  `;

  return sendBrevoEmail({
    subject: isOrganizer 
      ? `${BOOKING_CONSTANTS.EMAIL_SUBJECTS.ORGANIZER_NOTIFICATION} - ${serviceName}` 
      : `${BOOKING_CONSTANTS.EMAIL_SUBJECTS.USER_CONFIRMATION} - ${serviceName}`,
    htmlContent,
    to: [{ email: recipientEmail }],
  });
}


