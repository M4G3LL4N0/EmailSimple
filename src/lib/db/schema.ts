// Supabase database schema definitions
// Run these SQL statements in your Supabase SQL editor

export const schema = {
  accounts: `
    create table if not exists accounts (
      id uuid primary key default gen_random_uuid(),
      user_id uuid references auth.users not null,
      provider text not null check (provider in ('gmail', 'outlook', 'imap')),
      email text not null,
      display_name text,
      access_token text not null,
      refresh_token text,
      token_expires_at timestamptz,
      scopes text[] default '{}',
      is_active boolean default true,
      last_sync_at timestamptz,
      sync_status text default 'idle' check (sync_status in ('idle', 'syncing', 'error')),
      sync_error text,
      created_at timestamptz default now(),
      updated_at timestamptz default now(),
      unique(user_id, email)
    );
    
    create index if not exists idx_accounts_user_id on accounts(user_id);
    create index if not exists idx_accounts_email on accounts(email);
  `,
  
  threads: `
    create table if not exists threads (
      id uuid primary key default gen_random_uuid(),
      account_id uuid references accounts(id) on delete cascade not null,
      provider text not null,
      provider_thread_id text not null,
      subject text,
      last_activity timestamptz not null,
      unread boolean default false,
      labels text[] default '{}',
      sync_status text default 'synced' check (sync_status in ('synced', 'pending', 'error')),
      synced_at timestamptz,
      created_at timestamptz default now(),
      updated_at timestamptz default now(),
      unique(account_id, provider_thread_id)
    );
    
    create index if not exists idx_threads_account_id on threads(account_id);
    create index if not exists idx_threads_last_activity on threads(last_activity desc);
    create index if not exists idx_threads_unread on threads(unread) where unread = true;
  `,
  
  messages: `
    create table if not exists messages (
      id uuid primary key default gen_random_uuid(),
      thread_id uuid references threads(id) on delete cascade not null,
      account_id uuid references accounts(id) on delete cascade not null,
      provider text not null,
      provider_message_id text not null,
      from_address text not null,
      from_name text,
      to_addresses text[] not null,
      cc_addresses text[],
      bcc_addresses text[],
      subject text,
      body text not null,
      body_html text,
      date timestamptz not null,
      labels text[] default '{}',
      has_attachments boolean default false,
      created_at timestamptz default now(),
      unique(account_id, provider_message_id)
    );
    
    create index if not exists idx_messages_thread_id on messages(thread_id);
    create index if not exists idx_messages_date on messages(date desc);
    create index if not exists idx_messages_account_id on messages(account_id);
  `,
  
  participants: `
    create table if not exists participants (
      id uuid primary key default gen_random_uuid(),
      thread_id uuid references threads(id) on delete cascade not null,
      address text not null,
      name text,
      type text not null check (type in ('from', 'to', 'cc', 'bcc')),
      unique(thread_id, address, type)
    );
    
    create index if not exists idx_participants_thread_id on participants(thread_id);
    create index if not exists idx_participants_address on participants(address);
  `,
  
  sync_jobs: `
    create table if not exists sync_jobs (
      id uuid primary key default gen_random_uuid(),
      account_id uuid references accounts(id) not null,
      status text not null check (status in ('pending', 'running', 'completed', 'failed')),
      started_at timestamptz not null,
      completed_at timestamptz,
      threads_processed integer default 0,
      messages_processed integer default 0,
      error_count integer default 0,
      errors jsonb default '[]'
    );
    
    create index if not exists idx_sync_jobs_account_id on sync_jobs(account_id);
    create index if not exists idx_sync_jobs_started_at on sync_jobs(started_at desc);
  `,
};
