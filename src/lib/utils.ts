import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProviderType } from "./types/account";
import type { EmailParticipant } from "./types/email";
import type { SyncState } from "./types/sync";

export type { ClassValue, ProviderType, EmailParticipant, SyncState };

/**
 * Merges class names using clsx and tailwind-merge
 * @param inputs - Class names or class name objects
 * @returns Merged class names string
 */
/**
 * Combines and optimizes class names using clsx and tailwind-merge
 * @param inputs - Class names or class name objects
 * @returns Merged and optimized class names string
 * @example
 * cn('text-red-500', { 'bg-blue-500': true }) // 'text-red-500 bg-blue-500'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Checks if a value is defined (not null or undefined)
 * @param value - The value to check
 * @returns True if the value is defined
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Creates a type-safe error object
 * @param message - Error message
 * @param code - Optional error code
 * @param details - Optional error details
 * @returns Error object
 */
export function createError(
  message: string,
  code?: string,
  details?: Record<string, unknown>
): { error: true; message: string; code?: string; details?: Record<string, unknown> } {
  return {
    error: true,
    message,
    code,
    details,
  };
}

/**
 * Validates email address format
 * @param email - The email address to validate
 * @returns True if the email is valid
 */
/**
 * Validates email address format using RFC 5322 regex
 * @param email - The email address to validate
 * @returns True if the email is valid
 * @example
 * isValidEmail('test@example.com') // true
 * isValidEmail('invalid-email') // false
 */
export function isValidEmail(email: string): boolean {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/**
 * Formats a participant name for display
 * @param participant - Email participant object
 * @returns Formatted display name
 */
export function formatParticipantName(participant: EmailParticipant): string {
  return participant.name || participant.address;
}

/**
 * Checks if a sync state is active
 * @param state - Sync state object
 * @returns True if sync is active
 */
export function isSyncActive(state: SyncState): boolean {
  return state.status === 'syncing';
}

/**
 * Gets provider display name
 * @param provider - Provider type
 * @returns Formatted provider name
 */
export function getProviderName(provider: ProviderType): string {
  return {
    gmail: 'Gmail',
    outlook: 'Outlook',
    imap: 'IMAP'
  }[provider];
}
