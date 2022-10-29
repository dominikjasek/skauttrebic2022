import Routes from '~/config/routes'
import { GetServerSidePropsContext } from 'next'

export const requirePublic = (context: GetServerSidePropsContext) => {
  const jwt = context.req.cookies.jwt

  if (jwt) {
    return {
      redirect: {
        destination: Routes.home,
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const publicGuard = (context: GetServerSidePropsContext) => {
  return requirePublic(context)
}

export const publicGuardFactory = () => publicGuard
