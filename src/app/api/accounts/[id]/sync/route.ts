// Sync control for an account
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { SyncService } from '@/lib/services/sync-service';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // Verify account belongs to user
  const { data: account, error: accountError } = await supabase
    .from('accounts')
    .select('*')
    .eq('id', params.id)
    .eq('user_id', user.id)
    .single();
  
  if (accountError || !account) {
    return NextResponse.json({ error: 'Account not found' }, { status: 404 });
  }
  
  const syncService = new SyncService(supabase);
  
  try {
    const job = await syncService.startSync(params.id);
    return NextResponse.json(job, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // Get latest sync job for this account
  const { data: job, error } = await supabase
    .from('sync_jobs')
    .select('*')
    .eq('account_id', params.id)
    .order('started_at', { ascending: false })
    .limit(1)
    .single();
  
  if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  if (!job) {
    return NextResponse.json({ status: 'idle', message: 'No sync jobs yet' });
  }
  
  return NextResponse.json(job);
}
