import React, { FC } from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export interface PhotoProp {
  previewUrl: string
  url: string
  width: number
  height: number
  formats: any
}

interface GalleryProps {
  galleryId: string
  photos: PhotoProp[]
}

export const PhotoGallery: FC<GalleryProps> = (props) => {

  return (
    <Gallery>
      {
        props.photos.map((photo,i) => (
          <Item
            key={i}
            original={photo.formats?.large?.url}
            thumbnail={photo.formats?.thumbnail?.url}
            width={photo.formats?.large.width}
            height={photo.formats?.large.height}
          >
            {({ ref, open }) => (
              <img ref={ref as any} onClick={open} src={photo.formats?.thumbnail?.url} style={{ margin: 2 }} />
            )}
          </Item>
        ))
      }
    </Gallery>
  )

}
