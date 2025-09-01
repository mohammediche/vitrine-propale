import { ContactFormData } from "@/types/brevo";

export function contactTemplate(data: ContactFormData) {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Nouveau message depuis le formulaire de contact</h2>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Entreprise :</strong> ${data.company}</p>` : ''}
        ${data.phone ? `<p><strong>Téléphone :</strong> ${data.phone}</p>` : ''}
        <p><strong>Sujet :</strong> ${data.subject}</p>
        <p><strong>Message :</strong><br/>${data.message}</p>
      </body>
    </html>
  `;
}
