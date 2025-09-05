import { SubscribeFormData } from '@/types/brevo'

async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      }
    });

    return response.ok;
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'email:', error);
    return false;
  }
}

export async function subscribeToNewsletter(data: SubscribeFormData) {
  // Vérifier si l'email existe déjà
  const emailExists = await checkEmailExists(data.email);
  if (emailExists) {
    throw new Error('Cet email est déjà abonné à la newsletter');
  }
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