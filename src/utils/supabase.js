import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tulaaruanfxnjckaiswj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1bGFhcnVhbmZ4bmpja2Fpc3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MzU2NzksImV4cCI6MjAxNjAxMTY3OX0.YY3fxwY2y_xdNqUt-cLglRU1BjlpyfhwUeskZGzHTFE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
