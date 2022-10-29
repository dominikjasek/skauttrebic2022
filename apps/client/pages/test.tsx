import Link from 'next/link'
import Routes from '~/config/routes'
import { protectedGuardFactory } from '~/src/api/lib/requireAuthentication'

const Test = (props: any) => {

  return (
    <>
      <Link href={Routes.home}>jit domu</Link>
    </>
  )
}

export const getServerSideProps = protectedGuardFactory()

export default Test
