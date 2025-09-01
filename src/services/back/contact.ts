import { ContactFormData } from '@/types/brevo'
import { contactTemplate } from '@/lib/brevo/templates/contactTemplate'
import { sendBrevoEmail } from '@/lib/brevo/brevo'

export async function sendContactEmail(data: ContactFormData) {
  const htmlContent = contactTemplate(data)

  return sendBrevoEmail({
    subject: data.subject,
    htmlContent,
    to: [{ email: process.env.CONTACT_RECEIVER_EMAIL! }],
  })
}