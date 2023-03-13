import Link from 'next/link'

const navigation = [
  {
    name: 'Explorar',
    href: '/projects'
  },
  {
    name: 'Publicar',
    href: '/new-project'
  },
  {
    name: 'Creadores',
    href: '/developers'
  }
]

export default function Navigation() {
  return (
    <nav className="w-1/3">
      <ul className="flex w-full justify-around">
        {navigation.map((item) => (
          <li className="font-bold" key={item.name}>
            <Link
              href={item.href}
              className="hover:text-primary dark:hover:text-secondary hover:underline transition-all duration-200">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
