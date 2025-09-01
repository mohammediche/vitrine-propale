import { RecruitmentFormData } from '@/types/brevo'
import { recruitmentTemplate } from '@/lib/brevo/templates/recruitmentTemplate'
import { sendBrevoEmail } from '@/lib/brevo/brevo'

export async function sendRecruitmentEmail(data: RecruitmentFormData) {
  if (!data.resume) {
    throw new Error('Le CV est requis pour envoyer une candidature.')
  }

  // ✅ Convertir fichier en base64
  const arrayBuffer = await data.resume.arrayBuffer()
  const base64File = Buffer.from(arrayBuffer).toString('base64')

  const htmlContent = recruitmentTemplate(data)

  return sendBrevoEmail({
    subject: `Nouvelle candidature - ${data.fullName}`,
    htmlContent,
    to: [{ email: process.env.CONTACT_RECEIVER_EMAIL! }],
    attachment: [
      {
        content: base64File,
        name: data.resume.name,
      },
    ],
  })
}