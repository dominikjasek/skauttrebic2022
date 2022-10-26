const Routes = {
  home: '/',
  confirmRegistration: '/potvrzeni-registrace',
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
    source: Routes.posts,
    destination: '/posts'
  }
]

// eslint-disable-next-line no-undef
module.exports = { routes, Routes }
