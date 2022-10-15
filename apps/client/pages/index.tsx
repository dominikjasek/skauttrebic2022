import type { NextPage } from 'next'
import { useTitle } from 'react-use'
import { Homepage } from '~/components/Homepage/Homepage'
import { useHomePageRepository } from '~/src/homepage/HomepageRepository'
import { dehydrate, QueryClient, useQuery } from 'react-query'

const Home: NextPage = () => {
  useTitle('Skaut Třebíč')
  const homepageRepository = useHomePageRepository()
  const { data: homepage } = useQuery('homepage', homepageRepository.fetchHomePageData)

  return (
    <main>
      {homepage && <Homepage homepage={homepage} />}
    </main>
  )
}

export const getStaticProps = async () => {
  const homepageRepository = useHomePageRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('homepage', homepageRepository.fetchHomePageData)

  return {

    props: {
      dehydratedState: dehydrate(queryClient),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}

export default Home
