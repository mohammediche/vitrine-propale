
import { CheckAccessParams, CreateCheckoutSessionParams } from "@/types/stripe";
  // --------------------
  // Vérifier si l'article a été payé
  // --------------------
  export async function checkAccess({ email, articleId }: CheckAccessParams) {
    try {
      const res = await fetch("/api/check-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, articleId }),
      });
  
      const data = await res.json();
      return data.access || false;
    } catch (err) {
      console.error("checkAccess error:", err);
      return false;
    }
  }
  
  // --------------------
  // Créer une session Stripe pour payer l'article
  // --------------------
  export async function createCheckoutSession({ email, articleId, slug }: CreateCheckoutSessionParams) {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, articleId, slug }),
      });
  
      const data = await res.json();
  
      if (data.url) {
        return data.url; // URL Stripe pour rediriger
      } else {
        console.error("createCheckoutSession failed:", data.error);
        return null;
      }
    } catch (err) {
      console.error("createCheckoutSession error:", err);
      return null;
    }
  }
  