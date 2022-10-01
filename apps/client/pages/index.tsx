import type { NextPage } from 'next'
import Link from 'next/link'
import { useTitle } from 'react-use'

const Home: NextPage = () => {
  useTitle('Skaut Třebíč')

  return (
    <main>
      vitej doma
      <Link href={'/testik'}>testik</Link>
    </main>
  )
}

export default Home
