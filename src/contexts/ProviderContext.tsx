// React context for provider registry
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { EmailProvider } from '@/lib/providers/email-provider';
import { ProviderRegistry } from '@/lib/providers';

const registry = new ProviderRegistry();

interface ProviderContextType {
  registry: ProviderRegistry;
  getProvider: (accountId: string) => EmailProvider | undefined;
  registerProvider: (accountId: string, provider: EmailProvider) => void;
  unregisterProvider: (accountId: string) => void;
}

const ProviderContext = createContext<ProviderContextType | null>(null);

export function ProviderProvider({ children }: { children: React.ReactNode }) {
  const [providers, setProviders] = useState<Map<string, EmailProvider>>(new Map());
  
  const getProvider = (accountId: string) => providers.get(accountId);
  
  const registerProvider = (accountId: string, provider: EmailProvider) => {
    setProviders(prev => new Map(prev.set(accountId, provider)));
  };
  
  const unregisterProvider = (accountId: string) => {
    setProviders(prev => {
      const next = new Map(prev);
      next.delete(accountId);
      return next;
    });
  };
  
  return (
    <ProviderContext.Provider value={{ registry, getProvider, registerProvider, unregisterProvider }}>
      {children}
    </ProviderContext.Provider>
  );
}

export function useProviders() {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProviders must be used within a ProviderProvider');
  }
  return context;
}
