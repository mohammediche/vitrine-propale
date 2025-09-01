// lib/brevo.ts
import { ContactFormData } from '@/types/brevo'
import { contactTemplate } from './templates/contactTemplate'

export async function sendContactEmail(data: ContactFormData) {

  const htmlContent = contactTemplate(data)

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { email: process.env.FROM_EMAIL!, name: 'propale.io' },
        to: [{ email: process.env.CONTACT_RECEIVER_EMAIL! }],
        subject: data.subject,
        htmlContent,
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('Erreur Brevo:', text)
      throw new Error('Impossible d’envoyer le mail')
    }

    return await response.json()
  } catch (error) {
    console.error('Erreur lors de l’envoi du mail:', error)
    throw new Error('Impossible d’envoyer le mail')
  }
}
