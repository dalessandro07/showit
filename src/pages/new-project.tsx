import RegisterButton from '@/components/buttons/RegisterButton'
import { useUser } from '@/context/UserContext'

const creators = 100

export default function NewProjectPage() {
  const { user } = useUser()
  const nickname = user.preferred_username || user.user_name || user.name || user.email

  const fetchUrl = async (url: string) => {
    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center gap-10">
      {nickname ? (
        <>
          <h1 className="text-4xl font-bold">Publiquemos otro proyecto, {nickname}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target as HTMLFormElement)
              const url = formData.get('url') as string
              fetchUrl(url)
            }}
            className="flex flex-col w-full gap-4"
            action="">
            <label className="label-text" htmlFor="">
              Introduce la URL de tu proyecto
            </label>
            <input
              name="url"
              className="input input-primary input-lg w-full"
              type="text"
              placeholder="https://showitt.vercel.app"
            />
            <button className="btn btn-primary btn-lg w-full">Publicar</button>
          </form>
        </>
      ) : (
        <>
          <h1 className="font-bold text-7xl w-4/5 text-center">
            Más de {creators} desarrolladores ya publicaron su proyecto en ShowIt, ¡no te quedes
            atrás!
          </h1>

          <RegisterButton />
        </>
      )}
    </div>
  )
}
