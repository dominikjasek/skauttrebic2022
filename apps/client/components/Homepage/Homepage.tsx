import React from 'react'
import { HomepageImageSlider } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider'
import { HomepageQuery } from '~/src/gql/graphql'
import { notEmpty } from '~/utility/typescript/not-empty'
import { HomepageImage } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider.interfaces'

interface HomepageProps {
    homepage: HomepageQuery
}

export const Homepage: React.FC<HomepageProps> = ({ homepage }) => {

  const images: HomepageImage[] = homepage.homepage?.data?.attributes?.images?.filter(notEmpty).map(image => ({
    url: image.photo.data!.attributes!.url,
    text: image.text ?? null,
    backgroundColor: image.background_color ?? undefined,
    textColor: image.text_color ?? undefined
  })) ?? []

  return (
    <div>
      {images && <HomepageImageSlider images={images} />}
    </div>
  )
}
