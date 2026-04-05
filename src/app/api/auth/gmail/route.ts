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
                'Our team has been notified. Please try again later or contact support.'
      },
      { status: 500 }
    );
  }
  
  const scope = encodeURIComponent(
    'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify'
  );
  
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;
  
  return NextResponse.redirect(url);
}
