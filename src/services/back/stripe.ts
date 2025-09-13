import Stripe from "stripe";
import { CheckAccessParams, CreateCheckoutSessionParams } from "@/types/stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function checkAccess({email, articleId}: CheckAccessParams): Promise<boolean> {
  
  // 1. Récupérer les customers liés à cet email
  const customers = await stripe.customers.list({ email, limit: 5 });  

  for (const customer of customers.data) {
    // 2. Lister les sessions Checkout du customer
    const sessions = await stripe.checkout.sessions.list({
      customer: customer.id,
      limit: 50,
    });

    // 3. Vérifier si une session payée correspond à l'article
    const hasPaid = sessions.data.some(
      (s) => s.payment_status === "paid" && s.metadata?.articleId === String(articleId)
    );

    if (hasPaid) {
      return true;
    }
  }

  return false;
}
export async function createCheckoutSession({email, articleId, slug}: CreateCheckoutSessionParams) {
  const PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!;

  // Vérifier si le Customer existe déjà
  let customerId: string;
  const existingCustomers = await stripe.customers.list({ email, limit: 1 });

  if (existingCustomers.data.length > 0) {
    customerId = existingCustomers.data[0].id;
  } else {
    const customer = await stripe.customers.create({ email });
    customerId = customer.id;
  }

  // Créer la Checkout Session
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer: customerId,
    line_items: [
      {
        price: PRICE_ID,
        quantity: 1,
      },
    ],
    metadata: {
      articleId,
      slug,
    },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/newsletters/${slug}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/newsletters/${slug}?canceled=true`,
  });

  return session;
}