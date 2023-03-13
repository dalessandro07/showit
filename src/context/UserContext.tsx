import { createContext, useContext, useEffect, useState } from 'react'
import { getUserData, signInWithGithub } from '../supabase'
import type { UserMetadata } from '@supabase/supabase-js'

export const UserContext = createContext({
  user: {} as UserMetadata,
  handleLogin: () => {}
})

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserMetadata>({})

  useEffect(() => {
    async function checkUser() {
      const { session, sessionError } = await getUserData()

      if (sessionError) {
        console.log(sessionError)
      }

      const user = session?.user.user_metadata

      if (user) setUser(user)
    }

    checkUser()
  }, [])

  const handleLogin = async () => {
    const { data, error } = await signInWithGithub()
    if (error) console.log(error)
  }

  return <UserContext.Provider value={{ user, handleLogin }}>{children}</UserContext.Provider>
}

export default UserProvider
