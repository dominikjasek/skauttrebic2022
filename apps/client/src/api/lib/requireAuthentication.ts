import Routes from '~/config/routes'
import { GetServerSidePropsContext } from 'next'

export const requireAuthentication = (context: GetServerSidePropsContext) => {
  const jwt = context.req.cookies.jwt

  if (!jwt) {
    return {
      redirect: {
        destination: Routes.login,
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
