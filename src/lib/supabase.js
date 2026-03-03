import { createClient } from '@supabase/supabase-js'

// Read Supabase connection details from Vite environment variables.
// Do NOT commit secrets to the repository. For local development copy .env.example -> .env and fill values.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
	// Fail fast in development so developer notices missing env vars
	// eslint-disable-next-line no-console
	console.warn('Supabase client: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not set. Requests may fail.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)