import { createClient } from '@supabase/supabase-js'

const URL = "https://rrsvolafjewsvtrbslzn.supabase.co";
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyc3ZvbGFmamV3c3Z0cmJzbHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxOTUwMDIsImV4cCI6MjAxMzc3MTAwMn0.pXaB0W4FG4GbjkOxn7V98B-A5EZ64far8bA70krukjA';

// establish a client connection to superbase
export const supabase = createClient(URL, API_KEY);