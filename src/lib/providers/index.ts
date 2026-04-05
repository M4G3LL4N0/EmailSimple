// Provider registry and exports
export { EmailProvider } from './email-provider';
export { GmailProvider } from './gmail-provider';
// Future: OutlookProvider, ImapProvider, etc.

export class ProviderRegistry {
  private providers: Map<string, EmailProvider> = new Map();
  
  register(accountId: string, provider: EmailProvider) {
    this.providers.set(accountId, provider);
  }
  
  get(accountId: string): EmailProvider | undefined {
    return this.providers.get(accountId);
  }
  
  unregister(accountId: string) {
    this.providers.delete(accountId);
  }
}
