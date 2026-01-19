import { IApiCall, useApiCall } from '~/src/api/lib/apiCall'
import { MenuItem } from '~/components/Navbar/Navbar.interface'

export interface PhotoGalleryType {
  data: {
    attributes: {
      troops: MenuItem[]
    }
  }
}

class PhotoGalleryRepository {

  constructor(
    private readonly fetch: IApiCall,
  ) {}

  fetchPhotoGallery = async () => {
    return (await this.fetch('/photo-gallery?populate=deep')).data as PhotoGalleryType
  }
}

export const usePhotoGalleryRepository = () => {
  const apiCall = useApiCall()

  return new PhotoGalleryRepository(apiCall)
}