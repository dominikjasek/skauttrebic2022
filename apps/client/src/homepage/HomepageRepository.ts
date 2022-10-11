import { IHomepage } from './homepage.interface'

class HomepageRepository {
  async fetchHomePageData(): Promise<IHomepage> {
    const res = await fetch(`${process.env.API_URL}/homepage?populate=*`)
    return await res.json() as IHomepage
  }

}

export const useHomePageRepository = () => {
  return new HomepageRepository()
}