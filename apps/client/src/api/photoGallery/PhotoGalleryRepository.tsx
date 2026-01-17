import { IApiCall, useApiCall } from '~/src/api/lib/apiCall'
import { MenuItem } from '~/components/Navbar/Navbar.interface'

export interface PhotoGalleryType {
  data: {
    attributes: {
      troop: MenuItem[]
    }
  }
}

class PhotoGalleryRepository {

  constructor(
    private readonly fetch: IApiCall,
  ) {}

  fetchPhotoGallery = async () => {
    return (await this.fetch('/photo-gallery?populate=*')).data as PhotoGalleryType
  }
}

export const usePhotoGalleryRepository = () => {
  const apiCall = useApiCall()

  return new PhotoGalleryRepository(apiCall)
}