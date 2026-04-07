-- Run this in your Supabase SQL editor to create the orders table

create table orders (
  id uuid default gen_random_uuid() primary key,
  stripe_payment_id text unique not null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  address text,
  size text not null,
  amount_gbp text not null,
  status text default 'paid',
  created_at timestamptz default now()
);

-- Enable Row Level Security (read only via service role)
alter table orders enable row level security;

-- Allow service role full access (used by webhook)
create policy "Service role full access"
  on orders
  using (true)
  with check (true);
