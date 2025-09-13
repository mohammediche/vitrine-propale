export interface CheckAccessParams {
    email: string;
    articleId: string;
  }
  
export interface CreateCheckoutSessionParams {
    email: string;
    articleId: string;
    slug: string;
  }