import UseAnimations from 'react-useanimations'
import github from 'react-useanimations/lib/github'
import { useUser } from '@/context/UserContext'

export default function RegisterButton() {
  const { handleLogin } = useUser()

  return (
    <button onClick={handleLogin} className="btn btn-primary btn-outline gap-2 w-max">
      <UseAnimations animation={github} strokeColor="currentColor" />
      Registrarme con Github
    </button>
  )
}
