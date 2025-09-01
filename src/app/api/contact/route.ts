// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/brevo/brevo'
import { contactFormValidator } from '@/resolvers/contact-form-validator'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // ✅ Validation avec Zod
    const parsed = contactFormValidator.safeParse(data)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 }
      )
    }

    // ✅ Envoi du mail
    await sendContactEmail(parsed.data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur dans route contact:', error)
    return NextResponse.json(
      { error: 'Impossible d’envoyer le mail. Veuillez réessayer plus tard.' },
      { status: 500 }
    )
  }
}