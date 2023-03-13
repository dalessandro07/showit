import RegisterButton from '@/components/buttons/RegisterButton'

const creators = 100

export default function NewProjectPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="font-bold text-6xl w-4/5 text-center">
        Más de {creators} desarrolladores ya publicaron su proyecto en ShowIt, ¡no te quedes atrás!
      </h1>

      <RegisterButton />
    </div>
  )
}
