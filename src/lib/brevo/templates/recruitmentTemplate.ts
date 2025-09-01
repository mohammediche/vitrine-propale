import { RecruitmentFormData } from "@/types/brevo";

export function recruitmentTemplate(data: RecruitmentFormData) {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Nouvelle candidature depuis le formulaire de recrutement</h2>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.phone}</p>
        ${data.message ? `<p><strong>Message :</strong><br/>${data.message}</p>` : ''}
        <p><em>Le CV du candidat est joint à ce message</em></p>
      </body>
    </html>
  `;
}
