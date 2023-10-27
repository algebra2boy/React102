import { createClient } from '@supabase/supabase-js'

const URL = "https://jtgzkbbyrnzflqbmphnk.supabase.co";
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0Z3prYmJ5cm56ZmxxYm1waG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNzQ0MDIsImV4cCI6MjAxMzk1MDQwMn0.H0i83I_QYqNoHbPzyY88j_NLAZtDd1oMZZPqdx_o6-s';

// establish a client connection to superbase
const database = createClient(URL, API_KEY);;

export default database;