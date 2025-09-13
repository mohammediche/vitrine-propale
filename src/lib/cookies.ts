/**
 * Utilitaires pour gérer les cookies côté client
 */

export const COOKIE_NAMES = {
  USER_EMAIL: 'user_email',
} as const;

/**
 * Récupère la valeur d'un cookie
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

/**
 * Définit un cookie avec une expiration
 */
export function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * Supprime un cookie
 */
export function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

/**
 * Récupère l'email de l'utilisateur depuis les cookies
 */
export function getUserEmail(): string | null {
  return getCookie(COOKIE_NAMES.USER_EMAIL);
}

/**
 * Stocke l'email de l'utilisateur dans les cookies
 */
export function setUserEmail(email: string): void {
  setCookie(COOKIE_NAMES.USER_EMAIL, email, 1/24); // 1 heure (1/24 de jour)
}