import { IHomepage } from './homepage.interface'

class HomepageRepository {
  async fetch(): Promise<IHomepage> {
    const res = await fetch('http://localhost:1337/api/homepage?populate=*')
    return await res.json()
  }

}

export const useHomePageRepository = () => {
  return new HomepageRepository()
}