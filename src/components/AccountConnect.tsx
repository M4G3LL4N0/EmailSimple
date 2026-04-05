// UI component for connecting email accounts
'use client';

import { useState } from 'react';
import { ProviderType } from '@/lib/types/account';

interface AccountConnectProps {
  onConnect?: (account: any) => void;
}

export function AccountConnect({ onConnect }: AccountConnectProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [provider, setProvider] = useState<ProviderType>('gmail');
  
  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      // Initiate OAuth flow by redirecting to our auth endpoint
      const response = await fetch('/api/auth/gmail');
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        // Handle error
        const data = await response.json();
        console.error('Connection failed:', data.error);
      }
    } finally {
      setIsConnecting(false);
    }
  };
  
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Connect Email Account</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Provider</label>
          <select 
            value={provider}
            onChange={(e) => setProvider(e.target.value as ProviderType)}
            className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700"
          >
            <option value="gmail">Gmail</option>
            <option value="outlook">Outlook</option>
            <option value="imap">IMAP</option>
          </select>
        </div>
        <button
          onClick={handleConnect}
          disabled={isConnecting}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 rounded-lg font-medium"
        >
          {isConnecting ? 'Connecting...' : `Connect ${provider}`}
        </button>
      </div>
    </div>
  );
}
