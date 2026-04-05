// Handle Gmail OAuth callback
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  const error = request.nextUrl.searchParams.get('error');
  const state = request.nextUrl.searchParams.get('state');
  
  if (error) {
    return NextResponse.redirect(new URL('/accounts?error=oauth_failed', request.url));
  }
  
  if (!code) {
    return NextResponse.redirect(new URL('/accounts?error=no_code', request.url));
  }
  
  // Exchange code for tokens
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
      grant_type: 'authorization_code'
    })
  });
  
  const tokens = await tokenResponse.json();
  
  if (!tokenResponse.ok) {
    return NextResponse.redirect(new URL('/accounts?error=token_exchange_failed', request.url));
  }
  
  // Get user info from Google
  const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${tokens.access_token}` }
  });
  const userInfo = await userInfoRes.json();
  
  // Store account in database
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.redirect(new URL('/accounts?error=not_authenticated', request.url));
  }
  
  const { data: account, error: insertError } = await supabase
    .from('accounts')
    .insert({
      user_id: user.id,
      provider: 'gmail',
      email: userInfo.email,
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      token_expires_at: tokens.expires_in 
        ? new Date(Date.now() + tokens.expires_in * 1000).toISOString()
        : null,
      scopes: tokens.scope?.split(' ') || []
    })
    .select()
    .single();
  
  if (insertError) {
    return NextResponse.redirect(new URL('/accounts?error=db_error', request.url));
  }
  
  // Redirect back to accounts page with success
  return NextResponse.json({ success: true });
}
