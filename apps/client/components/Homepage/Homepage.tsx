import React from 'react'
import { HomepageImageSlider } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider'
import { HomepageEntity } from '~/src/gql/graphql'
import { notEmpty } from '~/utility/typescript/not-empty'

interface HomepageProps {
    homepage: HomepageEntity
}

export const Homepage: React.FC<HomepageProps> = ({ homepage }) => {

  const images = homepage.attributes?.images

  return (
    <div>
      {images && <HomepageImageSlider images={images.filter(notEmpty)} />}
    </div>
  )
}
