import Head from 'next/head'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/hero/HeroSection'
import { projects1, projects2 } from '@/mocks/projects'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

const INDEX_PROJECTS = [
  {
    title: 'Destacados',
    projects: [...projects1]
  },
  {
    title: 'Portafolios',
    projects: [...projects2]
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>ShowIt - Muestra tu proyecto al mundo</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="description"
          content="Muestra tus proyectos de desarrollo, obtén feedback y más con ShowIt, la plataforma de exhibición de proyectos más completa."
        />
        <meta name="keywords" content="ShowIt, proyectos, desarrollo, creativos, plataforma" />
        <meta name="author" content="Alessandro Rios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-col gap-8" style={inter.style}>
        <HeroSection>Comparte tus proyectos y encuentra inspiración</HeroSection>

        <section className="flex flex-col gap-10">
          {INDEX_PROJECTS?.map((section, index) => (
            <article className="flex flex-col gap-8" key={index}>
              <h2 className="text-xl font-bold">{section.title}</h2>

              <div className="carousel rounded-box">
                {section.projects.map((project, index) => (
                  <div className="carousel-item flex flex-col pr-5" key={index}>
                    {/* <h3 className="truncate w-4/5">{project.title}</h3> */}
                    <Image
                      className="w-auto h-auto"
                      src={project.coverImage}
                      alt={project.title}
                      width={300}
                      height={300}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

