import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lmdffncmijuxflpwffix.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZGZmbmNtaWp1eGZscHdmZml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyNjIzNDgsImV4cCI6MjAwNTgzODM0OH0.6wh6ANZYQ0eH99iUnm40B0poCEMqVa8lkBwRUZ0ho_o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
