// Accounts management page
'use client';

import { AccountConnect } from '@/components/AccountConnect';
import { SyncStatus } from '@/components/SyncStatus';
import { useEffect, useState } from 'react';
import { EmailAccount } from '@/lib/types/account';
import { PageShell } from '@/components/PageShell';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<EmailAccount[]>([]);
  
  useEffect(() => {
    fetchAccounts();
  }, []);
  
  const fetchAccounts = async () => {
    const res = await fetch('/api/accounts');
    if (res.ok) {
      const data = await res.json();
      setAccounts(data);
    }
  };
  
  const handleConnect = (account: EmailAccount) => {
    setAccounts(prev => [...prev, account]);
  };
  
  return (
    <PageShell>
      <div className="container py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            EmailSimple Accounts
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white">
            Connected Accounts
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Connect your email accounts to start receiving intelligent briefs and action items.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {accounts.map(account => (
            <div key={account.id} className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{account.email}</h3>
                  <p className="text-sm text-white/60">{account.provider}</p>
                </div>
                <SyncStatus accountId={account.id} />
              </div>
              <div className="text-sm text-white/60">
                <p>Connected: {account.isActive ? 'Yes' : 'No'}</p>
                {account.lastSyncAt && (
                  <p>Last sync: {new Date(account.lastSyncAt).toLocaleString()}</p>
                )}
                {account.syncError && (
                  <p className="text-red-400">Error: {account.syncError}</p>
                )}
              </div>
            </div>
          ))}
          
          <AccountConnect onConnect={handleConnect} />
        </div>
      </div>
    </PageShell>
  );
}
