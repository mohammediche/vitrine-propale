import { SubscribeFormData } from '@/types/brevo'

export async function subscribeToNewsletter(data: SubscribeFormData) {
  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
        "content-type": "application/json"
      },
          body: JSON.stringify({
          email: data.email,
          listIds: [2], // ID de la liste dans laquelle tu veux ajouter l'email
          updateEnabled: true
        })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erreur Brevo: ${JSON.stringify(errorData)}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur subscribeToNewsletter:', error);
    throw new Error('Impossible de s\'inscrire à la newsletter');
  }
}