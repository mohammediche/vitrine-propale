export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    subject: string;
    message: string;
  }
  
  export interface RecruitmentFormData {
    fullName: string;
    email: string;
    phone: string;
    resume: File | null;
    message?: string;
  }
  
  export interface SubscribeFormData {
    email: string;
  }
  
  export interface BrevoEmail {
    sender: {
      name: string;
      email: string;
    };
    to: Array<{
      email: string;
      name: string;
    }>;
    subject: string;
    htmlContent: string;
    textContent: string;
    replyTo: {
      email: string;
      name: string;
    };
  }
  
  export interface BrevoResponse {
    messageId: string;
  }
  
  export interface ApiResponse<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
  }