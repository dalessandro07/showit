import HeroTitle from '@/components/hero/HeroTitle'
import RegisterButton from '@/components/buttons/RegisterButton'

export default function HeroSection({ children }: { children: JSX.Element | string }) {
  return (
    <section className="flex flex-col justify-center grow gap-10">
      <HeroTitle>{children}</HeroTitle>
      <RegisterButton />
      <svg
        className="absolute -z-50 top-0 left-0 text-accent"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M62.4,-24.2C69.8,2.4,57,31.6,35.1,47.4C13.1,63.1,-17.9,65.3,-41,50C-64.1,34.8,-79.2,2,-71.1,-25.7C-62.9,-53.5,-31.5,-76.3,-2,-75.6C27.5,-75,55,-50.9,62.4,-24.2Z"
          transform="translate(200 20)"
        />
      </svg>
    </section>
  )
}
