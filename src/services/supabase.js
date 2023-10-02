import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ciwptcjoqblckaikxuzw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpd3B0Y2pvcWJsY2thaWt4dXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNTU5ODIsImV4cCI6MjAxMTgzMTk4Mn0.LVUZnTaZyC3wgG6hzsTUxw4iZtOGbuqGTWfJJPyoXgc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
