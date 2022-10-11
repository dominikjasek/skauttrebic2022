import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { useTitle } from 'react-use'
import { Homepage } from '~/components/Homepage/Homepage'
import { useHomePageRepository } from '~/src/homepage/HomepageRepository'

const Home: NextPage = ({ homepage }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useTitle('Skaut Třebíč')

  return (
    <main>
      <Homepage homepage={homepage} />
      <Link href={'/testik'}>testik</Link>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const homepageRepository = useHomePageRepository()
  const data = await homepageRepository.fetchHomePageData()
  console.log(data)

  return {
    props: {
      homepage: data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}

export default Home
