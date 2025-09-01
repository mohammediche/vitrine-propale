import { SpontaneousApplicationData } from "@/resolvers/spontaneous-application-validator"

export async function sendRecruitmentForm(data: SpontaneousApplicationData) {
  // Créer FormData pour l'envoi de fichier
  const formData = new FormData()
  formData.append('fullName', data.fullName)
  formData.append('email', data.email)
  formData.append('phone', data.phone)
  formData.append('message', data.message || '')
  
  if (data.resume) {
    formData.append('resume', data.resume)
  }

  const res = await fetch('/api/recruitment', {
    method: 'POST',
    body: formData, // Pas besoin de Content-Type avec FormData
  })

  const result = await res.json()
  if (!res.ok) throw new Error(result.error || 'Error sending recruitment form')
  return result
} 