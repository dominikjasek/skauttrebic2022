import React from 'react'
import { HomepageImageSlider } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider'
import { HomepageQuery } from '~/src/api/gql/graphql'
import { HomepageImage } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider.interfaces'
import { TroopProps } from '~/components/Homepage/Troops/Troop'
import { Troops } from '~/components/Homepage/Troops/Troops'
import { AboutUs } from '~/components/Homepage/AboutUs'
import { notEmpty } from '~/src/utility/typescript/not-empty'

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

  const aboutUsText = homepage.homepage!.data!.attributes!.about

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
      <AboutUs text={aboutUsText} />
      <Troops troops={troops} />
    </div>
  )
}
