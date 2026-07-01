export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

type TableDefinition<Row, Insert = Row, Update = Partial<Insert>> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: never[];
};

export type University = {
  id: string;
  name: string;
  city: string;
  website: string | null;
  phone: string | null;
  email: string | null;
  telegram: string | null;
  address: string | null;
  created_at: string;
  updated_at: string;
};

export type Program = {
  id: string;
  university_id: string;
  code: string;
  name: string;
  education_form: string;
  duration: string | null;
  price: number | null;
  budget_places: number;
  paid_places: number;
  special_quota: number;
  target_quota: number;
  for_spo: boolean;
  created_at: string;
  updated_at: string;
};

export type AdmissionCampaign = {
  id: string;
  program_id: string;
  start_date: string | null;
  end_internal: string | null;
  end_ege: string | null;
  consent_date: string | null;
  order_date: string | null;
  gosuslugi: boolean;
  personal_account: string | null;
  comment: string | null;
};

export type EntranceExam = {
  id: string;
  program_id: string;
  subject: string;
  format: string | null;
  exam_date: string | null;
  exam_time: string | null;
  minimum_score: number | null;
  schedule_url: string | null;
};

export type RequiredDocuments = {
  id: string;
  program_id: string;
  passport: boolean;
  diploma: boolean;
  snils: boolean;
  medical: boolean;
  photo: boolean;
  other: string | null;
};

export type Contact = {
  id: string;
  university_id: string;
  admission_phone: string | null;
  email: string | null;
  website: string | null;
  telegram: string | null;
  working_hours: string | null;
};

export type Note = {
  id: string;
  program_id: string;
  text: string;
  updated_at: string;
};

export type Favorite = {
  id: string;
  program_id: string;
};

export type Database = {
  public: {
    Tables: {
      universities: TableDefinition<University>;
      programs: TableDefinition<Program>;
      admission_campaigns: TableDefinition<AdmissionCampaign>;
      entrance_exams: TableDefinition<EntranceExam>;
      documents: TableDefinition<RequiredDocuments>;
      contacts: TableDefinition<Contact>;
      notes: TableDefinition<Note>;
      favorites: TableDefinition<Favorite>;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
