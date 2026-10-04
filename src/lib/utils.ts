import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency in EUR standard French convention (e.g. 5 000 €)
 */
export function formatEuros(amount: number | null | undefined): string {
  if (amount == null || isNaN(amount)) return 'Non communiqué';
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format date in French format: 14 octobre 2026
 */
export function formatDateFr(date: Date | string | null | undefined): string {
  if (!date) return 'Date non précisée';
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) return 'Date non précisée';
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

/**
 * French typographic cleanup:
 * - Insert non-breaking space before : ; ! ? »
 * - Insert non-breaking space after «
 * - Replace typewriter single quote with typographic quote ’
 */
export function formatFrTypography(text: string): string {
  if (!text) return '';
  return text
    .replace(/(\s)([:;!?»])/g, '\u00A0$2')
    .replace(/(«)(\s)/g, '$1\u00A0')
    .replace(/(\w)'(\w)/g, '$1’$2');
}
