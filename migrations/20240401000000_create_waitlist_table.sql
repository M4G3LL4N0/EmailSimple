create table waitlist_signups (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  source text not null default 'landing_page',
  status text not null default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

create unique index waitlist_signups_email_idx on waitlist_signups (lower(email));
