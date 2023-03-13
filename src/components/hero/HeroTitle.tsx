export default function HeroTitle({ children }: { children: JSX.Element | string }) {
  return <h1 className="text-8xl font-bold w-2/3 z-10 relative">{children}</h1>
}
