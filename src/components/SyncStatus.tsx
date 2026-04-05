// UI component showing sync status for an account
'use client';

import { useEffect, useState } from 'react';

interface SyncStatusProps {
  accountId: string;
}

export function SyncStatus({ accountId }: SyncStatusProps) {
  const [status, setStatus] = useState<'idle' | 'syncing' | 'error'>('idle');
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`/api/accounts/${accountId}/sync`);
        if (res.ok) {
          const data = await res.json();
          setStatus(data.status);
          setLastSync(data.completed_at ? new Date(data.completed_at) : null);
          setError(data.error || data.sync_error);
        }
      } catch (err) {
        console.error('Failed to fetch sync status:', err);
      }
    };
    
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, [accountId]);
  
  return (
    <div className="flex items-center gap-2 text-sm">
      {status === 'running' && (
        <>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span>Syncing...</span>
        </>
      )}
      {status === 'failed' && (
        <>
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <span className="text-red-400">{error || 'Sync error'}</span>
        </>
      )}
      {status === 'completed' && lastSync && (
        <>
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span>Last sync: {lastSync.toLocaleTimeString()}</span>
        </>
      )}
      {status === 'pending' && (
        <>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          <span>Pending...</span>
        </>
      )}
    </div>
  );
}
