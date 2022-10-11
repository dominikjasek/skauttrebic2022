import React from 'react'
import { IHomepage } from '~/src/homepage/homepage.interface'

interface HomepageProps {
    homepage: IHomepage
}

export const Homepage: React.FC<HomepageProps> = (props) => {

  console.log('homepage', props.homepage)

  return (
    <div>
      <pre>{JSON.stringify(props.homepage, null, 2) }</pre>
    </div>
  )
}