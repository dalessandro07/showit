import UseAnimations from 'react-useanimations'
import github from 'react-useanimations/lib/github'

export default function RegisterButton() {
  return (
    <button className="btn btn-primary btn-outline gap-2 w-max">
      <UseAnimations animation={github} strokeColor="currentColor" />
      Registrarme con Github
    </button>
  )
}
