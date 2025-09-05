import { NextRequest, NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/services/back/subscribe'
import { subscribeValidator } from '@/resolvers/subscribe-validator'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    
    const parsed = subscribeValidator.safeParse(data)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues },
        { status: 400 }
      )
    }

    // ✅ Inscription à la newsletter
    await subscribeToNewsletter(parsed.data)

    return NextResponse.json({ 
      success: true, 
      message: "Inscription réussie !" 
    })
  } catch (error) {
    console.error('Erreur dans route subscribe:', error)
    const errorMessage = error instanceof Error ? error.message : 'Impossible de s\'inscrire à la newsletter. Veuillez réessayer plus tard.'
    return NextResponse.json(
      { error: errorMessage },
      { status: 400 }
    )
  }
}
  