import { IHomepage } from './homepage.interface'

class HomepageRepository {
  async fetchHomePageData(): Promise<IHomepage> {
    const res = await fetch(`${process.env.API_URL}/homepage?populate[0]=images&populate[images][populate][1]=photo&populate[2]=troops`)
    return await res.json() as IHomepage
  }

}

export const useHomePageRepository = () => {
  return new HomepageRepository()
}
