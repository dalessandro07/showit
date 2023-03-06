export default function HeroTitle({ children }: { children: JSX.Element | string }) {
  return <h1 className="text-7xl font-semibold w-2/3">{children}</h1>
}
