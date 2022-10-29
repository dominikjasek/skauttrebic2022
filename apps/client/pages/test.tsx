import Link from 'next/link'
import Routes from '~/config/routes'
import { requireAuthentication } from '~/src/api/lib/requireAuthentication'
import { GetServerSidePropsContext } from 'next'

const Test = (props: any) => {

  return (
    <>
      <Link href={Routes.home}>jit domu</Link>
    </>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return requireAuthentication(context)
}

export default Test
