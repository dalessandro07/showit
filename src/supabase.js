import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pekluratcdgqyendpjab.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export async function signInWithGithub () {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  })

  return { data, error }
}

export async function getUserData () {
  const {
    data: { session },
    error
  } = await supabase.auth.getSession()
  return { session, sessionError: error }
}

export async function signOut () {
  const { data, error } = await supabase.auth.signOut()
  return { data, error }
}
