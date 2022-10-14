import React from 'react'
import { IHomepage } from '~/src/homepage/homepage.interface'
import { HomepageImageSlider } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider'

interface HomepageProps {
    homepage: IHomepage
}

export const Homepage: React.FC<HomepageProps> = (props) => {
  return (
    <div>
      <HomepageImageSlider />
      <div>
        <pre>{JSON.stringify(props.homepage, null, 2) }</pre>
      </div>
    </div>
  )
}