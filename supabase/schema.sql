-- SPO Check database schema for PostgreSQL / Supabase.
-- Phase 2 prepares tables and relations only. RLS policies are intentionally not enabled yet.

create extension if not exists pgcrypto;

create table if not exists public.universities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text not null,
  website text,
  phone text,
  email text,
  telegram text,
  address text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.programs (
  id uuid primary key default gen_random_uuid(),
  university_id uuid not null references public.universities(id) on delete cascade,
  code text not null,
  name text not null,
  education_form text not null,
  duration text,
  price numeric(12, 2),
  budget_places integer not null default 0 check (budget_places >= 0),
  paid_places integer not null default 0 check (paid_places >= 0),
  special_quota integer not null default 0 check (special_quota >= 0),
  target_quota integer not null default 0 check (target_quota >= 0),
  for_spo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (university_id, code, education_form)
);

create table if not exists public.admission_campaigns (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs(id) on delete cascade,
  start_date date,
  end_internal date,
  end_ege date,
  consent_date date,
  order_date date,
  gosuslugi boolean not null default false,
  personal_account text,
  comment text
);

create table if not exists public.entrance_exams (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs(id) on delete cascade,
  subject text not null,
  format text,
  exam_date date,
  exam_time time,
  minimum_score integer check (minimum_score is null or minimum_score >= 0),
  schedule_url text
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs(id) on delete cascade,
  passport boolean not null default false,
  diploma boolean not null default false,
  snils boolean not null default false,
  medical boolean not null default false,
  photo boolean not null default false,
  other text
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  university_id uuid not null references public.universities(id) on delete cascade,
  admission_phone text,
  email text,
  website text,
  telegram text,
  working_hours text
);

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs(id) on delete cascade,
  text text not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs(id) on delete cascade
);

create index if not exists programs_university_id_idx on public.programs(university_id);
create index if not exists admission_campaigns_program_id_idx on public.admission_campaigns(program_id);
create index if not exists entrance_exams_program_id_idx on public.entrance_exams(program_id);
create index if not exists documents_program_id_idx on public.documents(program_id);
create index if not exists contacts_university_id_idx on public.contacts(university_id);
create index if not exists notes_program_id_idx on public.notes(program_id);
create index if not exists favorites_program_id_idx on public.favorites(program_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_universities_updated_at on public.universities;
create trigger set_universities_updated_at
before update on public.universities
for each row
execute function public.set_updated_at();

drop trigger if exists set_programs_updated_at on public.programs;
create trigger set_programs_updated_at
before update on public.programs
for each row
execute function public.set_updated_at();

drop trigger if exists set_notes_updated_at on public.notes;
create trigger set_notes_updated_at
before update on public.notes
for each row
execute function public.set_updated_at();

comment on table public.universities is 'Universities available for SPO applicants.';
comment on table public.programs is 'Higher education programs linked to universities.';
comment on table public.admission_campaigns is 'Admission campaign dates and entry channels for programs.';
comment on table public.entrance_exams is 'Entrance exam schedule and minimum score data for programs.';
comment on table public.documents is 'Document checklist requirements for programs.';
comment on table public.contacts is 'Admission office contact details for universities.';
comment on table public.notes is 'Program notes prepared for future user-facing workflows.';
comment on table public.favorites is 'Program favorites prepared for future user-facing workflows.';

-- RLS preparation:
-- Keep row level security disabled during Phase 2.
-- Future phases should enable RLS with explicit select/insert/update/delete policies per table.
