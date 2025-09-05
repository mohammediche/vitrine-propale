import { SubscribeFormData } from "@/types/brevo"

export async function subscribeToNewsletter(data: SubscribeFormData) {
  const res = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result = await res.json()
  if (!res.ok) throw new Error(result.error || 'Error subscribing to newsletter')
  return result
}