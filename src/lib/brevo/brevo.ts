interface BrevoEmailPayload {
    subject: string
    htmlContent: string
    to: { email: string }[]
    attachment?: { content: string; name: string }[]
  }

  export async function sendBrevoEmail(payload: BrevoEmailPayload) {
    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          sender: { email: process.env.FROM_EMAIL!, name: 'propale.io' },
          ...payload,
        }),
      })
  
      if (!response.ok) {
        const text = await response.text()
        console.error('Erreur Brevo:', text)
        throw new Error('Échec de l’envoi du mail avec Brevo')
      }
  
      return await response.json()
    } catch (error) {
      console.error('Erreur sendBrevoEmail:', error)
      throw new Error('Impossible d’envoyer l’email')
    }
  }
  