import React from 'react'
import { HomepageImageSlider } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider'
import { HomepageQuery } from '~/src/gql/graphql'
import { notEmpty } from '~/utility/typescript/not-empty'
import { HomepageImage } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider.interfaces'
import { TroopProps } from '~/components/Homepage/Troops/Troop'
import { Troops } from '~/components/Homepage/Troops/Troops'

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

  const troops: TroopProps[] = homepage.homepage?.data?.attributes?.troops?.filter(notEmpty).map(troop => ({
    logo: {
      url: troop.logo.data!.attributes!.url
    },
    ageInfo: troop.age_gender_information,
    id: troop.id,
    title: troop.title,
    description: troop.description
  })) ?? []

  return (
    <div>
      <HomepageImageSlider images={images} />
      <Troops troops={troops} />
    </div>
  )
}
