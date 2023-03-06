import HeroTitle from '@/components/hero/HeroTitle'
import RegisterButton from '@/components/buttons/RegisterButton'

export default function HeroSection({ children }: { children: JSX.Element | string }) {
  return (
    <section className="flex flex-col justify-center grow gap-10 lg:min-h-[80vh]">
      <HeroTitle>{children}</HeroTitle>
      <RegisterButton />
    </section>
  )
}
