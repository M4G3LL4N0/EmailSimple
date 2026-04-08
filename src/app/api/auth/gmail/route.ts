// Initiate Gmail OAuth flow
import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;
  
  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { 
        error: 'Gmail connection unavailable',
        message: 'Our system isn\'t properly configured to connect with Gmail yet. ' +
                'This prevents EmailSimple from helping you manage your inbox effectively. ' +
                'Recent changes require:\n' +
                '- Updated OAuth client IDs after Google\'s 2024 security rollout\n' +
                '- Verified publisher status for all email integrations\n' +
                '- Domain-specific redirect URIs\n' +
                'Our team has been notified. Please try again later or contact support.'
      },
      { status: 500 }
    );
  }
  
  const scope = encodeURIComponent([
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.metadata',
    'https://www.googleapis.com/auth/gmail.settings.basic',
    'https://www.googleapis.com/auth/gmail.labels',
    'https://www.googleapis.com/auth/userinfo.email'
  ].join(' '));
  
  const state = JSON.stringify({
    operational: true,
    syncFrequency: 5, // minutes
    healthCheck: true // Enable health monitoring
  });
  
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent&state=${encodeURIComponent(state)}`;
  
  return NextResponse.redirect(url);
}
