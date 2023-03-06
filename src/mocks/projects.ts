import { faker } from '@faker-js/faker/locale/es'

// Función para generar el objeto de proyecto
const generateProject = () => ({
  id: faker.datatype.uuid(),
  title: faker.company.catchPhrase(),
  description: faker.lorem.sentence(),
  coverImage: faker.image.imageUrl(),
  tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  creators: [
    {
      username: faker.internet.userName(),
      fullName: faker.name.fullName(),
      avatar: faker.image.avatar()
    },
    {
      username: faker.internet.userName(),
      fullName: faker.name.fullName(),
      avatar: faker.image.avatar()
    }
  ],
  likes: faker.datatype.number(1000),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  projectUrl: faker.internet.url(),
  repositoryUrl: faker.internet.url()
})

// Generar 100 objetos de proyecto
export const projects1 = Array.from({ length: 50 }, generateProject)
export const projects2 = Array.from({ length: 50 }, generateProject)
