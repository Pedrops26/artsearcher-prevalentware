import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
