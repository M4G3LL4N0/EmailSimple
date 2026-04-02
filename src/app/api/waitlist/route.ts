import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email } = await request.json();

  // Basic validation
  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from('waitlist_signups')
    .insert({
      name,
      email,
      source: 'landing_page',
      status: 'pending'
    });

  if (error) {
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: true },
    { status: 200 }
  );
}
