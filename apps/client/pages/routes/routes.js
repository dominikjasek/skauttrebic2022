const Routes = {
  home: '/',
  test: '/testik',
  posts: '/aktuality'
}

const routes = [
  {
    home: Routes.home,
    destination: '/'
  },
  {
    source: Routes.test,
    destination: '/test'
  },
  {
    source: Routes.posts,
    destination: '/posts'
  }
]

// eslint-disable-next-line no-undef
module.exports = { routes, Routes }
