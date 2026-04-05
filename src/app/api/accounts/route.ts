// API routes for account management
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { data: accounts, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json(accounts);
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { provider, email, accessToken, refreshToken, tokenExpiresAt, scopes } = await request.json();
  
  // Validate required fields
  if (!provider || !email || !accessToken) {
    return NextResponse.json(
      { error: 'Provider, email, and accessToken are required' },
      { status: 400 }
    );
  }
  
  // Insert account
  const { data: account, error } = await supabase
    .from('accounts')
    .insert({
      user_id: user.id,
      provider,
      email,
      access_token: accessToken,
      refresh_token: refreshToken,
      token_expires_at: tokenExpiresAt,
      scopes: scopes || []
    })
    .select()
    .single();
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  // Trigger initial sync in background (could use a queue)
  fetch(`${process.env.NEXT_PUBLIC_URL}/api/accounts/${account.id}/sync`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }).catch(console.error);
  
  return NextResponse.json(account, { status: 201 });
}
