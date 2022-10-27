const Routes = {
  home: '/',
  confirmRegistration: '/potvrzeni-registrace',
  login: '/prihlasit-se',
  posts: '/aktuality'
}

const routes = [
  {
    source: Routes.home,
    destination: '/'
  },
  {
    source: Routes.confirmRegistration,
    destination: '/auth/confirmRegistration'
  },
  {
    source: Routes.login,
    destination: '/auth/login'
  },
  {
    source: Routes.posts,
    destination: '/posts'
  }
]

// eslint-disable-next-line no-undef
module.exports = { routes, Routes }
