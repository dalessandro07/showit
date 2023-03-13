import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 mb-10">
      <Link className="flex w-max" href="/">
        <Image src="/favicon.png" alt="ShowIt" width={50} height={50} />
      </Link>

      <Navigation />
    </header>
  )
}
