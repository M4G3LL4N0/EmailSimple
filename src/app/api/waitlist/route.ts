import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface WaitlistRequest {
  name: string;
  email: string;
}

interface SuccessResponse {
  success: boolean;
}

interface ErrorResponse {
  error: string;
}

interface WaitlistRequest {
  name: string;
  email: string;
}

export async function POST(request: Request) {
  const { name, email } = (await request.json()) as WaitlistRequest;

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    );
  }

  // If Supabase isn't configured, still return success
  if (!supabase) {
    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  }

  try {
    const { error } = await supabase
      .from('waitlist_signups')
      .insert({
        name,
        email,
        source: 'landing_page',
        status: 'pending',
      });

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}
