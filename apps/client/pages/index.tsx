import type { NextPage } from 'next'
import { useTitle } from 'react-use'
import { Homepage } from '~/components/Homepage/Homepage'
import { useHomePageRepository } from '~/src/homepage/HomepageRepository'
import { dehydrate, QueryClient, useQuery } from 'react-query'

const Home: NextPage = () => {
  useTitle('Skaut Třebíč')
  const homepageRepository = useHomePageRepository()
  const { data, isLoading } = useQuery('homepage', homepageRepository.fetchHomePageData)

  if (isLoading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <main>
      {data && <Homepage homepage={data} />}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate, nihil? Animi architecto beatae consectetur, consequatur dicta est pariatur veniam! A consectetur culpa dolorum labore nam odit, similique. Amet, enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad assumenda deleniti dolorem iste omnis porro provident quisquam rerum, similique. Accusantium ad aut consectetur culpa dolorem eligendi est eum facere fugiat, hic iste libero, nobis obcaecati quis sed sint velit. Deserunt expedita natus nesciunt optio quae ullam voluptates. Nemo, quibusdam.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate, nihil? Animi architecto beatae consectetur, consequatur dicta est pariatur veniam! A consectetur culpa dolorum labore nam odit, similique. Amet, enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad assumenda deleniti dolorem iste omnis porro provident quisquam rerum, similique. Accusantium ad aut consectetur culpa dolorem eligendi est eum facere fugiat, hic iste libero, nobis obcaecati quis sed sint velit. Deserunt expedita natus nesciunt optio quae ullam voluptates. Nemo, quibusdam.
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
