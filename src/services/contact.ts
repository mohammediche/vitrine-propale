import { ContactFormData } from "@/resolvers/contact-form-validator"

export async function sendContactForm(data: ContactFormData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result = await res.json()
  if (!res.ok) throw new Error(result.error || 'Error sending contact form')
  return result
}
