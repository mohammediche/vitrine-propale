import { NextRequest, NextResponse } from 'next/server'
import { sendRecruitmentEmail } from '@/services/back/recrutement'
import { spontaneousApplicationValidator } from '@/resolvers/spontaneous-application-validator'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // Extraire les champs texte
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message') || '',
      resume: formData.get('resume'),
    }

    // ✅ Validation avec Zod
    const parsed = spontaneousApplicationValidator.safeParse(data)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 }
      )
    }

    // ✅ Vérifier que resume est bien un File
    if (!(parsed.data.resume instanceof File)) {
      return NextResponse.json(
        { error: 'Le CV est requis et doit être un fichier valide.' },
        { status: 400 }
      )
    }

    // ✅ Envoi du mail
    await sendRecruitmentEmail(parsed.data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur dans route recruitment:', error)
    return NextResponse.json(
      { error: `Impossible d’envoyer la candidature. Veuillez réessayer plus tard., ${error}` },
      { status: 500 }
    )
  }
}
